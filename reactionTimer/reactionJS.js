 var start; 
        var timeTaken;
        var bestScore = 1000000;
        appearAfterDelay();
        function getRandomColor(){
            var letters = "0123456789ABCDEF".split("");
            var color = "#";
            for (var i=0; i<6; i++){
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function makeShapeAppear(){
            var top = Math.random() * 300;
            var left = Math.random() * 300;
            var width = 100 + (Math.random() * 200);
            var color = getRandomColor();
            if(Math.random() > 0.5){
                document.getElementById("shapes").style.borderRadius = "50%";
            }
            else{ document.getElementById("shapes").style.borderRadius = "0";
            }
            document.getElementById("shapes").style.top = top + "px";
            document.getElementById("shapes").style.left = left + "px";
            document.getElementById("shapes").style.width = width + "px";
            document.getElementById("shapes").style.height = width + "px";
            document.getElementById("shapes").style.backgroundColor = color;
            document.getElementById("shapes").style.display = "block";
          start = new Date().getTime();  
        }
        function appearAfterDelay(){
            setTimeout(makeShapeAppear, Math.random() * 2000);
        }
        function getBestTime(){
            if(timeTaken < bestScore){
                bestScore = timeTaken;
            }
        }
  
        document.getElementById("shapes").onclick = function(){
            document.getElementById("shapes").style.display = "none";
            var end = new Date().getTime();
            timeTaken = (end - start) / 1000;
          document.getElementById("time").innerHTML = timeTaken + "s";
            getBestTime();
            document.getElementById("bestTime").innerHTML =  bestScore + "s";
        appearAfterDelay();

        };