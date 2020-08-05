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
            setData(response.data);

        }
        fetchData();
    }, []);

    return (
        <div>
            <Title title='My Rooms' />
            <List>
                {
                    !!data.length ?

                        data.map((doc => {
                            return <ProductCardSimple key={doc.id} data={doc} />
                        }))

                        : <h1>Loading...</h1>
                }
            </List>
        </div>
    )
}

const List = styled.section`
    margin-top: 5.5%;
`;

export default HistoryMyRooms