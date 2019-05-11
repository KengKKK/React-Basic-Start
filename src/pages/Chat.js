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
            var i = 1
            var object = {
                id: i++,
                topic: topic,
                text: text,
                date: moment().format('hh:mm:ss')
            }

            this.setState({
                data: [object]
            })
            document.getElementById("form").reset();
        }
        else {
            alert('Please Enter ...')
        }


    }



    render() {
        return (
            <div className="container">
                <h1 className="text-center">Hello Mars !!</h1>
                <Form id="form" >
                    <Input type="text" placeholder="TOPIC HERE ...." id="topic" />
                    <Input type="text" placeholder="TEXT HERE ...." id="text" />
                </Form>
                <Button onClick={this.NewArray} color="danger">Submit</Button>

                <br />
                <br />
                <Dashboard value={this.state.data} />

            </div >
        );
    }
}