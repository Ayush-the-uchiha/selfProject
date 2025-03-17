// detecting total number of key
var numOfBtn = document.querySelectorAll(".btn").length;

// detecting for press 

document.addEventListener("keypress",function(event){
    // AnimationX(event);
    makesound(event.key);
    // console.log(event.key);
});

function makesound(event){
    switch(event){
        case "a":
            playSound("sounds/a.mp3");            
            break;
        case "b":
            playSound("sounds/b.mp3");            
            break;
        case "c":
            playSound("sounds/c.mp3");            
            break;
        case "d":
            playSound("sounds/d.mp3");            
            break;
        case "e":
            playSound("sounds/e.mp3");            
            break;
        case "f":
            playSound("sounds/f.wav");            
            break;
        case "g":
            playSound("sounds/g.mp3");            
            break;
        case "h":
            playSound("sounds/h.mp3");            
            break;
        case "i":
            playSound("sounds/i.mp3");            
            break;
        case "j":
            playSound("sounds/j.mp3");            
            break;
        case "k":
            playSound("sounds/k.mp3");            
            break;
        case "l":
            playSound("sounds/l.mp3");            
            break;
        case "m":
            playSound("sounds/m.mp3");            
            break;
        case "n":
            playSound("sounds/n.mp3");            
            break;
        case "o":
            playSound("sounds/o.mp3");            
            break;
        case "p":
            playSound("sounds/p.mp3");            
            break;
        case "q":
            playSound("sounds/q.mp3");            
            break;
        case "r":
            playSound("sounds/r.mp3");            
            break;
        case "s":
            playSound("sounds/s.mp3");            
            break;
        case "t":
            playSound("sounds/t.mp3");            
            break;
        case "u":
            playSound("sounds/u.mp3");            
            break;
        case "v":
            playSound("sounds/v.mp3");            
            break;
        case "w":
            playSound("sounds/w.mp3");            
            break;
        case "x":
            playSound("sounds/x.mp3");           
            break;
        case "y":
            playSound("sounds/y.mp3");
            break;
        case "z":
            playSound("sounds/z.mp3");
            break;
        case " ":
            playSound("sounds/yo.mp3");
            break;
        default:
            alert("Invalid press");            
    }
}
function playSound(toward){
    var playSound1 = new Audio(toward);
    playSound1.play();
}
function AnimationX(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("good");
    setTimeout(function(){
        activeButton.classList.remove("good")
    },100);
}
