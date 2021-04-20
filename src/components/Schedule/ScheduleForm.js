import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const ScheduleForm = (props) => {
    const teacher = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]
    const program = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]
    const fullName = `${props.firstName} ${props.lastName}`;
    return (
        <Form>
            <Form.Group widths='equal'>
            <Form.Field label='Преподаватель' control='select'>
        <option value={fullName}>{fullName}</option>
        <option value='Another'>Another</option>
      </Form.Field>
      <Form.Field label='Направление' control='select'>
        <option value={props.nameProgram}>{props.nameProgram}</option>
        <option value='Another'>Another</option>
      </Form.Field>
                {/* <Form.Field
                    control={Select}
                    options={teacher}
                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                    placeholder='Преподаватель'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                    value=
                />
                <Form.Field
                    control={Select}
                    options={program}
                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                    placeholder='Направление'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                    value={props.nameProgram}
                /> */}
            </Form.Group>
            {/* <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Opinion'
                placeholder='Opinion'
            /> */}
            {/* <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    /> */}
            {/* <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    /> */}
        </Form>
    );
}

export default ScheduleForm;
