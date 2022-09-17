from flask import jsonify
class Model:

    def __init__(self):
        return None

    @staticmethod
    def get_energy_data(tx):
        query_data = tx.run('''MATCH (n) RETURN properties(n) AS data''')
        for item in query_data:
            data = item['data']
        return jsonify(data)
