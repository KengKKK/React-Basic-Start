import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';


export default class Dashboard extends Component {

    // state = {
    //     data: []
    // }

    state = {
        data: []
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: this.state.data.concat(props.value)
        })
    }



    render() {

        console.log(this.state.data)

        return (
            <div>
                {
                    this.state.data.length > 0 &&
                    this.state.data
                        .map((data, i) => {
                            return <Card key={i}>
                                <CardBody>
                                    <CardTitle><h1>{data.topic}</h1></CardTitle>
                                    <CardSubtitle>{data.text}</CardSubtitle>
                                    <CardText ><span>{data.date}</span></CardText>
                                </CardBody>
                            </Card>
                        })

                }

            </div>
        );
    }
}