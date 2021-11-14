
import './App.scss';
import { useEffect, useState } from 'react';
import useMicrofon from './hooks/useMicrofon';
import askMicPermission from './utils/askMicPermission';
import WrittenText from './components/WrittenText';
import Translate from './components/Translate';
import initMicrofon from './utils/initMicrofon';

initMicrofon();


function App() {
  const [isRecord, setIsRecord] = useState(false)
  const [speech, setSpeech] = useState(null)
  const [written, setWritten] = useState('')
  const [isWrite, setIsWrite] = useState(false)

  const [transcript] = useMicrofon(isRecord);

  useEffect(() => {
    if (transcript) {
      setSpeech(transcript)
    }
  }, [transcript, isRecord])

  const handleWritten = event => {
    setWritten(event.target.value)
    setIsWrite(true)
    console.log(event.target.value)
  }
  const handleClick = () => {
    setIsRecord(!isRecord)
    // permission sadece bir kere sormalı değiştir.
    
    askMicPermission();
  }
  return (
    <div >
      {isRecord ? <span>Listening...</span> : <span>Stopped.</span>}
      <button onClick={handleClick}>
        Listening Start/Stop
      </button>

      <div className='box'>
             
       {  <WrittenText onText={handleWritten} text={speech || written} /> }
        <Translate text={isWrite ? written : speech} />
      </div>

    </div>
  );
}



export default App;

