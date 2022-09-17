from flask import Flask
from backend.model import Model
from backend.model import Neo4j

app = Flask(__name__)

@app.route("/neo4j_connection", methods=["GET", "POST"])
def neo4j_connection_test():
    graph = Neo4j()
    model = Model()
    with graph.driver.session() as session:
        results_query = session.write_transaction(model.get_energy_data)
        return results_query


