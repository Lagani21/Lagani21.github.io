import pandas as pd
from modules.fetch_trends import fetch_trends
from modules.preprocess import preprocess_data
from modules.eda import run_eda
from utils.cache import load_cached_data, save_data_to_cache


# Step 1: Fetch Trends Data
def step_1_fetch_data():
    keywords = ["streetwear", "bohemian", "pastel", "denim", "wool coats"]
    data = fetch_trends(
        keywords=keywords,
        start_date='2023-01-01',
        end_date='2023-12-31',
        geo='US'
    )
    print("✅ Data fetched successfully!")
    return data


# Step 2: Preprocess Data
def step_2_preprocess_data(data):
    cleaned_data = preprocess_data(data)
    save_data_to_cache(cleaned_data, 'data/cleaned_data.csv')
    print("✅ Data preprocessed and saved successfully!")
    return cleaned_data


# Step 3: Perform EDA
def step_3_eda(data):
    run_eda(data)
    print("✅ EDA completed successfully!")


# Step 4: Launch Dashboard
def step_4_run_dashboard():
    print("✅ Starting the Dashboard...")
    from dashboard.app import app
    app.run_server(debug=True)


# Main Workflow
if __name__ == '__main__':
    print("🚀 Starting Fashion Trend Predictor Workflow...")
    
    # Step 1: Fetch Data
    data = step_1_fetch_data()
    
    # Step 2: Preprocess Data
    cleaned_data = step_2_preprocess_data(data)
    
    # Step 3: Exploratory Data Analysis
    step_3_eda(cleaned_data)
    
    # Step 4: Launch Dashboard
    run_dashboard = input("Do you want to launch the dashboard? (yes/no): ").strip().lower()
    if run_dashboard == 'yes':
        step_4_run_dashboard()
    
    print("🎯 Workflow completed successfully!")
