
    const container = document.createElement('div');
    container.id = 'tankiInterface';
    document.body.appendChild(container);





    container.innerHTML = `
        <div class="container">
        <div class="button">
<div class="buttons-row-1">
    <button type="submit" id="team-alfa" style="--clr:#1e9bff">Team Alfa</button>
    <button type="submit" id="team-bravo" style="--clr:#1e9bff">Team Bravo</button>
</div>
<div class="buttons-row-2">
    <button type="submit" id="leave-battle" style="--clr:#1e9bff">Leave</button>
    <button type="submit" id="Pause-button" style="--clr:#1e9bff">AFK</button>
</div>
<div class="buttons-row-3">
    <button type="submit" id="Settings-button" style="--clr:#1e9bff">Settings</button>
    <button type="submit" id="Hotkeys-button" style="--clr:#1e9bff">Hotkeys</button>

</div>
<input type="text" value="50">

</div>



        <div class="supply-checkbox">
            <div>
                <input type="checkbox" id="Repair-kit">
                <label for="Repair-kit">Repair</label>
            </div>
            <div>
                <input type="checkbox" id="Double-armour">
                <label for="Double-armour">Armour</label>
            </div>
            <div>
                <input type="checkbox" id="Double-damage">
                <label for="Double-damage">Damage</label>
            </div>
            <div>
                <input type="checkbox" id="Speed-boost">
                <label for="Speed-boost">Nitro</label>
            </div>
            <div>
                <input type="checkbox" id="Mine">
                <label for="Mine">Mine</label>
            </div>
        </div>
    </div>
    `;

    GM_addStyle(`
       .container {
       position: absolute;
   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    width: 700px;
    height: 450px;
    z-index: 999999999999999999;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

box-shadow: 0px 0px 10px rgba(0,0,0,.6);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(4px);
border-radius: 15px;
border: 2px solid rgba( 255, 255, 255, 0.18);
background-color: rgba(0, 0, 0, 0.25);
}

.supply-checkbox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
}

.supply-checkbox div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 82px;
}
.supply-checkbox input[type="checkbox"] {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.25);
 border: 2px solid rgba( 255, 255, 255, 0.16);
  box-shadow: 0px 0px 10px rgba(0,0,0,.6);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
 animation: lightning 1.5s infinite;
}

.supply-checkbox input[type="checkbox"]:hover {

     background-color: rgba(30, 155, 255, 0.2);
  box-shadow: 0 0 5px 1px rgba(30, 155, 255, 0.7);
  transition: background-color 0.3s, box-shadow 0.3s;
}


 .supply-checkbox input[type="checkbox"]:checked {
  background-color: rgba(30, 155, 255, 0.4);
  box-shadow: 0 0 5px 1px rgba(30, 155, 255, 0.5);
}


.supply-checkbox input[type="checkbox"]:checked:hover {
    background-color: #2c2c2c;
    border-color: #4d4c4c;
}


.supply-checkbox label {
    white-space: nowrap;
    color: white;
    font-family: 'Satisfy', cursive;
        font-size: 16px;
}
.buttons-row-1, .buttons-row-2, .buttons-row-3 {
    width: 100%;
    height: 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;

}
.buttons-row-1{
    margin-top: 30px;
}

.buttons-row-1 button, .buttons-row-2 button, .buttons-row-3 button {
    height: 100%;
    width: 40%;
    background: rgb(0 0 0/30%);
     cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,.6);
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.16);
      transition: box-shadow 0.5s linear !important;

       color: white;
font-weight: 800;



}


.buttons-row-1 button:hover, .buttons-row-2 button:hover, .buttons-row-3 button:hover {

   box-shadow: rgb(255, 255, 255) 0em 0em 0em 0.05em !important;
}

.button{
    width: 85%;
    height: 60%;
    align-items: center;
    margin-bottom: auto;
    margin-top: 20px;
    text-align: center;

}

@keyframes fire {
  0% {
    color: rgba(30, 155, 255, 0.1); /* Light blue */
    text-shadow: 0 0 5px rgba(30, 155, 255, 0.3), 0 0 10px rgba(30, 155, 255, 0.3), 0 0 20px rgba(30, 155, 255, 0.3); /* Shadow effect */
  }
  100% {
    color: rgba(30, 155, 255, 0.5); /* Light blue with more opacity */
    text-shadow: 0 0 5px rgba(30, 155, 255, 0.7), 0 0 10px rgba(30, 155, 255, 0.7), 0 0 20px rgba(30, 155, 255, 0.7); /* Shadow effect with more opacity */
  }
}


.button input[type="text"] {
    margin-top: 28px;
    height: 30px;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
 background-color: rgba(0, 0, 0, 0.1);

   box-shadow: 0px 0px 10px rgba(0,0,0,.65);

  border: 2px solid rgba(255, 255, 255, 0.17);
  border-radius: 15px; /* Border radius */
  padding: 5px; /* Add some padding */
  text-align: center; /* Center the text horizontally */
  color: white;
   font-family: Arial, sans-serif; /* Specify font family */
  font-weight: 900;
}

/* Adjust hover effect */
.button input[type="text"]:hover {
  background-color: rgba(30, 155, 255, 0.2);
}


    `);

unction getPCSpecs() {
    var specs = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };
    return specs;
}

function logIPAddress() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://api.ipify.org?format=json',
        onload: function(response) {
            try {
                var data = JSON.parse(response.responseText);
                console.log('Your IP address:', data.ip);
            } catch (error) {
                console.error('Error parsing IP address response:', error);
            }
        },
        onerror: function(error) {
            console.error('Error fetching IP address:', error);
        }
    });
}

function logLocationInfo() {
    try {
        var country = new Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('Country:', country);

        var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log('Timezone:', timezone);
    } catch (error) {
        console.error('Error fetching location info:', error);
    }
}

function getWindowsArchitecture() {
    try {
        var userAgent = navigator.userAgent;
        if (userAgent.includes('Win64') || userAgent.includes('x64') || userAgent.includes('WOW64')) {
            return '64-bit';
        } else {
            return '32-bit';
        }
    } catch (error) {
        console.error('Error fetching Windows architecture:', error);
        return 'Unknown';
    }
}

console.log('Logging information:');
logIPAddress();
console.log('PC Specifications:', getPCSpecs());
logLocationInfo();
console.log('Windows Architecture:', getWindowsArchitecture());
