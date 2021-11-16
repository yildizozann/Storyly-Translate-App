
import './App.scss';
import { useEffect, useState } from 'react';
import useMicrofon from './hooks/useMicrofon';
import askMicPermission from './utils/askMicPermission';
import Translate from './components/Translate';
import initMicrofon from './utils/initMicrofon';

initMicrofon();


function App() {
  const [isRecord, setIsRecord] = useState(false)
  const [speech, setSpeech] = useState('')
  const [written, setWritten] = useState('')
  const [isWrite, setIsWrite] = useState(false)
  


  const [transcript, reset] = useMicrofon(isRecord);

  useEffect(() => {
    if (transcript) {
      setSpeech(transcript)
    }
  }, [transcript, isRecord])

  //  ask permission for mic call only once when button click
  useEffect(() => {
    if (isRecord) {
      askMicPermission();
    }
  },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [])


  const handleWritten = event => {
    setWritten(event.target.value)
    setIsWrite(true)
    console.log(event.target.value)
  }

  const handleClick = () => {
    setIsRecord(!isRecord)
    if (isRecord === false) {
      setWritten('')
      setIsWrite(false) 
    } else {
      setWritten(speech)
    }
    
  }
  const handleDeleteClick = () => {
    if (isWrite) {
      setWritten('')
      setIsWrite(!isWrite)
    }

    setSpeech('') 
    reset() // transcript data cleaning.
    
  }



  return (
    <>

      <h1 className="header">Translate App</h1>

      <div className='container'>

        <div className='box--left'>

          {isRecord ?
            <span className='mic-info'>Listening</span> :
            <span className='mic-info'>Stopped</span>}

          <button className='btn1' onClick={handleClick}>
            {isRecord ?
              <i className="mic fas fa-microphone fa-2x"></i> :
              <i className="mic fas fa-microphone-slash fa-2x"></i>}
          </button>

          {/* TODO: Nasıl oluyor bu işlem ? */}   
          { // condition for delete button
          (isWrite||transcript) &&   
            <button className='btn2' onClick={handleDeleteClick}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          }

          <textarea
            className='box'
            id="text"
            value={isWrite ? written : speech}
            type="text"
            placeholder='Please Enter The Text...'
            onChange={handleWritten}
          />

        </div>

        <Translate text={isWrite ? written : speech} />
        
      </div>
    </>


  );
}



export default App;

