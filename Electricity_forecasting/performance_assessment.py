from forecast_electricity_day import *
import matplotlib.pyplot as plt

# Input
directory = 'Dataset\household_power_consumption.txt'
n_time_steps = 14
n_features = 7
initial_day = 1
last_day = 80
year = 2007

# Obtain the real data
df = pd.read_csv(directory, sep=';', parse_dates={'dt': ['Date', 'Time']}, infer_datetime_format=True,
                 low_memory=False, na_values=['nan', '?'], index_col='dt')
df_resample = df.resample('D').mean()

predictions = []
real_values = []
day_range = range(initial_day, last_day)
forecast = Forecast()
for day in day_range:
    indeces = [datetime.strptime(f"{year}" + "-" + f"{i}", "%Y-%j").strftime("%Y-%m-%d")
               for i in range(day, day + n_time_steps + 1)]
    indeces_input = indeces[:-1]
    indeces_output = indeces[-1]

    # Retrieving real features
    features = df_resample.loc[indeces_input].values

    # Obtain the model and obtain prediction
    prediction = forecast.forecast_electricity_day(features)
    predictions.append(prediction)
    real_values.append(df_resample.loc[indeces_output].values[0])
    print(prediction)
    print(df_resample.loc[indeces_output].values[0])

plt.figure(1)
plt.plot(day_range, real_values, "g-")
plt.plot(day_range, predictions, "r-")
plt.xlabel("Day of the year index [-]")
plt.ylabel("Global active power [kW]")
plt.grid(True)
plt.show()

