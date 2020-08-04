import EventEmitter from './EventEmitter';

const BrowserSpeechRecognition =
  typeof window !== 'undefined' &&
  (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition);

const recognition = BrowserSpeechRecognition ? new BrowserSpeechRecognition() : null;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.status = false;

const startListen = (continues = false) => {
  //Connect to speech recognition service
  recognition.onstart = () => {
    EventEmitter.dispatch('onChange', true);
    console.log('SpeechRecognition.onstart');
  }
  recognition.onend = () => {
    continues ? recognition.start() : recognition.stop()
  }

  //Fired when sound that is recognized by the speech recognition service as speech has been detected. <------
  recognition.onspeechstart = () => {
    console.log('SpeechRecognition.onspeechstart');

    recognition.stop()
  }

  recognition.onspeechend = () => {
    EventEmitter.dispatch('onChange', false);
    console.log('SpeechRecognition.onspeechend');
  }

  //Error cached
  recognition.onerror = () => {
  }

  recognition.start();
}

const stopListen = () => {
  recognition.onend = () => {
    EventEmitter.dispatch('onChange', false);
    console.log('SpeechRecognition.onend');
  }

  recognition.stop();
}

const listening = () => {
  return recognition.status;
}

export {
  startListen,
  stopListen,
  listening
}
