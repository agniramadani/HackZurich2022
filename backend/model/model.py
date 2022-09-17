from flask import jsonify
import csv
import json
import pandas as pd

class Model:

    def __init__(self):
        return None

    @staticmethod
    def get_energy_data(tx):
        data = pd.read_csv('../global-freshwater-use-over-the-long-run.csv')
        # print(data.Year, data.FreshwaterUse)
        for year, consumption in zip(data.Year.tolist(),data.FreshwaterUse.tolist()):
            tx.run("MERGE (y:Year{year: toInteger($year)})"
                   "MERGE (w:Water{consumption: toInteger($consumption)})"
                   "MERGE (w)-[:CONSUMED]->(y)", year = year, consumption= consumption)
        return 'Transaction finished!'

        # year = []
        # water_consumption = []
        # with open('../global-freshwater-use-over-the-long-run.csv', 'r') as file:
        #     csvreader = csv.reader(file)
        #     header = next(csvreader)
        #     for row in csvreader:
        #         tx.run("MERGE (y:Year{year: toInteger($year)})", year=row[2])
        #         tx.run("MERGE (w:WaterConsumption{consumption: toFloat($consumption)})"
        #                "WITH w MATCH (y:Year{year: toInteger($year)}) CREATE (w)-[:CONSUMED]->(y)", consumption=row[3], year=row[2])
        # print(rows)
        # query_data = tx.run('''MATCH (n) RETURN properties(n) AS data''')
        # for item in query_data:
        #     data = item['data']
        # return jsonify(data)
    @staticmethod
    def get_electricity(tx):
        query = tx.run('''MATCH (e:Electricity) RETURN e.consumption/toInteger(rand() * (40 - 30 + 1)) + 30 AS data''')
        for item in query:
            data = item['data']
        return jsonify(data)

    @staticmethod
    def get_gas(tx):
        query = tx.run('''MATCH (e:Gas) RETURN e.consumption/toInteger(rand() * (40 - 30 + 1)) + 30 AS data''')
        for item in query:
            data = item['data']
        return jsonify(data)

    @staticmethod
    def get_water(tx):
        query = tx.run('''MATCH (e:Water) RETURN e.consumption/toInteger(rand() * (400 - 300 + 1)) + 300 AS data''')
        for item in query:
            data = item['data']
        return jsonify(data)
