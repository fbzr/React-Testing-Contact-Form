import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders component', () => { render(<ContactForm />) });

test('gets elements from form', () => {
    const dom = render(<ContactForm />);

    const fNameInput = dom.getByLabelText(/first name*/i);
    const lNameInput = dom.getByLabelText(/last name*/i);
    const emailInput = dom.getByLabelText(/email*/i);
    const messageInput = dom.getByLabelText(/message*/i);
})