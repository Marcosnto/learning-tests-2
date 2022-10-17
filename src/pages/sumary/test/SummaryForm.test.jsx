import { fireEvent, render, logRoles, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("checkbox", () => {
  test("should be unchecked by default", () => {
    const { container } = render(<SummaryForm />);

    logRoles(container);

    const checkbox = screen.getByRole("checkbox", {
      name: /Accept terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();
  });

  test("should enable the button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Accept terms and conditions/i,
    });

    const submitRequest = screen.getByRole("button", {
      name: /Submit Request/i,
    });

    expect(submitRequest).toBeDisabled();

    fireEvent.click(checkbox);

    expect(submitRequest).toBeEnabled();
  });

  test("should disable the button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Accept terms and conditions/i,
    });

    const submitRequest = screen.getByRole("button", {
      name: /Submit Request/i,
    });

    fireEvent.click(checkbox);

    expect(submitRequest).toBeEnabled();

    fireEvent.click(checkbox);

    expect(submitRequest).toBeDisabled();
  });
});
