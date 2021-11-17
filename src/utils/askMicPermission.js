export default function askMicPermission() {
     
    navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
        window.localStream = stream;
        window.srcObject = stream;
    }).catch(err => {
        console.log("ERROR:" + err)
    });
}