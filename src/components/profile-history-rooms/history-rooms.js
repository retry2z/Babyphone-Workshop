import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCardSimple from '../product-card-simple/card';
import Title from '../core/title/title';

import userServices from '../../services/user-service';

const HistoryMyRooms = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await userServices.myRooms();

            if (!response.isValid) {
                this.props.history.push('/error');
                return response.error;
            } else {
                setData(response.data);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Title title='My Rooms' />
            <List>
                {
                    !!data.length ?

                        data.slice(0,5).map((doc => {
                            return <ProductCardSimple key={doc.id} data={doc} />
                        }))

                        : <h1>Loading...</h1>
                }
            </List>
        </div>
    )
}

const List = styled.section`
    margin-top: 2%;
    height:34vh;
    border:1px solid #504038; 
    background: transparent;
    border-radius:4px; 
    padding:2.3em 1.8em;
`;

export default HistoryMyRooms