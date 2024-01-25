let energy = 100

alert("Hello Fighter! Choose your special move! Each move requires a different amount of energy.")
let special_moves = ["Tornado Kick", "Right Elbow", "Drop Kick", "Flying Hook", "Run Away"]
const energyused = [20, 15, 30, 40, 10]

document.getElementById("button1").innerHTML = `${special_moves[0]}`
document.getElementById("button2").innerHTML = `${special_moves[1]}`
document.getElementById("button3").innerHTML = `${special_moves[2]}`
document.getElementById("button4").innerHTML = `${special_moves[3]}`
document.getElementById("button5").innerHTML = `${special_moves[4]}`
const myButtons = document.querySelectorAll(".buttons")
function energy0() {
    document.getElementById("gameover").innerHTML = `<p>Energy too low! Game Over!</p>`
    console.log('myButtons:', myButtons)
    myButtons.forEach(button => {
        button.disabled = true;
      });   
}
function checkEnergy(){
    if (energy <1){
        energy = 0;
        document.getElementById("energy").innerHTML = `Energy: ${energy}`;
    }
}

function tornado() {
    energy = energy - 20
    document.getElementById("energy").innerHTML = `Energy: ${energy}`
    document.getElementById("gif").innerHTML = `<img src="https://i.redd.it/boostckoypg11.gif" alt="">`
    if (energy < 10) {
        energy0()
    }    
    checkEnergy();
}
function elbow() {
    energy = energy - 15
    document.getElementById("energy").innerHTML = `<p>Energy: ${energy}</p>`
    document.getElementById("gif").innerHTML = `<img src="https://media1.tenor.com/m/luG_gDJbLLUAAAAC/macho-man-flying-elbow-drop.gif" alt="">`
    if (energy < 10) {
        energy0()
    }    
    checkEnergy();
}
function dropkick() {
    energy = energy - 30
    document.getElementById("energy").innerHTML = `<p>Energy: ${energy}</p>`
    document.getElementById("gif").innerHTML = `<img src="https://i.pinimg.com/originals/cb/01/9e/cb019e373240f4a17bc36b7e20e7a27a.gif" alt="">`

    if (energy < 10) {
        energy0()
    }    
    checkEnergy();
}
function hook() {
    energy = energy - 40
    document.getElementById("energy").innerHTML = `<p>Energy: ${energy}</p>`
    document.getElementById("gif").innerHTML = `<img src="https://i.makeagif.com/media/8-29-2015/y8snBz.gif" alt="">`
    if (energy < 10) {
        energy0()
    }    
    checkEnergy();
}
function run() {
    energy = energy - 10
    document.getElementById("energy").innerHTML = `<p>Energy: ${energy}</p>`
    document.getElementById("gif").innerHTML = `<img src="https://media.tenor.com/UhEYaXfAKXYAAAAM/running-usain-bolt.gif" alt="">`
    if (energy < 10) {
        energy0()
    }    
    checkEnergy();
}



if (energy < 10) {
    document.getElementById("moreenergy").innerHTML = `<a href="https://www.olybet.lv/" target="_blank"><button id="moreenergy" onclick="moreenergy()">Get Energy</button></a>`
    moreenergy();
}

function moreenergy() {
    if (energy < 10) {
        energy = energy + 10
        document.getElementById("energy").innerHTML = `<p>Energy: ${energy}</p>`
    }
}





