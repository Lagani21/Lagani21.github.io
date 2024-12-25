import matplotlib.pyplot as plt
import seaborn as sns


def run_eda(df):
    """
    Perform Exploratory Data Analysis (EDA) on the trend data.

    Args:
        df (pd.DataFrame): Cleaned trend data.
    """
    top_keywords = df.columns[1:6]  # Exclude 'date' column
    
    # Line plot for trends over time
    plt.figure(figsize=(15, 8))
    for keyword in top_keywords:
        plt.plot(df['date'], df[keyword], label=keyword)
    plt.title('Trend Analysis for Top Keywords')
    plt.xlabel('Date')
    plt.ylabel('Trend Score')
    plt.legend()
    plt.show()

    # Correlation heatmap
    plt.figure(figsize=(12, 8))
    sns.heatmap(df.drop(columns=['date']).corr(), annot=True, cmap='coolwarm')
    plt.title('Keyword Correlation Heatmap')
    plt.show()
    
    print("✅ EDA visualizations generated successfully.")
