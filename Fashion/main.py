# Install pytrends library if not already installed
# pip install pytrends

from pytrends.request import TrendReq
import pandas as pd
import matplotlib.pyplot as plt

# Initialize pytrends
pytrends = TrendReq()

# Define keywords for fashion trends
keywords = ["floral patterns", "pastel dresses", "streetwear"]

# Build the payload
pytrends.build_payload(keywords, cat=0, timeframe='2022-01-01 2023-12-31', geo='', gprop='')

# Fetch interest over time
trend_data = pytrends.interest_over_time()

# Check if data contains valid results
if not trend_data.empty:
    trend_data = trend_data.drop(columns=["isPartial"])  # Drop 'isPartial' column
    print(trend_data.head())

    # Plot the trends
    plt.figure(figsize=(10, 6))
    for keyword in keywords:
        plt.plot(trend_data.index, trend_data[keyword], label=keyword)

    plt.title('Google Trends Data for Fashion Keywords (2022-2023)', fontsize=16)
    plt.xlabel('Date', fontsize=12)
    plt.ylabel('Search Interest', fontsize=12)
    plt.legend()
    plt.grid(True)
    plt.show()
else:
    print("No data retrieved. Try different keywords or a different timeframe.")
