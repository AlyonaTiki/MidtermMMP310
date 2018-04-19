$(document).ready(function () {

    $("select").change(function () {
            var str = "";
            const num = this.id;
            $("select option:selected").each(function () {
                //str += "+" + $(this).text();
            });
            var query = this.value;
            //str = str.substr(1, str.length);    
            console.log(str);
            //var query = str;
            var key = "kAv1sgh2zjMEG6nofwfLcu5pA55n4LEO";
            var url = "http://api.giphy.com/v1/gifs/search?q=" +
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
                    $('#gif'+num).append(imgElem);
                   
//                    console.log(img);
                }
            });
        })
        .trigger("change");
});
//const message = document.createElement("p");
//const g1 = document.appendChild('#gif1')
//var node = document.createTextNode("This is a new paragraph." + g1);
//    
//	document.body.appendChild(message);






//audio section

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/Elevatormusic.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    //display time and track inforamtion
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    //time update for the current duration of the track
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    //play button if clicked display status to play
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    //update if pause button is clicked update status to paused
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    //update if clicked restart button track starts back at "0"
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});
//end of audio section