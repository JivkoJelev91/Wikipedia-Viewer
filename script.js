    $(document).ready(function(){
        $('#button').click(function(){
            var inputVal = $('#search').val();
            var wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal + "&format=json&callback=wikiCallbackFunction";
            $('#result').html('');
            $.ajax(wikiUrl, {
                dataType: "jsonp",
                success: function( data ) {
                   for(var i=0; i < data[1].length;i++){
							console.log(data[2][i]);
                       $('#result').prepend("<li><a href=" + data[3][i] + ">" +data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                   }
                },
                error: function (){
                    alert("Error");
                }
            });
        })
    })