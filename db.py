import mysql.connector

def connection():
    try:
        conn = mysql.connector.connect(
            host="localhost", 
            port="3306", 
            user="root", 
            password="", 
            database="botany"
        )
        return ({'Success' : conn})
    except mysql.connector.Error as error:
        print(error)
        return ({'Error' : f"Connection error: {error}"})
    except Exception as e:
        print(e)
        conn.close()
        return {'Error': e}


def extract_data(conn, query):
    try:
        cursor = conn.cursor()
        # query = "SELECT * FROM `database`;"
        cursor.execute(query)
        data = cursor.fetchall()
        conn.close()
        return (data)
    except mysql.connector.Error as error:
        print(error)
        conn.close()
        return ({'Error': f"Fetch error: {error}"})
    except Exception as e:
        print("An unexpected error occured:", e)
        conn.close()
        return {'Error': e}
