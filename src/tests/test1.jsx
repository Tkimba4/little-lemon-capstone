// BookingForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('affiche le formulaire de réservation', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);

  const nameLabel = screen.getByLabelText(/name/i);
  expect(nameLabel).toBeInTheDocument();
});
