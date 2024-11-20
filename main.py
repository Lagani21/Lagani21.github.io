import pandas as pd
from fetch_trends import fetch_trends
from visualize_trends import plot_trends_static, plot_trends_interactive

if __name__ == "__main__":
    # Define keywords for fashion trends
    keywords = ["floral patterns", "pastel dresses", "streetwear"]

    # Fetch Google Trends data
    trend_data = fetch_trends(keywords)

    # Check if trend data is valid
    if trend_data is None or trend_data.empty:
        print("Failed to fetch trend data. Please check your settings.")
    else:
        # Convert index to datetime for proper visualization
        trend_data.index = pd.to_datetime(trend_data.index)

        # Plot trends
        plot_trends_static(trend_data, keywords)
        plot_trends_interactive(trend_data, keywords)
