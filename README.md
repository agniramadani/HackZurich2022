# HackZurich2022
SHORT DESCRIPTION:

Resourcify is an Artificial Intelligence based support system that encourages consumers to change their behavior and optimize resource usage by utilizing a multitude of digital data sources.

Inspiration

Climate change including the recent heat waves have already shown that our society needs to use all its resources judiciously in the near future. A simple google search today gives the delicacy of the current situation with more than 0.1 million articles anticipating the expected power crises in various parts of Europe including Switzerland. 

While suppliers already optimize their supply, individuals and business customers play an important role in their effective usage, but their current savings are only subjective and based on feelings. Further, the effect of their unitary actions is not observable but only the aggregate of their efforts during a prolonged period of time, mostly monthly.

Resourcify is an Artificial Intelligence based support system that encourages consumers to change their behavior and optimize resource usage by utilizing a multitude of digital data sources such as smart energy meters smart gas meters, as well as water consumption data which are used to train a bi-LSTM deep learning model.

What it Does and How We Built It?

We used neural network models (specifically bi-directional LSTM) for the prediction of the daily electricity, gas, and water consumption of an individual. Given the prevalence of smart energy and water meters, we use this data as the training dataset for transfer learning.

Our resource health interface then shows the current daily consumption versus the predicted daily consumption for the particular user and offers rewards based on their streaks. This simulates the user changing his behavior and helps him in making a step towards a sustainable future. Further, a social gaming tab encourages the users to also compete with their friends and win more rewards.


 The LSTM model (based on TensorFlow) first gives the daily predicted value of each resource (electricity, water, gas). The output from this model is then fed to a Flask-based web app. The Flask-based web app interacts with both the deep learning model as well as the neo4j database to expose APIs which are used by a react native-based mobile app. The model was also trained later on an open source household energy consumption dataset available here: http://archive.ics.uci.edu/ml/datasets/Individual+household+electric+power+consumptionout to build a specialized shop builder for restaurants.

Challenges we ran into

Integration with React Native, model hyperparameter tuning and flask multipart upload

What we learned

We learned to work together with complete strangers and succeed together! Also, we learned to look from different viewpoints of various stakeholders involved in a challenge and come up with a solution. Of course, the errors and bug fixes we made while debugging is valuable learned skills.


What's next for RE.SOURCIFY

We plan to validate the model on a large validation dataset instead of just human-based validation. We hope our idea will be developed further and implemented to help users in being more sustainable around the world.

