import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Reservations from "./Reservations";
import dayjs from "dayjs";

describe("Reservations page", () => {
  test("renders inline errors", () => {
    render(<Reservations />);

    const guestsSelect = screen.getByLabelText(/Number of Guests/i);

    fireEvent.focus(guestsSelect);
    fireEvent.blur(guestsSelect);

    const errorMessage = screen.getByText(/Required field/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("disables buttons on error", () => {
    render(<Reservations />);

    const nextButton = screen.getByText(/Next/i);

    const guestsSelect = screen.getByLabelText(/Number of Guests/i);

    fireEvent.focus(guestsSelect);
    fireEvent.blur(guestsSelect);

    expect(nextButton).toHaveAttribute("disabled");
  });

  test("lets diners book reservations", async () => {
    render(<Reservations />);
    const nextButton = screen.getByText(/Next/i);
    const today = new dayjs();

    fireEvent.mouseDown(screen.getByLabelText(/Number of Guests/i));
    fireEvent.click(within(screen.getByRole("listbox")).getByText(/2/i));

    fireEvent.change(screen.getByLabelText(/Date \*/i), {
      target: { value: today.format("MM/DD/YYYY") },
    });
    fireEvent.change(screen.getByPlaceholderText("hh:mm aa"), {
      target: { value: "11:00 AM" },
    });

    fireEvent.click(nextButton);

    fireEvent.change(screen.getByLabelText(/Full Name \*/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email \*/i), {
      target: { value: "jdoe@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone \*/i), {
      target: { value: "2969931230" },
    });

    fireEvent.click(nextButton);
    expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
  });
});
