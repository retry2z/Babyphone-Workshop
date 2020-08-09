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
    EventEmitter.dispatch('isRunning', true);

    const data = {
      time: new Date(Date.now()).toUTCString(),
      message: 'Babyphone is now listening...'
    }
    EventEmitter.dispatch('notification', data);
  }

  recognition.onend = () => {
    EventEmitter.dispatch('isRunning', false);
    continues ? recognition.start() : recognition.stop()
  }

  //Fired when sound that is recognized by the speech recognition service as speech has been detected. <------
  recognition.onspeechstart = () => {
    const data = {
      time: new Date(Date.now()).toUTCString(),
      message: 'I am hearing some noises now \nBabyphone is now turning off...'
    }
    EventEmitter.dispatch('notification', data);

    recognition.stop()
  }

  recognition.onspeechend = () => {
  }

  //Error cached
  recognition.onerror = () => {
  }

  recognition.start();
}

const stopListen = () => {
  recognition.onend = () => { };
  EventEmitter.dispatch('isRunning', false);
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
