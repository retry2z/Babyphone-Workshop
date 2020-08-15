import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProductCardSimple from '../../components/product-card-simple/card';
import productService from '../../services/product-service';
import FormControl from '../../components/from-control/form';
import Title from '../../components/core/title/title';


class Home extends React.Component {

    fields = [
        {
            name: 'search',
            label: 'Search:',
        },
    ]

    constructor(props) {
        super(props);

        this.rooms = [];
        this.state = {
            data: [],
        }
    }

    componentDidMount = async () => {
        const { data } = await productService.list();
        this.rooms = data.slice(0, 5);

        this.setState({
            ...this.state,
            data: this.search(this.rooms),
        });
    }

    search = (arr, data = '') => {
        return arr.filter(item => {
            const name = item.data.title.toLowerCase();
            const description = !!item?.keyWords ? item.keyWords.join(' ').toLowerCase() : '';
            const search_data = data.toLowerCase();

            if (name.includes(search_data) || description.includes(search_data)) {
                return item
            } else {
                return false
            }
        });
    }

    submitHandler = (data) => {
        this.setState({
            ...this.state,
            data: this.search(this.rooms, data.search),
        });
    }

    render() {
        return (
            <Common>
                <Wrapper>
                    <Search>
                        <FormControl
                            fields={this.fields}
                            formAction={[this.submitHandler,'Search']}
                        />
                    </Search>
                    <div>
                        <Title title='Rooms' />
                        <List>
                            {
                                !!this.state.data.length ?

                                    this.state.data.map((doc => {
                                        return <ProductCardSimple key={doc.data.id} data={doc.data} />
                                    }))

                                    : <h1>Loading...</h1>
                            }
                        </List>
                    </div>
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    margin: 1em auto;
    margin-top:3em;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 5%;
`;

const List = styled.section`
    margin-top: 2%;
    height:34vh;
    border:1px solid #504038; 
    background: transparent;
    border-radius:4px; 
    padding:2.3em 1.8em;
`;

const Search = styled.section`
    height:18vh
`;

export default Home