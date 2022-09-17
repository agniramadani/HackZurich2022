from .create_LSTM_model import create_LSTM_model
import joblib
import numpy as np
import warnings
import os
warnings.filterwarnings("ignore")

class Forecast:
    def forecast_electricity_day(self, features, scaler_path="/Users/fatjonlala/Documents/HackZurich2022/newHackZurich/HackZurich2022/Electricity_forecasting/scaler_files/scaler"):
        # Create model and restore weights
        model = create_LSTM_model((1, len(features)))
        model.load_weights("/Users/fatjonlala/Documents/HackZurich2022/newHackZurich/HackZurich2022/Electricity_forecasting/checkpoints/trained_LSTM_model")

        # Pre-process data
        scaler = joblib.load(scaler_path)
        scaled = scaler.fit_transform(np.array(features).reshape(-1, 1)).reshape(1, 1, len(features))

        downscaled_prediction = model.predict(scaled)
        prediction = scaler.inverse_transform(downscaled_prediction)
        return prediction.item()

