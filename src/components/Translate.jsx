import { useEffect, useState } from 'react';
import TranslateAPI from '../api/translate';

export default function Translate({ text }) {
    const [convertedText, setConvertedText] = useState('')

    // TODO: useEffect içinde async method çağrılmaz. IIFE dönüştürülmesi gerekiyor. BAK!
    useEffect(() => {
        (async () => {
            let response;
            response = await TranslateAPI.text(text)
            setConvertedText(response)
        })();
    }, [text]);
    return (<textarea className='input-box box1' type="text" readOnly={true} placeholder='Translation' value={convertedText} />)
}
