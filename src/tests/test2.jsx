import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

test('le bouton de soumission est désactivé si le formulaire est vide', async () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
  
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});
