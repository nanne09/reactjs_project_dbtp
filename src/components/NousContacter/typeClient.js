import React from 'react';
import { Grid, Icon, Container, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const TypeClient = (props) => {
    const {id, iconName, forwardMethod, active} = props
    return (
    <>
        <Grid.Column>
            <Button 
                icon
                circular
                color='red'
                inverted
                size='large'
                onClick={forwardMethod}
                active={
                    id === active ?
                    true :
                    false
                }
            >
                <Icon name={iconName}/>
            </Button>
            <Container textAlign='center'>{id}</Container>
        </Grid.Column>
    </>
    )
}

export default withRouter(TypeClient)

