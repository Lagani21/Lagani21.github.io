import matplotlib.pyplot as plt
import plotly.express as px
import plotly.graph_objects as go

def interactive_plot(trend_data, keywords):
    """
    Create an interactive plot using Plotly.
    
    Args:
        trend_data (pd.DataFrame): Trends data fetched from Google Trends.
        keywords (list): List of keywords.
    """
    # Reset index for Plotly
    trend_data_reset = trend_data.reset_index()
    trend_data_melted = trend_data_reset.melt(id_vars=["date"], 
                                              var_name="Keyword", 
                                              value_name="Search Interest")
    
    # Create interactive line chart
    fig = px.line(trend_data_melted, 
                  x="date", 
                  y="Search Interest", 
                  color="Keyword",
                  title="Interactive Google Trends for Fashion Keywords",
                  labels={"date": "Date", "Search Interest": "Search Interest Level"})
    
    fig.update_layout(hovermode="x unified", 
                      xaxis_title="Date", 
                      yaxis_title="Search Interest Level",
                      legend_title="Keywords")
    
    fig.show()
def plot_trends(trend_data, keywords):
    """
    Plot Google Trends data using Matplotlib.
    
    Args:
        trend_data (pd.DataFrame): Trends data fetched from Google Trends.
        keywords (list): List of keywords.
    """
    plt.figure(figsize=(10, 6))
    for keyword in keywords:
        plt.plot(trend_data.index, trend_data[keyword], label=keyword)
    
    plt.title('Google Trends Data for Fashion Keywords (2022-2023)', fontsize=16)
    plt.xlabel('Date', fontsize=12)
    plt.ylabel('Search Interest', fontsize=12)
    plt.legend()
    plt.grid(True)
    plt.show()
def seasonal_plot(trend_data, keywords):
    """
    Highlight seasonal patterns in trends using annotations.
    
    Args:
        trend_data (pd.DataFrame): Trends data fetched from Google Trends.
        keywords (list): List of keywords.
    """
    plt.figure(figsize=(10, 6))
    for keyword in keywords:
        plt.plot(trend_data.index, trend_data[keyword], label=keyword)
    
    # Add annotations for specific seasons
    seasons = {"Spring": (3, 5), "Summer": (6, 8), "Fall": (9, 11), "Winter": (12, 2)}
    for season, months in seasons.items():
        plt.axvspan(pd.Timestamp(f'2023-{months[0]:02d}-01'), 
                    pd.Timestamp(f'2023-{months[1]:02d}-28'), 
                    color='gray', alpha=0.1, label=season if season == "Spring" else "")
    
    plt.title('Seasonal Patterns in Google Trends Data', fontsize=16)
    plt.xlabel('Date', fontsize=12)
    plt.ylabel('Search Interest', fontsize=12)
    plt.legend()
    plt.grid(True)
    plt.show()
def comparison_bar_chart(trend_data, keywords):
    """
    Compare average search interest levels using a bar chart.
    
    Args:
        trend_data (pd.DataFrame): Trends data fetched from Google Trends.
        keywords (list): List of keywords.
    """
    avg_interest = trend_data.mean().sort_values(ascending=False)
    
    # Create a bar chart
    fig = px.bar(x=avg_interest.index, 
                 y=avg_interest.values, 
                 labels={"x": "Keywords", "y": "Average Search Interest"},
                 title="Average Search Interest for Keywords")
    
    fig.update_layout(xaxis_title="Keywords", yaxis_title="Average Interest")
    fig.show()

def plot_trends_static(trend_data, keywords):
    """
    Plot Google Trends data using Matplotlib (static plot).
    """
    plt.figure(figsize=(10, 6))
    for keyword in keywords:
        if keyword in trend_data.columns:
            plt.plot(trend_data.index, trend_data[keyword], label=keyword)

    plt.title('Google Trends Data', fontsize=16)
    plt.xlabel('Date', fontsize=12)
    plt.ylabel('Search Interest', fontsize=12)
    plt.legend()
    plt.grid(True)
    plt.show()


def plot_trends_interactive(trend_data, keywords):
    """
    Plot Google Trends data using Plotly (interactive plot).
    """
    trend_data_reset = trend_data.reset_index()
    trend_data_melted = trend_data_reset.melt(id_vars=["date"], 
                                              var_name="Keyword", 
                                              value_name="Search Interest")

    fig = px.line(trend_data_melted, 
                  x="date", 
                  y="Search Interest", 
                  color="Keyword",
                  title="Interactive Google Trends Data")
    fig.show()

