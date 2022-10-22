import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button, Form, ToggleButton } from "react-bootstrap";

export default function SummaryForm() {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
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
