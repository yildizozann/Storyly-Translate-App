import { useEffect, useState } from 'react';
import TranslateAPI from '../api/translate';

export default function Translate({ text }) {
    const [convertedText, setConvertedText] = useState('')

    useEffect(() => {
        (async () => {
            let response;
            response = await TranslateAPI.text(text)
            setConvertedText(response)
        })();
    }, [text]);
    
    return (<textarea className='box' type="text" readOnly={true} placeholder='Translation' value={convertedText} />)
}
