import axios from 'axios';
import convertTranslatedText from '../utils/convertTranslatedText';
import apiUrl from '../utils/apiUrl';



const TranslateAPI = {
    text: async (text) => {
        try {
            
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

        }catch(err) {
            console.log('API Error' + err);
        }
    },
}
export default TranslateAPI;