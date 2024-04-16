from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import helper


app = Flask(__name__)
CORS(app)

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for the db page
@app.route('/db')
def about():
    return render_template('db.html')



@app.route('/extract_full', methods=['POST'])
def extract_full():
    data = request.get_json()

    accession = data['accession']
    protein_description = data['protein_description']
    aas = data['aas']
    mw = data['mw']
    calc_pi = data['calc_pi']
    biological_process = data['biological_process']
    cellular_component = data['cellular_component']
    molecular_function = data['molecular_function']
    kegg_pathways = data['kegg_pathways']
    sequence = data['sequence']
    domain_name = data['domain_name']
    domain_sequence = data['domain_sequence']
    ptm_position = data['ptm_position']
    ptm_residue = data['ptm_residue']
    ptm_type = data['ptm_type']

    lst = [accession, protein_description, aas, mw, calc_pi, biological_process, cellular_component, molecular_function, kegg_pathways, sequence, domain_name, domain_sequence, ptm_position, ptm_residue, ptm_type]
    lst2 = ["COL 1", "COL 2", "COL 7", "COL 8", "COL 9", "COL 10", "COL 11", "COL 12", "COL 13", "COL 19", "COL 20", "COL 21", "COL 22", "COL 23", "COL 24"]
    # print(lst)

    query = "SELECT * FROM `database` WHERE "
    for i in range (0, len(lst)):
        if (i == len(lst)-1):
            query = query + f" `{lst2[i]}` LIKE '%{lst[i]}%';"
        else:
            query = query + f" `{lst2[i]}` LIKE '%{lst[i]}%' AND"
    # query = "SELECT * FROM `database`;"
    print(query)
    status = helper.extract_table(query)
    if "Error" in status:
        return jsonify({'Error': status["Error"]})
    else:
        return jsonify(status)

if __name__ == '__main__':
    app.run(debug=True)
