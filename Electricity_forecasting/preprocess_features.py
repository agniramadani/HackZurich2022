from sklearn.preprocessing import MinMaxScaler
import joblib


def preprocess_features(values, scaler_path="scaler_files\scaler"):
    # integer encode direction
    # ensure all data is float
    values = values.astype('float32')

    # normalize features
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled = scaler.fit_transform(values)

    joblib.dump(scaler, scaler_path)
    return scaled
