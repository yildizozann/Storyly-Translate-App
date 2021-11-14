export default function askMicPermission() {
    // mic permission ask when clicked the mic button  
    navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(stream => {
        window.localStream = stream;
        window.srcObject = stream;
        window.localAudio.autoplay = true;
    }).catch(err => {
        console.log("ERROR:" + err)
    });
}