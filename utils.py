import os
import pandas as pd


def load_cached_data(file_path):
    """
    Load cached data from a file if it exists and is valid.
    
    Args:
        file_path (str): Path to the cached file.

    Returns:
        pd.DataFrame or None: Cached data if available and valid, else None.
    """
    if os.path.exists(file_path):
        print(f"Loading cached data from {file_path}...")
        try:
            # Check if the file is empty
            if os.path.getsize(file_path) == 0:
                print("Cache file is empty. Ignoring cached data.")
                return None
            
            data = pd.read_csv(file_path, index_col=0, parse_dates=True)
            
            if data.empty:
                print("Cached data is empty. Fetching new data.")
                return None
            
            return data
        except Exception as e:
            print(f"Error loading cached data: {e}")
    return None



def save_data_to_cache(data, file_path):
    """
    Save data to a cache file.
    
    Args:
        data (pd.DataFrame): Data to save.
        file_path (str): Path to save the data.
    """
    if data is None or data.empty:
            print("No data to cache.")
            return

    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    try:
        data.to_csv(file_path)
        print(f"Data saved to {file_path}")
    except Exception as e:
        print(f"Error saving data to cache: {e}")
