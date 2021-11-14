export default function WrittenText({ text, onText }) {
/* Bunu yok ET! APP.js içine at */
    return (
        <>
            <textarea
                className='input-box box-two'
                id="text"
                value={text}
                type="text"
                placeholder='Please Enter The Text...'
                maxLength='50000'
                onChange={onText}
            >
                {text}
            </textarea>
        </>
    )
}