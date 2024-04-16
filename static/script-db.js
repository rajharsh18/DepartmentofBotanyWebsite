$(document).ready(function(){
    $('#fetchDataButton').click(function(event){
        var accession = $('#accession').val();
        var protein_description = $('#protein_description').val();
        var aas = $('#aas').val();
        var mw = $('#mw').val();
        var calc_pi = $('#calc_pi').val();
        var biological_process = $('#biological_process').val();
        var cellular_component = $('#cellular_component').val();
        var molecular_function = $('#molecular_function').val();
        var kegg_pathways = $('#kegg_pathways').val();
        var sequence = $('#sequence').val();
        var domain_name = $('#domain_name').val();
        var domain_sequence = $('#domain_sequence').val();
        var ptm_position = $('#ptm_position').val();
        var ptm_residue = $('#ptm_residue').val();
        var ptm_type = $('#ptm_type').val();

        data_1 = {
            accession: accession,
            protein_description: protein_description,
            aas : aas, 
            mw : mw, 
            calc_pi : calc_pi, 
            biological_process : biological_process, 
            cellular_component : cellular_component, 
            molecular_function : molecular_function, 
            kegg_pathways : kegg_pathways, 
            sequence : sequence, 
            domain_name : domain_name, 
            domain_sequence : domain_sequence, 
            ptm_position : ptm_position, 
            ptm_residue : ptm_residue, 
            ptm_type: ptm_type
        }
        console.log(data_1)
        

        
        $.ajax({
            url: "/extract_full",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data_1),
            success: function(data){
                var tableHtml = '<table border="1">';
                $.each(data, function(key, value){
                    tableHtml += '<tr>';
                    $.each(value, function(k, v){
                        tableHtml += '<td>' + v + '</td>';
                    });
                    tableHtml += '</tr>';
                });
                tableHtml += '</table>';
                $('#dataTable').html(tableHtml);
            },
            error: function(xhr, status, error){
                $('#dataTable').html("Error: " + error);
            }
        });
    });
});