import React from 'react';
import EventEmitter from './engine/EventEmitter';
import { startListen, stopListen } from './engine/speech-service';
import style from './speech.module.css';

import productService from '../../services/product-service';

class SpeechPanel extends React.Component {

    constructor(props) {
        super(props);

        this.id = props.id;
        this.state = {
            data: false,
            isChecked: false,
        }
    }

    componentDidMount() {
        EventEmitter.subscribe('isRunning', (data) => {
            this.setState({
                ...this.state,
                data
            });
        });


        EventEmitter.subscribe('notification', (data) => {
            console.log(data);
            productService.notify(this.id, data);
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

                    <div className={style.speed_auto}>
                        <label>Auto:
                        <input
                                className={style.speech_checkbox}
                                type="checkbox"
                                checked={this.state.isChecked}
                                onChange={this.onChangeHandler}
                            />
                        </label>
                    </div>

                    <button className={style.speech_start_btn} onClick={() => startListen(this.state.isChecked)}>Start</button>
                    <button className={style.speech_abort_btn} onClick={stopListen}>Abort</button>
                </div>
            </div>
        )
    }
}

export default SpeechPanel