from dash import Dash, dcc, html
import pandas as pd

# Load data
df = pd.read_csv('data/cleaned_data.csv')

app = Dash(__name__)

app.layout = html.Div([
    html.H1("Fashion Trend Dashboard"),
    dcc.Graph(
        id='trend-graph',
        figure={
            'data': [
                {'x': df['date'], 'y': df[keyword], 'type': 'line', 'name': keyword}
                for keyword in df.columns[1:6]
            ],
            'layout': {
                'title': 'Top Fashion Trends Over Time'
            }
        }
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
