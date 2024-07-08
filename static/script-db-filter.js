$(document).ready(function(){
    $('#fetchDataButton').click(function(event){
        var filter_name = $('#filter_name').val();
        var filter = $('#filter').val();

        data_1 = {
            filter_name: filter_name,
            filter: filter
        }
        // console.log(data_1)

        $.ajax({
            url: "/filter",
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