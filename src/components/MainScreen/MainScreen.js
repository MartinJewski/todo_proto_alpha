import React from 'react';
import TodoField from "../../components/TodoField/TodoField";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';



class MainScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div>
                <div>
                    <AppBar color="primary" position="static">
                        <Typography align="center" color="white" variant="h4">
                            Todo-App
                        </Typography>
                    </AppBar>
                </div>

                <div>
                    <Card>
                        <CardContent>
                            <Card raised="true">
                                <CardHeader title="Task List"></CardHeader>
                            </Card>
                            <TodoField></TodoField>
                        </CardContent>
                    </Card>
                </div>

            </div>

        );
    }

}

export default MainScreen;