// detecting for click
var numOfBtn = document.querySelectorAll(".btn").length;

// detecting for press 

document.addEventListener("keypress",function(event){
    makesound(event.key);
});

function makesound(event){
    switch(event){
        case "a":
            var sound = new Audio("sounds/a.mp3");
            sound.play();
            break;
        case "b":
            var sound = new Audio("sounds/b.mp3");
            sound.play();
            break;
        case "c":
            var sound = new Audio("sounds/c.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/d.mp3");
            sound.play();
            break;
        case "e":
            var sound = new Audio("sounds/e.mp3");
            sound.play();
            break;
        case "f":
            var sound = new Audio("sounds/f.wav");
            sound.play();
            break;
        case "g":
            var sound = new Audio("sounds/g.mp3");
            sound.play();
            break;
        case "h":
            col();
            var sound = new Audio("sounds/h.mp3");
            sound.play();
            break;
        case "i":
            var sound = new Audio("sounds/i.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/j.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/k.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/l.mp3");
            sound.play();
            break;
        case "m":
            var sound = new Audio("sounds/m.mp3");
            sound.play();
            break;
        case "n":
            var sound = new Audio("sounds/n.mp3");
            sound.play();
            break;
        case "o":
            var sound = new Audio("sounds/o.mp3");
            sound.play();
            break;
        case "p":
            var sound = new Audio("sounds/p.mp3");
            sound.play();
            break;
        case "q":
            var sound = new Audio("sounds/q.mp3");
            sound.play();
            break;
        case "r":
            var sound = new Audio("sounds/r.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/s.mp3");
            sound.play();
            break;
        case "t":
            var sound = new Audio("sounds/t.mp3");
            sound.play();
            break;
        case "u":
            var sound = new Audio("sounds/u.mp3");
            sound.play();
            break;
        case "v":
            var sound = new Audio("sounds/v.mp3");
            sound.play();
            break;
        case "w":
            var sound = new Audio("sounds/w.mp3");
            sound.play();
            break;
        case "x":
            var sound = new Audio("sounds/x.mp3");
            sound.play();
            break;
        case "y":
            var sound = new Audio("sounds/y.mp3");
            sound.play();
            break;
        case "z":
            var sound = new Audio("sounds/z.mp3");
            sound.play();
            break;
        default:
            alert("Invalid press");
    }
}
