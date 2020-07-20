import React from 'react';

import Common from '../../components/common/common';
import Title from '../../components/core/title/title';
import Card from '../../components/product/card/card';
import productService from '../../services/product-service';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: <Card author='...' description='Loading...' index='0' />,
        }
    }

    componentDidMount = async () => {
        const { data } = await productService.list();

        const result = data.map((doc, index) => {
            return <Card key={doc.id} author={doc.author} description={doc.description} index={index} />
        });

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