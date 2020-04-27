import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

class TodoField extends React.Component{

    render(){
        return(
                <Card>
                    <CardContent>
                        <div>
                            <TextField
                                id="standard-textarea"
                                label="Task"
                                placeholder="todo..."
                                multiline
                                color="primary"
                            />
                        </div>
                        <div>
                            <Button variant="contained"
                                    color="secondary"
                                    size="small">
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>
        )

    }
}

export default TodoField;