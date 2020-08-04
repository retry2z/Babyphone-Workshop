import React from 'react';
import EventEmitter from './engine/EventEmitter';
import { startListen, stopListen } from './engine/speech-service';
import style from './speech.module.css'

class SpeechPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false,
            isChecked: false,
        }
    }

    componentDidMount() {
        EventEmitter.subscribe('onChange', (data) => {
            this.setState({
                data
            });
        });
    }

    onChangeHandler = () => {
        this.setState({
            ...this.state,
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <div className={style.speech_wrapper}>
                <div className={style.speech_body}>

                    <div className={style.speech_status}>
                        Status: <span className={style.speech_info}>{this.state.data ? 'Running...' : 'Off'}</span>
                    </div>

                    <div>
                        <label htmlFor='autostart'>Auto:</label>
                        <input
                            className={style.speech_checkbox}
                            type="checkbox"
                            name="autostart"
                            checked={this.state.isChecked}
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <button className={style.speech_start_btn} onClick={() => startListen(this.state.isChecked)}>Start</button>
                    <button className={style.speech_abort_btn} onClick={stopListen}>Abort</button>
                </div>
            </div>
        )
    }
}

export default SpeechPanel