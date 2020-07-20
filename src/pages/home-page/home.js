import React from 'react';

import Common from '../../components/common/common';
import Title from '../../components/elements/title/title';
import Card from '../../components/product/card/card';
import productService from '../../services/product-service';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: <Card />,
        }
    }

    componentDidMount = async () => {
        const { data } = await productService.list();

        const result = data
            .sort((a, b) => Number(new Date(a.createdAt)) - Number(new Date(b.createdAt)))
            .map((doc, index) => {
                return <Card key={doc.id} data={{ index, ...doc }} />
            })

        this.setState({
            data: result
        });
    }

    render() {
        return (
            <Common>
                <Title title='Publication' />
                <> {this.state.data} </>
            </Common>
        )
    }
}

export default Home