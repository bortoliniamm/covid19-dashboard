import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';

export default function CountryTextInput({filter}) {

    const handleFilterInput = (event) => {
        filter(event.target.value)
    }

    return (
        <div>
        <Form>
            <FormGroup>
                <Input type="text" name="text" id="text" placeholder="Search" onChange={handleFilterInput}/>
            </FormGroup>
        </Form>
        </div>
    )
}
