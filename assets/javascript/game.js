$(document).ready(function() {

var win = [];
var lose = [];

        var Europa = ["E", "u", "r", "o", "p", "a"];
        var Pluto = ["P", "l", "u", "t", "o"];
        var MilkyWay = ["M", "i", "l", "k", "y", "W", "a", "y"];
        var Andromeda = ["A", "n", "d", "r", "o", "m", "e", "d", "a"];
        var Moon = ["M", "o", "o", "n"];
        var Nebula = ["N", "e", "b", "u", "l", "a"];
        var BlackHole = ["B", "l", "a", "c", "k", "H", "o", "l", "e"];
        var Mars = ["M", "a", "r", "s"];
        var Stars = ["S", "t", "a", "r", "s"];
        var Universe = ["U", "n", "i", "v", "e", "r", "s", "e"];
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
        var img = document.getElementById("img");
        var wrong = document.getElementById("wrong");
        var IncorrectLetters = document.getElementById("WrongLetter");
        var i = 0;
        var w = 0;
        var q = 6;
        var x = Math.floor((Math.random() * 10) + 1);
        var newWrong = document.createElement("p");
        var newImg = document.createElement("img");
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

        function go() {
            console.log(x)
            if (x == 1){
            EuropaSetup();
            EuropaStart();
            }
            else if (x == 2){
            PlutoSetup();
            PlutoStart();
            }
            else if (x == 3 ) {
            MilkyWaySetup();
            MilkyWayStart();
            }
            else if (x == 4) {
            AndromedaSetup();
            AndromedaStart();
            }
            else if (x == 5) {
            MoonSetup();
            MoonStart();
            }
            else if (x == 6) {
            NebulaSetup();
            NebulaStart();
            }
            else if (x == 7) {
            BlackHoleSetup();
            BlackHoleStart();
            }
            else if (x == 8) {
            MarsSetup();
            MarsStart();
            }
            else if (x == 9) {
            StarsSetup();
            StarsStart();
            }
            else {
            UniverseSetup();
            UniverseStart();
            }
        }

        document.onkeyup = function(event){
            console.log (event.key);

            if (event.key) {
                go();
            };
        };

        function EuropaSetup(){
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function PlutoSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "none";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function MilkyWaySetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.borderBottom = "none";
            WordBlock6.style.display = "block";
            WordBlock7.style.display = "block";
            WordBlock8.style.display = "block";
            WordBlock9.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function AndromedaSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            WordBlock7.style.display = "block";
            WordBlock8.style.display = "block";
            WordBlock9.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function MoonSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function NebulaSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function BlackHoleSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            WordBlock6.style.borderBottom = "none";
            WordBlock7.style.display = "block";
            WordBlock8.style.display = "block";
            WordBlock9.style.display = "block";
            WordBlock10.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function MarsSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function StarsSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        function UniverseSetup() {
            WordBlock1.style.display = "block";
            WordBlock2.style.display = "block";
            WordBlock3.style.display = "block";
            WordBlock4.style.display = "block";
            WordBlock5.style.display = "block";
            WordBlock6.style.display = "block";
            WordBlock7.style.display = "block";
            WordBlock8.style.display = "block";
            Play.style.display = "none";
            WordBlock11.append("")
        };

        

        
        function Restart() {
            q = 6;
            w = 0;
            i = 0;
            x = Math.floor((Math.random() * 10) + 1);
            IncorrectLetters.innerHTML="";
            var wordBlocks = document.querySelectorAll('.WordBlock')
            for(var i = 0; i < wordBlocks.length; i++) {
            wordBlocks[i].innerHTML = "";
            wordBlocks[i].style.display = "none";
            wordBlocks[i].style.borderBottom = "2px solid #eeeeee";
            }
            newWrong.innerHTML = "6";
            newImg.src = "assets/images/hangman1.jpg";
            go()
        }

        
        function EuropaStart() {
        
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
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
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
                };

                if (w == 6) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }

        function PlutoStart() {
        
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
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
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
                };

                if (w == 5) {
                Win();
                }                
                else if (q == 0) {
                Loss();
                }
            }
        }
    }

        function MilkyWayStart() {
        
            function MilkyWay1() {
                WordBlock1.innerHTML = MilkyWay[0];
                w = w + 1;
            };

            function MilkyWay2() {
                WordBlock2.innerHTML = MilkyWay[1];
                w = w + 1;
            };

            function MilkyWay3() {
                WordBlock3.innerHTML = MilkyWay[2];
                w = w + 1;
            };

            function MilkyWay4() {
                WordBlock4.innerHTML = MilkyWay[3];
                w = w + 1;
            };

            function MilkyWay5() {
                WordBlock5.innerHTML = MilkyWay[4];
                w = w + 1;
            };

            function MilkyWay6() {
                WordBlock7.innerHTML = MilkyWay[5];
                w = w + 1;
            };

            function MilkyWay7() {
                WordBlock8.innerHTML = MilkyWay[6];
                w = w + 1;
            };

            function MilkyWay8() {
                WordBlock9.innerHTML = MilkyWay[7];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "m") {
                MilkyWay1();
                j = j-1;
                }
                else if (event.key == "i") {
                MilkyWay2();
                j = j-1;
                }
                else if (event.key == "l") {
                MilkyWay3();
                j = j-1;
                }
                else if (event.key == "k") {
                MilkyWay4();
                j = j-1;
                }
                else if (event.key == "y") {
                MilkyWay5();
                MilkyWay8();
                j = j-1;
                }
                else if (event.key == "w") {
                MilkyWay6();
                j = j-1;
                }
                else if (event.key == "a") {
                MilkyWay7();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 8) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function AndromedaStart() {
            
            function Andromeda1() {
                WordBlock1.innerHTML = Andromeda[0];
                w = w + 1;
            };

            function Andromeda2() {
                WordBlock2.innerHTML = Andromeda[1];
                w = w + 1;
            };

            function Andromeda3() {
                WordBlock3.innerHTML = Andromeda[2];
                w = w + 1;
            };

            function Andromeda4() {
                WordBlock4.innerHTML = Andromeda[3];
                w = w + 1;
            };

            function Andromeda5() {
                WordBlock5.innerHTML = Andromeda[4];
                w = w + 1;
            };

            function Andromeda6() {
                WordBlock6.innerHTML = Andromeda[5];
                w = w + 1;
            };

            function Andromeda7() {
                WordBlock7.innerHTML = Andromeda[6];
                w = w + 1;
            };

            function Andromeda8() {
                WordBlock8.innerHTML = Andromeda[7];
                w = w + 1;
            };

            function Andromeda9() {
                WordBlock9.innerHTML = Andromeda[8];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "a") {
                Andromeda1();
                Andromeda9();
                j = j-1;
                }
                else if (event.key == "n") {
                Andromeda2();
                j = j-1;
                }
                else if (event.key == "r") {
                Andromeda4();
                j = j-1;
                }
                else if (event.key == "o") {
                Andromeda5();
                j = j-1;
                }
                else if (event.key == "m") {
                Andromeda6();
                j = j-1;
                }
                else if (event.key == "e") {
                Andromeda7();
                j = j-1;
                }
                else if (event.key == "d") {
                Andromeda3();
                Andromeda8();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 9) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function MoonStart() {
                
            function Moon1() {
                WordBlock1.innerHTML = Moon[0];
                w = w + 1;
            };

            function Moon2() {
                WordBlock2.innerHTML = Moon[1];
                w = w + 1;
            };

            function Moon3() {
                WordBlock3.innerHTML = Moon[2];
                w = w + 1;
            };

            function Moon4() {
                WordBlock4.innerHTML = Moon[3];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "m") {
                Moon1();
                j = j-1;
                }
                else if (event.key == "o") {
                Moon2();
                Moon3()
                j = j-1;
                }
                else if (event.key == "n") {
                Moon4();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 4) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function NebulaStart() {
                
            function Nebula1() {
                WordBlock1.innerHTML = Nebula[0];
                w = w + 1;
            };

            function Nebula2() {
                WordBlock2.innerHTML = Nebula[1];
                w = w + 1;
            };

            function Nebula3() {
                WordBlock3.innerHTML = Nebula[2];
                w = w + 1;
            };

            function Nebula4() {
                WordBlock4.innerHTML = Nebula[3];
                w = w + 1;
            };

            function Nebula5() {
                WordBlock5.innerHTML = Nebula[4];
                w = w + 1;
            };

            function Nebula6() {
                WordBlock6.innerHTML = Nebula[5];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "n") {
                Nebula1();
                j = j-1;
                }
                else if (event.key == "e") {
                Nebula2();
                j = j-1;
                }
                else if (event.key == "b") {
                Nebula3();
                j = j-1;
                }
                else if (event.key == "u") {
                Nebula4();
                j = j-1;
                }
                else if (event.key == "l") {
                Nebula5();
                j = j-1;
                }
                else if (event.key == "a") {
                Nebula6();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 6) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function BlackHoleStart() {
                
            function BlackHole1() {
                WordBlock1.innerHTML = BlackHole[0];
                w = w + 1;
            };

            function BlackHole2() {
                WordBlock2.innerHTML = BlackHole[1];
                w = w + 1;
            };

            function BlackHole3() {
                WordBlock3.innerHTML = BlackHole[2];
                w = w + 1;
            };

            function BlackHole4() {
                WordBlock4.innerHTML = BlackHole[3];
                w = w + 1;
            };

            function BlackHole5() {
                WordBlock5.innerHTML = BlackHole[4];
                w = w + 1;
            };

            function BlackHole6() {
                WordBlock7.innerHTML = BlackHole[5];
                w = w + 1;
            };

            function BlackHole7() {
                WordBlock8.innerHTML = BlackHole[6];
                w = w + 1;
            };

            function BlackHole8() {
                WordBlock9.innerHTML = BlackHole[7];
                w = w + 1;
            };

            function BlackHole9() {
                WordBlock10.innerHTML = BlackHole[8];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "b") {
                BlackHole1();
                j = j-1;
                }
                else if (event.key == "l") {
                BlackHole2();
                BlackHole8();
                j = j-1;
                }
                else if (event.key == "a") {
                BlackHole3();
                j = j-1;
                }
                else if (event.key == "c") {
                BlackHole4();
                j = j-1;
                }
                else if (event.key == "k") {
                BlackHole5();
                j = j-1;
                }
                else if (event.key == "h") {
                BlackHole6();
                j = j-1;
                }
                else if (event.key == "o") {
                BlackHole7();
                j = j-1;
                }
                else if (event.key == "e") {
                BlackHole9();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 9) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function MarsStart() {
                    
            function Mars1() {
                WordBlock1.innerHTML = Mars[0];
                w = w + 1;
            };

            function Mars2() {
                WordBlock2.innerHTML = Mars[1];
                w = w + 1;
            };

            function Mars3() {
                WordBlock3.innerHTML = Mars[2];
                w = w + 1;
            };

            function Mars4() {
                WordBlock4.innerHTML = Mars[3];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "m") {
                Mars1();
                j = j-1;
                }
                else if (event.key == "a") {
                Mars2();
                j = j-1;
                }
                else if (event.key == "r") {
                Mars3();
                j = j-1;
                }
                else if (event.key == "s") {
                Mars4();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 4) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function StarsStart() {
                        
            function Stars1() {
                WordBlock1.innerHTML = Stars[0];
                w = w + 1;
            };

            function Stars2() {
                WordBlock2.innerHTML = Stars[1];
                w = w + 1;
            };

            function Stars3() {
                WordBlock3.innerHTML = Stars[2];
                w = w + 1;
            };

            function Stars4() {
                WordBlock4.innerHTML = Stars[3];
                w = w + 1;
            };

            function Stars5() {
                WordBlock5.innerHTML = Stars[4];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "s") {
                Stars1();
                Stars5();
                j = j-1;
                }
                else if (event.key == "t") {
                Stars2();
                j = j-1;
                }
                else if (event.key == "a") {
                Stars3();
                j = j-1;
                }
                else if (event.key == "r") {
                Stars4();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 5) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
        function UniverseStart() {
                
            function Universe1() {
                WordBlock1.innerHTML = Universe[0];
                w = w + 1;
            };

            function Universe2() {
                WordBlock2.innerHTML = Universe[1];
                w = w + 1;
            };

            function Universe3() {
                WordBlock3.innerHTML = Universe[2];
                w = w + 1;
            };

            function Universe4() {
                WordBlock4.innerHTML = Universe[3];
                w = w + 1;
            };

            function Universe5() {
                WordBlock5.innerHTML = Universe[4];
                w = w + 1;
            };

            function Universe6() {
                WordBlock6.innerHTML = Universe[5];
                w = w + 1;
            };

            function Universe7() {
                WordBlock7.innerHTML = Universe[6];
                w = w + 1;
            };

            function Universe8() {
                WordBlock8.innerHTML = Universe[7];
                w = w + 1;
            };

            function Win() {
                win.push(w)
                blank1.innerHTML = win.length;
                Restart()
            }
            
            function Loss() {
                lose.push(i);
                blank2.innerHTML = lose.length;
                Restart()
            }

            function Incorrect() {
                IncorrectLetters.append(event.key + ",");
                q--
                newWrong.innerHTML = q;
                newImg.setAttribute("src", images[q]);
            }
            
            for (var j=0; j < 6; j++) {

            document.onkeyup = function(event){
                console.log (event.key);

                
                if (event.key == "u") {
                Universe1();
                j = j-1;
                }
                else if (event.key == "n") {
                Universe2();
                j = j-1;
                }
                else if (event.key == "i") {
                Universe3();
                j = j-1;
                }
                else if (event.key == "v") {
                Universe4();
                j = j-1;
                }
                else if (event.key == "e") {
                Universe5();
                Universe8()
                j = j-1;
                }
                else if (event.key == "r") {
                Universe6();
                j = j-1;
                }
                else if (event.key == "s") {
                Universe7();
                j = j-1;
                }
                else {
                Incorrect();   
                };

                if (w == 8) {
                Win();
                }               
                else if (q == 0) {
                Loss();
                }
            }
        }
    }
})