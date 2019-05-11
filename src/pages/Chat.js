import React, { Component } from 'react';
import { Input, Button, Form } from 'reactstrap';
import moment from 'moment'

// Component Here 
import Dashboard from './components/Dashboard'

export default class Chat extends Component {

    state = {
        data: [],
    }

    NewArray = () => {
        var topic = document.getElementById('topic').value
        var text = document.getElementById('text').value

        if (topic !== '' && text !== '') {
            var object = {
                topic: topic,
                text: text,
                date: moment().format('hh:mm:ss')
            }

            this.setState({
                data: [object]
            })
            document.getElementById("form").reset();
        }


    }



    render() {
        return (
            <div className="container">
                <Form id="form" >
                    <Input type="text" placeholder="TOPIC HERE ...." id="topic" />
                    <Input type="text" placeholder="TEXT HERE ...." id="text" />
                </Form>
                <Button onClick={this.NewArray} color="danger">Submit</Button>

                <Dashboard value={this.state.data} />

            </div >
        );
    }
}