function generateQRCode() {
    let text = document.getElementById("inputField").value;
    if(text.trim()===""){
        alert("Please enter any message atleast....");
    }
    let qrContainer = document.getElementById("resultContainer");
    qrContainer.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
}
