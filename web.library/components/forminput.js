import React from 'react'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'

export const TextInput = props => (
	<Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type="text" required={props.required} placeholder={props.placeholder ? props.placeholder : props.label} />
        <Form.Text>{props.text}</Form.Text>
    </Form.Group>
	)

export const TextareaInput = props => (
	<Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control as="textarea" required={props.required} placeholder={props.placeholder ? props.placeholder : props.label} />
    </Form.Group>
	)

export const SelectInput = props => (
        <Form.Group controlId={props.name}>
            <Form.Label className="col-form-label">{props.label}</Form.Label>
        	<Select name={props.multiple ? props.name + "[]" : props.name} isMulti={props.multiple} options={props.items} value={props.selected} id={props.name} className="form-control-chosen"/>
        </Form.Group>
)

export const FileInput = props => (
    <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type="file" required={props.required} />
        <Form.Text>{props.text}</Form.Text>
    </Form.Group>
    )