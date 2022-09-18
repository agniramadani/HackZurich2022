# Individual household electric-power consumption Data Set

The following time-sequence model exploits the LSTM architecture for the prediction of
electrical power. For the HackZurich 2022 challenge it has been created to predict the
next day kW global household electrical power consumption. However, the model can be 
easily modified in order to predict for every minute, hour, day, month or year.

The data has been retrieved from the Center for Machine Learning and Intelligent Systems
repository, which can be found here:

http://archive.ics.uci.edu/ml/datasets/Individual+household+electric+power+consumption

It represents measurements gathered in a house located in Sceaux (7km of Paris, France) 
between December 2006 and November 2010 (47 months).
The following information can be retrieved from the dataset:

1.date: Date in format dd/mm/yyyy

2.time: time in format hh:mm:ss

3.global_active_power: household global minute-averaged active power (in kilowatt)

4.global_reactive_power: household global minute-averaged reactive power (in kilowatt)

5.voltage: minute-averaged voltage (in volt)

6.global_intensity: household global minute-averaged current intensity (in ampere)

7.sub_metering_1: energy sub-metering No. 1 (in watt-hour of active energy). It corresponds to the kitchen, containing mainly a dishwasher, an oven and a microwave (hot plates are not electric but gas powered).

8.sub_metering_2: energy sub-metering No. 2 (in watt-hour of active energy). It corresponds to the laundry room, containing a washing-machine, a tumble-drier, a refrigerator and a light.

9.sub_metering_3: energy sub-metering No. 3 (in watt-hour of active energy). It corresponds to an electric water-heater and an air-conditioner.

For the purpose of testing the usability of this dataset for the HackZurich 2022 challenge, 
data from sources 3-9 will be used.
