let mic;

export default function initMicrofon() {

    if (mic) return mic;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    mic = new SpeechRecognition();


    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = 'en-US'

    return mic;
}

export { mic };