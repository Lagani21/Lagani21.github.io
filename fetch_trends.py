import os
import time
import random
import pandas as pd
from pytrends.request import TrendReq
from utils import load_cached_data, save_data_to_cache


def fetch_trends(keywords, timeframe='2020-01-01 2023-12-31', geo='', cache_file='data/trend_data.csv'):
    """
    Fetch Google Trends data with throttling and caching.
    
    Args:
        keywords (list): List of keywords to search.
        timeframe (str): Time range for the trends.
        geo (str): Geographic region (e.g., 'US', 'UK', or '' for worldwide).
        cache_file (str): Path to cache file for fetched data.

    Returns:
        pd.DataFrame: Trends data.
    """
    # Load cached data if available
    trend_data = load_cached_data(cache_file)
    if trend_data is not None:
        return trend_data

    pytrends = TrendReq()
    trend_data = pd.DataFrame()

# Fetch data one keyword at a time
    for keyword in keywords:
        print(f"Fetching data for keyword: {keyword}")
        success = False

        for attempt in range(3):  # Retry up to 3 times
            try:
                pytrends.build_payload([keyword], timeframe=timeframe, geo=geo)
                batch_data = pytrends.interest_over_time()
                if not batch_data.empty:
                    batch_data = batch_data.drop(columns=["isPartial"])  # Remove unnecessary column
                    trend_data = pd.concat([trend_data, batch_data[keyword]], axis=1)
                    success = True
                    break  # Exit retry loop on success
            except Exception as e:
                print(f"Attempt {attempt + 1} failed for {keyword}: {e}")
                time.sleep(random.randint(20, 60))  # Longer delay on retry

        if not success:
            print(f"Failed to fetch data for {keyword} after 3 attempts.")

    # # Fetch data in batches of 5 keywords (max allowed by Google Trends)
    # for i in range(0, len(keywords), 3):
    #     batch = keywords[i:i + 3]
    #     print(f"Fetching data for batch: {batch}")

    #     try:
    #         pytrends.build_payload(batch, timeframe=timeframe, geo=geo)
    #         batch_data = pytrends.interest_over_time()
    #         if not batch_data.empty:
    #             batch_data = batch_data.drop(columns=["isPartial"])  # Remove unnecessary column
    #             trend_data = pd.concat([trend_data, batch_data], axis=1)
    #     except Exception as e:
    #         print(f"Error fetching data for batch {batch}: {e}")

        # Throttle requests to avoid hitting rate limits
        time.sleep(random.randint(30, 60))

    # Save fetched data to cache
    if not trend_data.empty:
        save_data_to_cache(trend_data, cache_file)

    return trend_data
