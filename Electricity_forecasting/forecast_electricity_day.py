from create_LSTM_model import create_LSTM_model
import joblib
import numpy as np
import warnings
warnings.filterwarnings("ignore")


def forecast_electricity_day(features, scaler_path="scaler_files\scaler"):
    # Create model and restore weights
    model = create_LSTM_model((1, len(features)))
    model.load_weights('./checkpoints/trained_LSTM_model')

    # Pre-process data
    scaler = joblib.load(scaler_path)
    scaled = scaler.fit_transform(np.array(features).reshape(-1, 1)).reshape(1, 1, len(features))

    prediction = model.predict(scaled)

    return prediction.item()


if __name__ == "__main__":
    features = [1, 2, 3, 4, 5, 6, 7]
    prediction = forecast_electricity_day(features)
    print(prediction)
