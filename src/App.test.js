
import { render, screen } from "@testing-library/react";
import BookingForm from './Components/reservePages/BookingForm';
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("BookingForm");
    expect(headingElement).toBeInTheDocument();
})