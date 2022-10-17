import React, { useState } from "react";
import { Button, Form, ToggleButton } from "react-bootstrap";

export default function SummaryForm() {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          label={checkboxLabel}
          type="checkbox"
          checked={checkBoxStatus}
          onChange={(e) => setCheckBoxStatus(e.currentTarget.checked)}
        />
      </Form.Group>

      <Button disabled={!checkBoxStatus} variant="primary" type="submit">
        Confirm Order
      </Button>
    </Form>
  );
}
