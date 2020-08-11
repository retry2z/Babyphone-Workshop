import React from 'react';
import EventEmitter from './engine/EventEmitter';
import { startListen, stopListen } from './engine/speech-service';
import style from './speech.module.css';

import productService from '../../services/product-service';
import DefinedButton from '../core/button/button';

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

                    <div>
                        Status: <span className={style.speech_info}>{this.state.data ? 'Running...' : 'Off'}</span>
                    </div>

                    <div className={style.speech_cmd}>
                        <div className={style.speech_autoStart}>
                            <label>Auto:
                        <input
                                    className={style.speech_checkbox}
                                    type="checkbox"
                                    checked={this.state.isChecked}
                                    onChange={this.onChangeHandler}
                                />
                            </label>
                        </div>

                        <DefinedButton title='Start' action={() => startListen(this.state.isChecked)} />
                        <DefinedButton theme='stroked' title='Stop' action={stopListen} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeechPanel