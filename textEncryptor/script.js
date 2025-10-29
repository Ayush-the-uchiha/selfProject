const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const listLen = alphabets.length;

// Function to encode the message
function encode() {
    let cipherText = "";
    const plainText = document.getElementById("msg").value.toLowerCase(); // Get user input and convert to lowercase
    const shifts = parseInt(document.getElementById("shifts").value);
    
    for (let i = 0; i < plainText.length; i++) {
        const char = plainText[i];
        if (char === " ") {
            cipherText += char;
        } else {    
            const indexOfAlpha = alphabets.indexOf(char);
            const finalShift = (indexOfAlpha + shifts) % listLen;
            cipherText += alphabets[finalShift];
        }
    }
    document.getElementById("result1").innerHTML=cipherText;
}

// Function to decode the message
function decode() {
    let plainText = "";
    const cipherText = document.getElementById("msg").value.toLowerCase();
    const shifts = parseInt(document.getElementById("shifts").value);
    
    for (let i = 0; i < cipherText.length; i++) {
        const char = cipherText[i];
        if (char === " ") {
            plainText += char;
        } else {
            const indexOfAlpha = alphabets.indexOf(char);
            const finalShift = (indexOfAlpha - shifts + listLen) % listLen;  // Added + listLen to ensure positive values
            plainText += alphabets[finalShift];
        }
    }
    document.getElementById("result1").innerHTML= plainText;
}

// copyFunction
function copySkill(){
    let copyText = document.getElementById("result1").innerText;

    // this line is used for copy the result text
    navigator.clipboard.writeText(copyText);
    // alert("Copied");
}