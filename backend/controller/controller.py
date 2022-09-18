from flask import Flask
from backend.model import Model
from backend.model import Neo4j
from backend.model import Forecast
import json

app = Flask(__name__)

@app.route("/neo4j_connection", methods=["GET", "POST"])
def neo4j_connection_test():
    graph = Neo4j()
    model = Model()
    with graph.driver.session() as session:
        results_query = session.write_transaction(model.get_energy_data)
    return results_query

@app.route("/get_electricity_consumption", methods=["GET"])
def get_electricity():
    graph = Neo4j()
    model = Model()
    with graph.driver.session() as session:
        results_query = session.read_transaction(model.get_electricity)
    # print(results_query/random(30,40))
    # result = results_query/random(30,40)
    return results_query

@app.route("/get_gas_consumption", methods=["GET"])
def get_gas():
    graph = Neo4j()
    model = Model()
    with graph.driver.session() as session:
        results_query = session.read_transaction(model.get_gas)
    return results_query

@app.route("/get_water_consumption", methods=["GET"])
def get_water():
    graph = Neo4j()
    model = Model()
    with graph.driver.session() as session:
        results_query = session.read_transaction(model.get_water)
    return results_query

@app.route("/get_energy_expectation", methods=["GET"])
def get_energy_expectations():
    features = [5.374, 0.498, 233.29, 23.0 , 0.0 , 2.0, 17.0]
    forecast = Forecast()
    prediction = forecast.forecast_electricity_day(features)
    return json.dumps(prediction)

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=5000, debug=True)


