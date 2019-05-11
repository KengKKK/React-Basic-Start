import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';


export default class Dashboard extends Component {

    state = {
        data: []
    }

    componentWillReceiveProps(props) {

        this.setState({
            data: this.state.data.concat(props.value)
        })

    }



    render() {

        return (
            <div>
                {
                    this.state.data.length > 0 &&
                    this.state.data
                        .map((data, i) => {
                            return < Card key={i}>
                                <CardBody>
                                    <CardTitle>{data.topic}</CardTitle>
                                    <CardSubtitle>{data.text}</CardSubtitle>
                                    <CardText>{data.date}</CardText>
                                </CardBody>
                            </Card>
                        })
                }

            </div>
        );
    }
}