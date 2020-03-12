import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders component', () => { render(<ContactForm />) });

test('gets elements from form', () => {
    const dom = render(<ContactForm />);

    const emailInput = dom.getByLabelText(/email*/i);
})