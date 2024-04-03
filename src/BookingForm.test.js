import { render, fireEvent, screen } from "@testing-library/react";
import App from './App';

test('Renders the BookingForm element', () => {

    render(<App />);
    const btn = screen.getByTestId("reserve_a_table");
    // click the btn 

    fireEvent.click(btn);

    const dateElement = screen.getByText("Select Date:");
    expect(dateElement).toBeInTheDocument();
})