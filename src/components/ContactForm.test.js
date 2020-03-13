import React from 'react';
import { render, fireEvent, waitForElement, wait, getByTestId } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders component', () => { render(<ContactForm />) });

test('gets elements from form', () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name*/i);
    getByLabelText(/last name*/i);
    getByLabelText(/email*/i);
    getByLabelText(/message*/i);
})

test('checks if elements exist', () => {
    const { getByLabelText } = render(<ContactForm />);

    const fNameInput = getByLabelText(/first name*/i);
    const lNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message*/i); 

    expect(fNameInput).toBeInTheDocument();
    expect(lNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
})

test('fills out form and submits it', async () => {
    const { getByLabelText, getByTestId, findAllByText  } = render(<ContactForm />);

    const fNameInput = getByLabelText(/first name*/i);
    const lNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message*/i);

    fireEvent.change(fNameInput, {
        target: { name: 'firstName', value: 'Fndsd' }
    });
    fireEvent.change(lNameInput, {
        target: { name: 'lastName', value: 'Bezerra' }
    });
    fireEvent.change(emailInput, {
        target: { name: 'email', value: 'fabricio.spb@gmail.com' }
    });
    fireEvent.change(messageInput, {
        target: { name: 'message', value: 'fassdoi sdf oisdfoi asf[p9usfo aijdsf23234 w 25?..,a1232f ' }
    });

    fireEvent.click(getByTestId('submitButton'));

    let errors = [];
    try {
        errors = await findAllByText(/error/i);
    } catch(err) { // It means findAllByText('error') didn't find anything
        console.log('no errors')
    } 
    if (errors.length > 0) {
        throw 'There was an error in one of the inputs values'
    }
    
    

})