import os
import time
import random
import pandas as pd
from pytrends.request import TrendReq
from utils.cache import load_cached_data, save_data_to_cache


def fetch_trends(
    keywords, 
    start_date='2023-01-01', 
    end_date='2023-12-31', 
    geo='', 
    cache_file='data/trend_data.csv'
):
    """
    Fetch Google Trends data with throttling, batching, and caching.

    Args:
        keywords (list): List of keywords to search.
        start_date (str): Start date for trends (YYYY-MM-DD).
        end_date (str): End date for trends (YYYY-MM-DD).
        geo (str): Geographic region.
        cache_file (str): Path to cache file.

    Returns:
        pd.DataFrame: Trends data.
    """
    trend_data = load_cached_data(cache_file)
    if trend_data is not None and 'date' in trend_data.columns:
        print("✅ Cached data already contains 'date' column.")
        return trend_data

    pytrends = TrendReq()
    timeframe = f"{start_date} {end_date}"
    trend_data = pd.DataFrame()
    
    BATCH_SIZE = 5
    
    for i in range(0, len(keywords), BATCH_SIZE):
        batch = keywords[i:i + BATCH_SIZE]
        print(f"Fetching data for batch: {batch}")
        success = False

        for attempt in range(3):  # Retry logic
            try:
                pytrends.build_payload(batch, timeframe=timeframe, geo=geo)
                batch_data = pytrends.interest_over_time()
                
                if not batch_data.empty:
                    batch_data.reset_index(inplace=True)  # Convert index to column
                    batch_data = batch_data.drop(columns=["isPartial"], errors='ignore')
                    trend_data = pd.concat([trend_data, batch_data], axis=1)
                    success = True
                    break
            except Exception as e:
                print(f"Attempt {attempt + 1} failed for batch {batch}: {e}")
                time.sleep(random.randint(20, 60))  # Retry with a delay
        
        if not success:
            print(f"Failed to fetch data for batch {batch} after 3 attempts.")
        
        time.sleep(random.randint(30, 60))

    if not trend_data.empty and 'date' not in trend_data.columns:
        trend_data.reset_index(inplace=True)  # Ensure 'date' is a column
    
    if not trend_data.empty:
        save_data_to_cache(trend_data, cache_file)
    
    return trend_data
