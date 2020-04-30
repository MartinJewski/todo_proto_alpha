import React from 'react';
import TodoField from "../../components/TodoField/TodoField";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';


class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item_list_length: 0,
            item_list: [],
            shouldRefresh: false
        }
        this.showTodos = this.showTodos.bind(this);
        this.onHandleNewTodo = this.onHandleNewTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
    }

    onHandleNewTodo(){
        (async () => {
            const rawResponse = await fetch('http://localhost:9000/api/new_todo ', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({d_todo_text: " "})
            });
            const content = await rawResponse.json();
            console.log(content);
        })();
        this.setState({
            shouldRefresh: true
        });
    }

    componentDidMount(){
        fetch("http://localhost:9000/api/access_todos")
            .then(fetch_result => fetch_result.json())
            .then(
                (result) => {
                    this.setState({
                        item_list_length: result.data.length,
                        item_list: result.data
                    });
                })
    }

    componentDidUpdate(prevProps) {

        if (this.state.shouldRefresh === true) {
            fetch("http://localhost:9000/api/access_todos")
                .then(fetch_result => fetch_result.json())
                .then(
                    (result) => {
                        this.setState({
                            item_list_length: result.data.length,
                            item_list: result.data,
                            shouldRefresh: false
                        });
                    })
            console.log("page refreshed")
        }
    }

    onDeleteTodo(todo_id){
        (async () => {
            const rawResponse = await fetch('http://localhost:9000/api/delete_todo/'+todo_id, {
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const content = await rawResponse.json();
            console.log(content);
        })();
    }

    showTodos(){
        console.log(this.state.item_list)
        let temp_arr = [];
        for(let i = 0; i < this.state.item_list.length; i++){
            temp_arr.push(<TodoField key={this.state.item_list[i].todo_id}
                                     item_id={this.state.item_list[i].todo_id}
                                     item_label={"task"}
                                     item_placeholder={"text"}
                                     item_value={this.state.item_list[i].todo_text}
                                     delete_fun={this.onDeleteTodo}
                                     />)
        }

        return temp_arr;
    }


    render(){
        return (
            <div>
                <div>
                    <AppBar color="primary" position="static">
                        <Typography align="center" color="initial" variant="h4">
                            Todo-App
                        </Typography>
                    </AppBar>
                </div>

                <div>
                    <Card>
                        <CardContent>
                            <Card raised={true}>
                                <CardHeader title="Task List"></CardHeader>
                                <Button variant="contained"
                                        color="primary"
                                        onClick={this.onHandleNewTodo}>New Todo</Button>
                                <Button variant="contained"
                                        color="primary"
                                        onClick={() => {this.setState({shouldRefresh: true})}}>
                                    Refresh</Button>
                            </Card>
                            {this.showTodos()}
                        </CardContent>
                    </Card>
                </div>

            </div>

        );
    }

}

export default MainScreen;
