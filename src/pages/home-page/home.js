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

        this.state = {
            data: <ProductCardSimple />,
        }
    }

    componentDidMount = async () => {
        const { data } = await productService.list();

        const result = data.slice(0, 5)

        this.setState({
            data: result
        });
    }

    submitHandler(data) {
        console.log(data);
    }

    render() {
        return (
            <Common>
                <Wrapper>

                    <FormControl
                        fields={this.fields}
                        formAction={this.submitHandler}
                        buttonTitle='Search'
                        theme='default'
                    />

                    <div>
                        <Title title='Last created rooms'/>
                        <List>
                            <ProductCardSimple />
                        </List>
                    </div>
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 5%;
    padding: 5%;
`;

const List = styled.section`
    margin-top: 4.2%;
`;

export default Home