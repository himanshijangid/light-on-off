 const tubelight = () =>{
       let bulbOn = document.getElementById('bulbdata');            
       let bulbMain = document.getElementById('bulbMain');            
       
       for (let x = 1; x <= 5; x++){
           let bulb = document.getElementById('lightId'.concat(x));
           
                           if(bulb.src.match('off.png')){
                               bulb.src = "on.png";
                               bulbOn.innerHTML = "Light ON";
                               bulbOn.style.color = "green";         
                               bulbMain.style.background = "black";
                            }else{
                                bulb.src = "off.png";
                                bulbOn.innerHTML = "Light OFF";
                                bulbOn.style.color = "red";         
                                bulbMain.style.background = "white"; 
                                    
                           }
           
       }

        }