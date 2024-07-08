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
        // console.log(data_1);
        

        
        $.ajax({
            url: "/extract_full",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data_1),
            success: function(data){
                var length = data.length;
                var all_card = "";
                // console.log(length);
                for (var i = 0; i < length; i++) {

                    var card = '<div class="card"><div class="content"><div class="row"><span class="head">Accession No: </span>' + data[i][0] + '</div><div class="row"><span class="head">Protein Description: </span>'+ data[i][1] + '</div><div class="row two"><div><span class="head">Length: </span>'+ data[i][6] + '</div><div><span class="head">Weight: </span>' + data[i][7] + '</div></div><div class="row"><span class="head">Gene Associated: </span>' +'TODO' + '</div><div class="row two"><div><span class="head">Found in Root Initiation Sample (S1): </span>' + data[i][15] + '</div><div><span class="head">Found in Germinating Tuber Sample (S2): </span>' + data[i][14] + '</div></div><div class="row two"><div><span class="head">Found in New Tuber Formation Sample (S3): </span>' + data[i][16] + '</div><div><span class="head">Found in Mature Tuber Sample (S4): </span>' + data[i][17] + '</div></div></div></div>'
                    all_card = all_card + card;

                    $('#container').html(all_card);
                    // console.log(i);
                }
            },
            error: function(xhr, status, error){
                $('#container').html("Error: " + error);
            }
        });
    });
});