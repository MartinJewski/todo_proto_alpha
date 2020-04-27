import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import Button from '@material-ui/core/Button';

class PermanentDrawer extends React.Component{

    render(){
        return(
            <Drawer anchor="left" variant="permanent">
                <Button>
                    Hello1
                </Button>

            </Drawer>
        )
    }

}

export default PermanentDrawer;