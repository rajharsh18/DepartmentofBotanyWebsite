import db

def extract_table(query):
    status = db.connection()
    if "Error" in status:
        return ({'Error': status["Error"]})
    else:
        conn = status["Success"]
        status = db.extract_data(conn, query)      
        return status