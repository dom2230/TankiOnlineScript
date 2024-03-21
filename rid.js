
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
    opacity: 0.9;

box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
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
    border-radius: 4px;
  outline: 1px grey;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
 background-color: whitesmoke;
 border: 1px solid #aaa;
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
    background-color: #222222;
cursor: pointer;


    box-shadow: 0 0 4px var(--clr);

    border-radius: 12px;
    border: 2px transparent;
        transition: 0.5s;
        color: white;
font-weight: 800;
    animation: flow 0.8s infinite alternate;


}


  @keyframes flow {
    0% {
        color: rgba(30, 155, 255, 1);
        text-shadow: 0 0 5px rgba(30, 155, 255, 0.8);
    }
    100% {
        color: rgba(46, 194, 231, 0.7);
        text-shadow: 0 0 10px rgba(30, 155, 255, 0.8);
    }
}









@keyframes lightning {
  0% {
    box-shadow: 0 0 5px 2px rgba(30, 155, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 10px 4px rgba(30, 155, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 5px 2px rgba(30, 155, 255, 0.7);
  }
}

.buttons-row-1 button:hover, .buttons-row-2 button:hover, .buttons-row-3 button:hover {
    background-color: #222222;
    box-shadow: 0 0 42px var(--clr);
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
    color: rgba(30, 155, 255, 0.1);
    text-shadow: 0 0 5px rgba(30, 155, 255, 0.3), 0 0 10px rgba(30, 155, 255, 0.3), 0 0 20px rgba(30, 155, 255, 0.3);
  }
  100% {
    color: rgba(30, 155, 255, 0.5);
    text-shadow: 0 0 5px rgba(30, 155, 255, 0.7), 0 0 10px rgba(30, 155, 255, 0.7), 0 0 20px rgba(30, 155, 255, 0.7);
  }
}


.button input[type="text"] {
    margin-top: 28px;
    height: 30px;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
 background-color: rgba(30, 155, 255, 0.1);
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px; /* Border radius */
  padding: 5px; /* Add some padding */
  text-align: center; /* Center the text horizontally */
  color: white;
   font-family: Arial, sans-serif; /* Specify font family */
  font-weight: 900;
}

.button input[type="text"]:hover {
  background-color: rgba(30, 155, 255, 0.2);
}

.button input[type="text"]:focus {
  background-color: rgba(30, 155, 255, 0.2);
}


    `);
