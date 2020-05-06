import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import styles from "./TodoField.module.css"

class TodoField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item_id:this.props.item_id,
            item_label: this.props.item_label,
            item_placeholder: this.props.item_placeholder,
            item_value: this.props.item_value,
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSave = this.onHandleSave.bind(this)
    }

    onHandleChange(event){
        if(this.state.item_value === null){
            console.log("set item value")
            this.setState({
                item_value: ""
            })
        }else{
            this.setState({
                item_value: event.target.value
            })
            console.log("todo item value: " + this.state.item_value)
        }
    }

    onHandleSave(event){
        (async () => {
            const rawResponse = await fetch('http://localhost:9000/api/update_todo/'
                + this.state.item_id, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({d_todo_text: this.state.item_value}),
            });
            const content = await rawResponse.json();
            console.log("content saved");
            console.log(content);
        })();
    }

    render(){
        return(
                <Card className={styles.myMui}>
                    <CardContent className={styles.flex_start}>
                        <div className={styles.left_box}>
                            <TextField
                                id={this.state.item_label + "_" + this.state.item_id.toString()}
                                label={this.state.item_label + " " + this.state.item_id.toString()}
                                placeholder={this.state.item_placeholder}
                                multiline
                                color="primary"
                                onChange={this.onHandleChange}
                                value={this.state.item_value}
                                rows={2}
                                labelWidth={60}
                                className={styles.Field_Look}
                            />
                        </div>
                        <div className={styles.right_box}>
                            <Button variant="contained"
                                    color="secondary"
                                    size="small"
                                    onClick={() => this.props.delete_fun(this.state.item_id)}>
                                Delete
                            </Button>
                            <Button variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={this.onHandleSave}>
                                Save
                            </Button>
                        </div>
                    </CardContent>
                </Card>
        )

    }
}

export default TodoField;
