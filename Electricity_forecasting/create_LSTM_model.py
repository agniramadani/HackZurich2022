from keras.layers import Dense
from keras.models import Sequential
from keras.layers import LSTM
from keras.layers import Dropout


def create_LSTM_model(input_shape):
    # Model
    # We reshaped the input into the 3D format as expected by LSTMs, namely [samples, timesteps, features].
    model = Sequential()
    model.add(LSTM(100, input_shape=input_shape))
    model.add(Dropout(0.2))
    # model.add(LSTM(70))
    # model.add(Dropout(0.3))
    model.add(Dense(1))
    model.compile(loss='mean_squared_error', optimizer='adam')

    return model
