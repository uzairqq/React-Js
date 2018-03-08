import React from 'react';
import { Container, Card, Form, span, Input, Button } from 'reactstrap';
import '../styles/Task.css';

class Task extends React.Component {
    render() {
        return (
            <Container>
                <Card className="card-container">
                    <h1>Create a Task</h1>
                    <p id="profile-name" class="profile-name-card"></p>
                    <Form className="form-signin">
                        <span id="reauth-email" class="reauth-email"></span>
                        <Input type="email" id="inputEmail" class="form-control" placeholder="Task Name" required autofocus></Input>
                        <Input type="text" id="inputPassword" class="form-control" placeholder="Completed ?" required></Input>
                    </Form>
                    <Button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Submit</Button>
                </Card>
            </Container>
        )
    }
}

export default Task;