$(document).ready(function() {

var win = [];
var lose = [];

        var Europa = ["E", "u", "r", "o", "p", "a"];
        var Pluto = ["P", "l", "u", "t", "o"];
        var MilkyWay = ["M", "i", "l", "k", "y", "W", "a", "y"]
        var WordBlock1 = document.getElementById("WB1");
        var WordBlock2 = document.getElementById("WB2");
        var WordBlock3 = document.getElementById("WB3");
        var WordBlock4 = document.getElementById("WB4");
        var WordBlock5 = document.getElementById("WB5");
        var WordBlock6 = document.getElementById("WB6");
        var WordBlock7 = document.getElementById("WB7");
        var WordBlock8 = document.getElementById("WB8");
        var WordBlock9 = document.getElementById("WB9");
        var WordBlock10 = document.getElementById("WB10");
        var WordBlock11 = document.getElementById("WB11");
        var Play = document.getElementById("play");
        var Loser = document.getElementById("loss");
        var Winner = document.getElementById("wins");
        var img = document.getElementById("img")
        var wrong = document.getElementById("wrong")
        var IncorrectLetters = document.getElementById("WrongLetter");
        var i = 0;
        var w = 0;
        var q = 6;
        var newWrong = document.createElement("p")
        var newImg = document.createElement("img");
        var replace1 = document.createElement("p");
        var replace2 = document.createElement("p");
        var replace3 = document.createElement("p");
        var replace4 = document.createElement("img");
        var blank1 = document.createElement("p");
        var blank2 = document.createElement("p");
        var images = ["assets/images/hangman7.jpg", "assets/images/hangman6.jpg", "assets/images/hangman5.jpg", "assets/images/hangman4.jpg", "assets/images/hangman3.jpg", "assets/images/hangman2.jpg"]

        newWrong.textContent = "6";
        wrong.appendChild(newWrong);
        
        newImg.src = "assets/images/hangman1.jpg";
        img.appendChild(newImg);
    
        blank2.textContent = "0";
        Loser.appendChild(blank2);
        
        blank1.textContent = "0";
        Winner.appendChild(blank1);
        
        function Restart() {
            q = 6;
            w = 0;
            i = 0;
            IncorrectLetters.innerHTML="";
            var wordBlocks = document.querySelectorAll('.WordBlock')
            for(var i = 0; i < wordBlocks.length; i++) {
            wordBlocks[i].innerHTML = "";
            }
            console.log(wordBlocks)
            replace3.textContent = q;
            wrong.appendChild(replace3);
            newWrong.textContent = "6";
            wrong.replaceChild(newWrong, replace3);
            replace4.src = images[q];
            img.appendChild(replace4);
            newImg.src = "assets/images/hangman1.jpg";
            img.replaceChild(newImg, replace4);
        }

        
        function EuropaStart() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        
            function Europa1() {
                WordBlock1.innerHTML = Europa[0];
                w = w + 1;
            };

            function Europa2() {
                WordBlock2.innerHTML = Europa[1];
                w = w + 1;
            };

            function Europa3() {
                WordBlock3.innerHTML = Europa[2];
                w = w + 1;
            };

            function Europa4() {
                WordBlock4.innerHTML = Europa[3];
                w = w + 1;
            };

            function Europa5() {
                WordBlock5.innerHTML = Europa[4];
                w = w + 1;
            };

            function Europa6() {
                WordBlock6.innerHTML = Europa[5];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.textContent = "0";
                Winner.appendChild(blank1);          
                replace1.textContent = win.length;
                Winner.replaceChild(replace1, blank1);
            }
            
            function Loss() {
                lose.push(i);
                blank2.textContent = "0";
                Loser.appendChild(blank2);
                replace2.textContent = lose.length;
                Loser.replaceChild(replace2, blank2);
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ", ");
                q--
                newWrong.textContent = q;
                wrong.appendChild(newWrong);
                replace3.textContent = q;
                wrong.replaceChild(replace3, newWrong);
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "e") {
                Europa1();
                j = j-1;
                }
                else if (event.key == "u") {
                Europa2();
                j = j-1;
                }
                else if (event.key == "r") {
                Europa3();
                j = j-1;
                }
                else if (event.key == "o") {
                Europa4();
                j = j-1;
                }
                else if (event.key == "p") {
                Europa5();
                j = j-1;
                }
                else if (event.key == "a") {
                Europa6();
                j = j-1;
                }
                else {
                Incorrect();
                i = i + 1;    
                };

                if (w == 6) {
                Win();
                PlutoStart();
                Restart();
                }               
                else if (i == 6) {
                Loss();
                PlutoStart();
                Restart();
                }
            }
        }
    }

        function PlutoStart() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "none";
            Play.style.display = "none";
            WordBlock11.append("")
        
            function Pluto1() {
                WordBlock1.innerHTML = Pluto[0];
                w = w + 1;
            };

            function Pluto2() {
                WordBlock2.innerHTML = Pluto[1];
                w = w + 1;
            };

            function Pluto3() {
                WordBlock3.innerHTML = Pluto[2];
                w = w + 1;
            };

            function Pluto4() {
                WordBlock4.innerHTML = Pluto[3];
                w = w + 1;
            };

            function Pluto5() {
                WordBlock5.innerHTML = Pluto[4];
                w = w + 1;
            };

            function Win() {
                win.push(w);
                blank1.textContent = "0";
                Winner.appendChild(blank1);          
                replace1.textContent = win.length;
                Winner.replaceChild(replace1, blank1);
            }
            
            function Loss() {
                lose.push(i);
                blank2.textContent = "0";
                Loser.appendChild(blank2);
                replace2.textContent = lose.length;
                Loser.replaceChild(replace2, blank2);
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ", ");
                q--
                newWrong.textContent = q;
                wrong.appendChild(newWrong);
                replace3.textContent = q;
                wrong.replaceChild(replace3, newWrong);
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "p") {
                Pluto1();
                j = j-1;
                }
                else if (event.key == "l") {
                Pluto2();
                j = j-1;
                }
                else if (event.key == "u") {
                Pluto3();
                j = j-1;
                }
                else if (event.key == "t") {
                Pluto4();
                j = j-1;
                }
                else if (event.key == "o") {
                Pluto5();
                j = j-1;
                }
                else {
                Incorrect();
                i = i + 1;    
                };

                if (w == 5) {
                Win();
                EuropaStart();
                Restart();
                }                
                else if (i == 6) {
                Loss();
                EuropaStart();
                Restart();
                }
            }
        }
    }
        document.onkeyup = function(event){
            console.log (event.key);

            for (var e = 0; e <1; e++) {
                if (event.key) {
                EuropaStart();
                }
            }
        }
    
})