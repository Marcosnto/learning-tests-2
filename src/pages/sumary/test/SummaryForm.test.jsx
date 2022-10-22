import { render, logRoles, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("checkbox", () => {
  test("should be unchecked by default", () => {
    const { container } = render(<SummaryForm />);

    logRoles(container);

    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();
  });

  test("should enable the button", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const submitRequest = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(submitRequest).toBeDisabled();

    await user.click(checkbox);
    expect(submitRequest).toBeEnabled();
  });

  test("should disable the button", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });

    const submitRequest = screen.getByRole("button", {
      name: /confirm order/i,
    });

    await user.click(checkbox);
    expect(submitRequest).toBeEnabled();

    await user.click(checkbox);
    expect(submitRequest).toBeDisabled();
  });
});

describe("popover ", () => {
  test("responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
