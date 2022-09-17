from .create_LSTM_model import create_LSTM_model
import joblib
import numpy as np
import pandas as pd
import warnings
from datetime import datetime
import os
warnings.filterwarnings("ignore")


class Forecast:
    def forecast_electricity_day(self, features, n_time_step=14, n_features=7, scaler_path="/Users/fatjonlala/Documents/HackZurich2022/newHackZurich/HackZurich2022/Electricity_forecasting/scaler_files/scaler"):
        # Create model and restore weights
        model = create_LSTM_model((n_time_step, n_features))
        model.load_weights("/Users/fatjonlala/Documents/HackZurich2022/newHackZurich/HackZurich2022/Electricity_forecasting/checkpoints/trained_LSTM_model")

        # Pre-process data
        scaler = joblib.load(scaler_path)
        scaled = scaler.fit_transform(features).reshape(1, n_time_step, n_features)

        downscaled_prediction = model.predict(scaled)
        prediction = scaler.inverse_transform(np.hstack((downscaled_prediction, np.zeros((1, n_features-1)))))
        return prediction[0][0]

