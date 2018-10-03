$(document).ready(function() {

var win = [];
var lose = [];

        var Europa = ["E", "u", "r", "o", "p", "a"];
        var Pluto = ["P", "l", "u", "t", "0"];
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
        var WordNew1 = document.getElementById("h2");
        var WordNew2 = document.getElementById("h2");
        var WordNew3 = document.getElementById("h2");
        var WordNew4 = document.getElementById("h2");
        var WordNew5 = document.getElementById("h2");
        var WordNew6 = document.getElementById("h2");
        var WordNew7 = document.getElementById("h2");
        var WordNew8 = document.getElementById("h2");
        var WordNew9 = document.getElementById("h2");
        var WordNew10 = document.getElementById("h2");
        var WordNew11 = document.getElementById("h2");
        var Play = document.getElementById("play");
        var Loser = document.getElementById("loss");
        var Winner = document.getElementById("wins");
        var img = document.getElementById("img")
        var wrong = document.getElementById("wrong")
        var IncorrectLetters = document.getElementById("WrongLetter");
        var i = 0;
        var w = 0;
        var q = 6;
        var WordBlank1 = document.createElement("h2")
        var WordBlank2 = document.createElement("h2")
        var WordBlank3 = document.createElement("h2")
        var WordBlank4 = document.createElement("h2")
        var WordBlank5 = document.createElement("h2")
        var WordBlank6 = document.createElement("h2")
        var WordBlank7 = document.createElement("h2")
        var WordBlank8 = document.createElement("h2")
        var WordBlank9 = document.createElement("h2")
        var WordBlank10 = document.createElement("h2")
        var WordBlank11 = document.createElement("h2")
        var newinc = document.createElement("p")
        var newWrong = document.createElement("p")
        var newImg = document.createElement("img");
        var replace1 = document.createElement("p");
        var replace2 = document.createElement("p");
        var replace3 = document.createElement("p");
        var replace4 = document.createElement("img");
        var replace5 = document.createElement("p");
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

        // newinc.textContent = "&nbsp";
        // IncorrectLetters.appendChild(newinc);
        
        function Restart() {
            // replace5.textContent = (", ");
            // IncorrectLetters.appendChild(replace5);
            // newinc.textContent = "";
            // IncorrectLetters.replaceChild(newinc, replace5);  
            replace3.textContent = q;
            wrong.appendChild(replace3);
            newWrong.textContent = "6";
            wrong.replaceChild(newWrong, replace3);
            replace4.src = images[q];
            img.appendChild(replace4);
            newImg.src = "assets/images/hangman1.jpg";
            img.replaceChild(newImg, replace4);
            q = 6;
            w = 0;
            i = 0;
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
                WordBlock1.append(Europa[0]);
                w = w + 1;
            };

            function Europa2() {
                WordBlock2.append(Europa[1]);
                w = w + 1;
            };

            function Europa3() {
                WordBlock3.append(Europa[2]);
                w = w + 1;
            };

            function Europa4() {
                WordBlock4.append(Europa[3]);
                w = w + 1;
            };

            function Europa5() {
                WordBlock5.append(Europa[4]);
                w = w + 1;
            };

            function Europa6() {
                WordBlock6.append(Europa[5]);
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
                lose.push(j);
                blank2.textContent = "0";
                Loser.appendChild(blank2);
                replace2.textContent = lose.length;
                Loser.replaceChild(replace2, blank2);
            }

            function Incorrect() {
                // replace5.textContent = (event.key + ", ");
                IncorrectLetters.append(event.key + ", ");
                newWrong.textContent = q;
                wrong.appendChild(newWrong);
                q = q - 1;
                replace3.textContent = q;
                wrong.replaceChild(replace3, newWrong);
                newImg.src = "assets/images/hangman1.jpg";
                img.appendChild(newImg);
                replace4.src = images[q];
                img.replaceChild(replace4, newImg);
            }
            
            for (j=0; j < 6; j++) {

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
                }

                if (i == 6) {
                Loss();
                Restart();
                PlutoStart();
                };

                if (w == 6) {
                Win();
                Restart();
                PlutoStart();
                };
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
                WordBlock1.append(Pluto[0]);
                w = w + 1;
            };

            function Pluto2() {
                WordBlock2.append(Pluto[1]);
                w = w + 1;
            };

            function Pluto3() {
                WordBlock3.append(Pluto[2]);
                w = w + 1;
            };

            function Pluto4() {
                WordBlock4.append(Pluto[3]);
                w = w + 1;
            };

            function Pluto5() {
                WordBlock5.append(Pluto[4]);
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
                lose.push(j);
                blank2.textContent = "0";
                Loser.appendChild(blank2);
                replace2.textContent = lose.length;
                Loser.replaceChild(replace2, blank2);
            }

            function Incorrect() {
                replace5.textContent = (event.key + ", ");
                IncorrectLetters.appendChild(replace5);
                newWrong.textContent = q;
                wrong.appendChild(newWrong);
                q = q - 1;
                replace3.textContent = q;
                wrong.replaceChild(replace3, newWrong);
                newImg.src = "assets/images/hangman1.jpg";
                img.appendChild(newImg);
                replace4.src = images[q];
                img.replaceChild(replace4, newImg);
            }
            
            for (j=0; j < 6; j++) {

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
                }

                if (i == 6) {
                Loss();
                Restart();
                };

                if (w == 6) {
                Win();
                Restart();
                };
            }
        }
    }
        document.onkeyup = function(event){
            console.log (event.key);

            for (e = 0; e <2; e++) {
                if (event.key) {
                EuropaStart();
                }
                if (e = 1) {
                Restart();
                }
            }
        }
    
})