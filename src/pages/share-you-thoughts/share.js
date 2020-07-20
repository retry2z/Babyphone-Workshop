import React from 'react';
import './share.module.css'

import Common from '../../components/common/common';
import Title from '../../components/elements/title/title';
import Card from '../../components/product/card/card';
import productService from '../../services/product-service';
import InformationPanel from '../../components/product/information-panel/information-panel';
import DefinedButton from '../../components/elements/button/button';

class Share extends React.Component {
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
            .slice(0, 3)
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
                <Title title='Share Your Thought' />
                <textarea></textarea>
                <DefinedButton title='Post' />
                <InformationPanel title='History'>
                    {this.state.data}
                </InformationPanel>
            </Common>
        )
    }
}

export default Share