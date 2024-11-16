from pytrends.request import TrendReq
import pandas as pd

def fetch_trends(keywords, timeframe='2022-01-01 2023-12-31', geo=''):
    """
    Fetch Google Trends data for the specified keywords.
    
    Args:
        keywords (list): List of keywords to search.
        timeframe (str): Time range for the trends (e.g., '2022-01-01 2023-12-31').
        geo (str): Geographic region (e.g., 'US', 'UK', or '' for worldwide).
    
    Returns:
        pd.DataFrame: Dataframe containing interest over time.
    """
    pytrends = TrendReq()
    pytrends.build_payload(keywords, cat=0, timeframe=timeframe, geo=geo, gprop='')
    trend_data = pytrends.interest_over_time()

    if not trend_data.empty:
        return trend_data.drop(columns=["isPartial"])  # Drop 'isPartial' column
    else:
        print("No data retrieved. Try different keywords or timeframe.")
        return None
