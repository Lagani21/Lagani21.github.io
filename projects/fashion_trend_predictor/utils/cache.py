import pandas as pd
import os


def load_cached_data(cache_file):
    """
    Load cached trend data if it exists.

    Args:
        cache_file (str): Path to cached file.

    Returns:
        pd.DataFrame or None: Cached data or None if not found.
    """
    if os.path.exists(cache_file):
        return pd.read_csv(cache_file)
    return None


def save_data_to_cache(df, cache_file):
    """
    Save trend data to a cache file.

    Args:
        df (pd.DataFrame): Data to save.
        cache_file (str): Path to cache file.
    """
    df.to_csv(cache_file, index=False)
    print(f"✅ Data saved to {cache_file}")
