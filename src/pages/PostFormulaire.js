import React from 'react'
import { Icon, Container} from 'semantic-ui-react'

const PostFormulaire = () => {
    return (
        <>
            <Container textAlign='center'>
                <Icon name='envelope outline' size='huge' color='red'/>
                <Icon name='envelope' size='huge' color='red'/>
            </Container>
            <Container textAlign='center'>
                MERCI !!!
            </Container>
            <Container textAlign='center'>
                Merci, votre message a bien été envoyé.
            </Container>
        </>
    )
}

export default PostFormulaire