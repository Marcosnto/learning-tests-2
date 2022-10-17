import React, { useState } from "react";
import { Button, ToggleButton } from "react-bootstrap";

export default function SummaryForm() {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  return (
    <div>
      <label htmlFor="checkbox-accept-terms">
        I agree to Terms and Conditions
      </label>
      <ToggleButton
        id="checkbox-accept-terms"
        type="checkbox"
        checked={checkBoxStatus}
        onChange={(e) => setCheckBoxStatus(e.currentTarget.checked)}
      />
      <Button disabled={!checkBoxStatus} variant="primary">
        Submit Request
      </Button>
    </div>
  );
}
