import axios from 'axios';
import convertTranslatedText from '../utils/convertTranslatedText';
import apiUrl from '../utils/apiUrl';


// TODO: async await and promise chain BAK!
const TranslateAPI = {
    text: async (text) => {
        // TODO: Burada try catch kullanarak ERR yakala console.logla
        const response = await axios
            .post(
                apiUrl(),
                {},
                {
                    params: {
                        q: text,
                        target: 'tr',
                        key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
                    }
                }
            )
        return convertTranslatedText(response);
    },
}
export default TranslateAPI;