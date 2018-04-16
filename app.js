$(document).ready(function () {

    $("select").change(function () {
            var str = "";
            $("select option:selected").each(function () {
                str += "+" + $(this).text();
            });
            //var query = this.value;
            str = str.substr(1, str.length);    
            console.log(str);
        var query = str;
            var key = "kAv1sgh2zjMEG6nofwfLcu5pA55n4LEO";
            var url = "http://api.giphy.com/v1/gifs/search?q=offset:integer(int5)" +
                query +
                "&api_key=" +
                key +
                "&limit=1";
           console.log(url);
            $.getJSON(url, function (json) {
                console.log(json)
                
                for (let i = 0; i < json.data.length; i++) {
                    const img = json.data[i];
                    const imgElem = $('<img>')
                        .attr('src', img.images.downsized.url);
                    $('#gifs').append(imgElem);
//                    console.log(img);
                }
            });
        })
        .trigger("change");
});
