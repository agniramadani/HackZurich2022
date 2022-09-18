from neo4j import GraphDatabase


user = "neo4j"
password = "TINT9k_f_Ap0jfxqadYHEjo6gHdphZUw4RWxppLuOzk"

class Neo4j:

    def __init__(self):
        self.driver = GraphDatabase.driver("neo4j+ssc://1f858ac1.databases.neo4j.io:7687", auth=(user, password))

    def close(self):
        self.driver.close()
