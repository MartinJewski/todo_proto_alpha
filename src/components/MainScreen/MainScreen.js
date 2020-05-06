import React from 'react';
import TodoField from "../../components/TodoField/TodoField";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';


import styles from "./MainScreen.module.css"



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
        this.onSaveClick = this.onSaveClick.bind(this);
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

    onSaveClick(isClicked){
        this.setState({shouldRefresh: isClicked})
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
            this.onSaveClick(true);
            console.log("content after delete");
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
                                     save_fun={this.onSaveClick}
                                     />)
        }

        return temp_arr;
    }


    render(){
        return (
            <main>
                <div className={styles.MidContent}>
                    <div className={styles.navigation}>
                        <Typography className={styles.title} variant={"h2"}> Todo-List </Typography>
                        <div className={styles.titleButtons}>
                            <div className={styles.buttonsStyle}>
                                <Button variant="contained"
                                        color="primary"
                                        onClick={this.onHandleNewTodo} >New Todo</Button>
                            </div>
                            <div className={styles.buttonsStyle}>
                                <Button variant="contained"
                                        color="primary"
                                        onClick={() => {this.setState({shouldRefresh: true})}}>
                                    Refresh
                                </Button>
                            </div>
                        </div>
                    </div>
                    {this.showTodos()}
                </div>
            </main>
        );
    }

}

export default MainScreen;
