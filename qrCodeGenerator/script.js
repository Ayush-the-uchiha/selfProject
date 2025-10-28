// let text = document.getElementById("inputField").value;
// let text = document.getElementById("inputField").value;

function generateQRCode() {
    let text = document.getElementById("inputField").value;
    let qrContainer = document.getElementById("resultContainer");
    let Src = "hii";
    console.log(text)
    qrContainer.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
}