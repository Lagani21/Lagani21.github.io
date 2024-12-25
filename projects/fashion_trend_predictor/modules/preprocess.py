import pandas as pd


def preprocess_data(df):
    """
    Preprocess trend data by cleaning and transforming.

    Args:
        df (pd.DataFrame): Raw trend data.

    Returns:
        pd.DataFrame: Cleaned trend data.
    """
    # Ensure 'date' is in datetime format
    df['date'] = pd.to_datetime(df['date'], errors='coerce')
    df = df.dropna(subset=['date'])  # Drop rows with invalid dates
    
    # Fill missing trend data with 0
    df.fillna(0, inplace=True)
    
    # Remove unnecessary columns
    if 'isPartial' in df.columns:
        df.drop(columns=['isPartial'], inplace=True)
    
    print("✅ Data preprocessing complete.")
    return df
