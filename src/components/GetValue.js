import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import axios from 'axios'

export default class GetValue extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books')
            .then(res => {
                console.log(res.data)

                this.setState({
                    data: res.data
                })
            })
    }


    render() {
        const { data } = this.state
        return (
            <div>
                {
                    data.length > 0 &&
                    data.map(data => {
                        return < Card key={data.id}>
                            <CardBody>
                                <CardTitle>{data.name}</CardTitle>
                                <CardSubtitle>{data.id}</CardSubtitle>
                                <CardText>TEST</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    })

                }

            </div>
        );
    }
}