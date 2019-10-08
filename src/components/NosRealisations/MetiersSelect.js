import React from 'react';
import { Form } from 'semantic-ui-react';

// input basic du formulaire de contact : select (les options sont obligatoires)

const MetiersSelect = (props) => {

    const { control, label, placeholder, forwardValue, forwardMethod} = props

    const MetierOptions = [
        { key: '1', text: 'Bâtiment', value: 'batiment' },
        { key: '2', text: 'Ouvrages Publics', value: 'ouvrages_publics' },
        { key: '3', text: 'Réseaux Humides', value: 'reseaux_humides' },
        { key: '4', text: 'Réseaux Secs', value: 'reseaux_secs' },
      ]

    return (
        <Form.Field
            required
            control={control}
            label={label}
            type="select"
            placeholder={placeholder}
            options={MetierOptions}
            value={forwardValue}
            onChange={forwardMethod}
        />
    )
}

export default MetiersSelect