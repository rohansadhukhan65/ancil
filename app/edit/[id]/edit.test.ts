import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Edit from './page';

describe('UserForm Component', () => {
  test('renders the form with all fields', () => {
    render(<Edit />);

    expect(screen.getByLabelText(/Picture URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postcode/i)).toBeInTheDocument();
  });

  test('updates form values on input change', () => {
    render(<UserForm />);

    fireEvent.change(screen.getByLabelText(/Picture URL/i), { target: { value: 'https://example.com/picture.jpg' } });
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'Male' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: 30 } });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '1991-01-01' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123-456-7890' } });
    fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: 'USA' } });
    fireEvent.change(screen.getByLabelText(/Postcode/i), { target: { value: '10001' } });

    expect(screen.getByLabelText(/Picture URL/i).value).toBe('https://example.com/picture.jpg');
    expect(screen.getByLabelText(/Name/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Gender/i).value).toBe('Male');
    expect(screen.getByLabelText(/Email/i).value).toBe('john.doe@example.com');
    expect(screen.getByLabelText(/Age/i).value).toBe('30');
    expect(screen.getByLabelText(/Date of Birth/i).value).toBe('1991-01-01');
    expect(screen.getByLabelText(/Phone/i).value).toBe('123-456-7890');
    expect(screen.getByLabelText(/Street/i).value).toBe('123 Main St');
    expect(screen.getByLabelText(/City/i).value).toBe('New York');
    expect(screen.getByLabelText(/State/i).value).toBe('NY');
    expect(screen.getByLabelText(/Country/i).value).toBe('USA');
    expect(screen.getByLabelText(/Postcode/i).value).toBe('10001');
  });

  test('submits the form', () => {
    render(<UserForm />);

    fireEvent.change(screen.getByLabelText(/Picture URL/i), { target: { value: 'https://example.com/picture.jpg' } });
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'Male' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: 30 } });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: '1991-01-01' } });
    fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123-456-7890' } });
    fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
    fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: 'USA' } });
    fireEvent.change(screen.getByLabelText(/Postcode/i), { target: { value: '10001' } });

    fireEvent.click(screen.getByText(/Submit/i));

    // Handle form submission logic verification here
    // For example, mock the form submission function and check if it's called with correct data
  });
});
