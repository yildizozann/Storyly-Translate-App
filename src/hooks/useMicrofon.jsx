import { useEffect, useState } from "react";
import { mic } from '../utils/initMicrofon'

function useMicrofon(isRecord = false) {
    const [transcript, setTranscript] = useState('');
    const reset = () => {
        setTranscript('')
    }

    useEffect(() => {

        if (isRecord) {
            mic.start()
            mic.onend = () => {
                console.log('continue recording...')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('stopped recording...')

            }
        }

        mic.onstart = () => {
            console.log('mics activated')

        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            setTranscript(transcript);

            mic.onerror = event => {
                console.log(event.error)
            }
        }

    }, [isRecord])

    return [transcript,reset]
}

export default useMicrofon;
