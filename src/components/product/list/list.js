import React from 'react';
import style from './list.module.css'
import Card from '../card/card';
import HeaderPage from '../../core/headerPage/HeaderPage'
import productService from '../product-service';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const { data } = await productService.list();
        this.setState({
            data,
        });
    }

    renderOrigamis() {
        const { data } = this.state

        return data.map((doc, index) => {
            return (
                <Card key={doc.id} author={doc.author} description={doc.description} index={index} />
            )
        })
    }

    render() {
        return (
            <div className={style.container} >
                <HeaderPage title="Origamies" />
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default List