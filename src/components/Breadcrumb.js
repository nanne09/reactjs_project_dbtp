import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from "react-router-dom";



const BreadcrumbMetier = ({forwardValue}) => {
    // console.log(forwardValue)
    
    const sections = [
        { content: 'Accueil', link: "/", active: false },
        { content: 'Nos Métiers', link: "/metiers", active: false },
        { content: forwardValue , link: "/metiers", active: true },
      ]

    return (
        <>
            { Object.values(sections).map((data, i) => 
                <Breadcrumb key={i}>
                    <Link to={data.link}>
                        <Breadcrumb.Section active={data.active}>{data.content}</Breadcrumb.Section>
                    </Link>
                    <Breadcrumb.Divider>/</Breadcrumb.Divider>
                </Breadcrumb>
            )}
        </>
    )
}

export default BreadcrumbMetier
