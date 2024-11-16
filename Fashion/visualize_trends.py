# import matplotlib.pyplot as plt

# def plot_trends(trend_data, keywords):
#     """
#     Plot Google Trends data using Matplotlib.
    
#     Args:
#         trend_data (pd.DataFrame): Trends data fetched from Google Trends.
#         keywords (list): List of keywords.
#     """
#     plt.figure(figsize=(10, 6))
#     for keyword in keywords:
#         plt.plot(trend_data.index, trend_data[keyword], label=keyword)
    
#     plt.title('Google Trends Data for Fashion Keywords (2022-2023)', fontsize=16)
#     plt.xlabel('Date', fontsize=12)
#     plt.ylabel('Search Interest', fontsize=12)
#     plt.legend()
#     plt.grid(True)
#     plt.show()
