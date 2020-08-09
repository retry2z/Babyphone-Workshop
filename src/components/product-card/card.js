import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import style from './card.module.css';
import defaultImage from '../../images/room-default.jpg';
import productService from '../../services/product-service';
import ActiveBtn from './button';

const ProductCard = ({ data = false, onJoinHandler = null, owner = false }) => {
    const { id } = useParams();
    const history = useHistory();
    const [body, setBody] = useState([]);
    const [isJoined, setIsJoined] = useState(localStorage.getItem('isJoined') || false);

    const title = data?.title || 'Loading...'
    const imageUrl = data?.imageUrl || defaultImage;
    const people = data?.people || [];


    const newBody = (arr) => {
        return arr.map(
            (name, index) => {
                return (
                    <div key={index} className={style.person}>
                        <p>{name}</p>
                    </div>
                )
            });
    }

    useEffect(() => {
        if (people.length === 0) {
            return
        }
        const data = newBody(people);
        setBody(data);
    }, [people]);

    useEffect(() => {
        if (onJoinHandler === null) {
            return
        }
        onJoinHandler(isJoined);
    }, [isJoined, onJoinHandler]);

    useEffect(() => {
        return () => {
            if (!localStorage.getItem('isJoined')) {
                return
            }
            productService.leave(id);
            localStorage.removeItem('isJoined');
        }
    }, [id])


    const joinRoom = async () => {
        const response = await productService.join(id);
        const data = newBody(response.data.people);
        localStorage.setItem('isJoined', true);
        setIsJoined(true);
        setBody(data);
    }

    const leaveRoom = async () => {
        const response = await productService.leave(id);
        const data = newBody(response.data.people);
        localStorage.removeItem('isJoined');
        setBody(data);
        setIsJoined(false);
    }

    const deleteRoom = async () => {
        await productService.remove(id);
        history.push('/');
    }

    return (
        <div className={style.room}>
            <img src={imageUrl} alt="Room_image" className={style.room_image} />
            <h5 className={style.room_name}>{title}</h5>
            <div className={style.people}>
                {
                    body.length > 0 ? body : <div className={style.person}><p>Empty</p></div>
                }
            </div>
            {
                owner ?
                    <ActiveBtn type='owner' onClick={deleteRoom} /> :
                    isJoined ?
                        <ActiveBtn type='leave' onClick={leaveRoom} /> :
                        <ActiveBtn type='join' onClick={joinRoom} />
            }
        </div>
    )
}

export default ProductCard