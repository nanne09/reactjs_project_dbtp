import React from 'react';
import { Card } from 'semantic-ui-react';

const TypeMetier = (props) => {
    const { image, header, desc, alt } = props.data
    const { forwardMethod } = props
    return (
        <Card
            image={image}
            alt={alt}
            header={header}
            description={desc}
            onClick={forwardMethod}
        /> 
    )
}

export default TypeMetier