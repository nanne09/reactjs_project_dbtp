import React, { Component } from 'react'
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import { ValidateInput } from '../../components/NousContacter/validateInput'

export class FormFabio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			phone: '',
			validateForm: {
				email: {
					valid: false,
					error: null
				},
				phone: {
					valid: false,
					error: null
				}
			}
		}
	}

	handleChange = (field, event) => {
		this.setState({
			[field]: event.target.value
		})
	}

	handleBlur = (field) => {
		const isValidField = ValidateInput(field, this.state[field])
		this.setState(prevstate => {
			return {
				validateForm: {
					...prevstate.validateForm,
					[field]: isValidField
				}
			}
		})
	}

	render() {
		return (
			<Form>
			<Form.Group widths='equal'>
				<Form.Field
					control={Input}
					type="email"
					label='Email'
					placeholder='Email'
					value={this.state.email}
					onChange={(e) => this.handleChange('email', e)}
					onBlur={() => this.handleBlur('email')}
					error={this.state.validateForm.email.error}
				/>
				<Form.Field
					control={Input}
					type="phone"
					label='Phone'
					placeholder='Phone'
					value={this.state.phone}
					onChange={(e) => this.handleChange('phone', e)}
					onBlur={() => this.handleBlur('phone')}
					error={this.state.validateForm.phone.error}
				/>
			</Form.Group>
			<Form.Field
				control={Checkbox}
				label='I agree to the Terms and Conditions'
			/>
			<Form.Field control={Button}>Submit</Form.Field>
		</Form>
		)
	}
}

export default FormFabio
