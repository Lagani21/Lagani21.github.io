import pandas as pd

# # Load and preview the cached data
cache_file = "data/trend_data.csv"
trend_data = pd.read_csv(cache_file, index_col=0, parse_dates=True)
# print(trend_data.head())

print(trend_data.head())
print(trend_data.columns)
trend_data.reset_index(inplace=True)
trend_data.rename(columns={'index': 'date'}, inplace=True)  # Optional renaming for clarity
print(trend_data.head())  # Verify the structure


# cached_keywords = trend_data.columns.tolist()
# remaining_keywords = [kw for kw in ["floral patterns", "pastel dresses", "streetwear"] if kw not in cached_keywords]
# print("Remaining keywords to fetch:", remaining_keywords)


import plotly.express as px

# Reshape the data for Plotly
trend_data_melted = trend_data.melt(
    id_vars=["date"], var_name="Keyword", value_name="Search Interest"
)

# Create the interactive Plotly chart
fig = px.line(
    trend_data_melted,
    x="date",
    y="Search Interest",
    color="Keyword",
    title="Google Trends Data",
    labels={"date": "Date", "Search Interest": "Interest"},
)

# Save Plotly chart as an HTML file
fig.write_html("docs/trends_plot.html")  # Save to GitHub Pages folder
print("Interactive plot saved as 'docs/trends_plot.html'")


# # Save the Plotly chart as an HTML file
# fig.write_html("trends_plot.html")
# print("Interactive plot saved as 'trends_plot.html'")
