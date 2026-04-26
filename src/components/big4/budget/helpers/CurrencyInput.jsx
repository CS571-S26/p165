import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function CurrencyInput(props) {
  const [cents, setCents] = useState(0);

  useEffect(() => {
    if (props.value !== undefined && props.value !== null) {
      setCents(Math.round(Number(props.value) * 100));
    }
  }, [props.value]);

  function handleKeyDown(e) {
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();

      const digit = Number(e.key);
      const newCents = cents * 10 + digit;

      setCents(newCents);
      props.onChange(newCents / 100);
    }

    if (e.key === "Backspace") {
      e.preventDefault();

      const newCents = Math.floor(cents / 10);

      setCents(newCents);
      props.onChange(newCents / 100);
    }
  }

  return (
    <Form.Control
      value={(cents / 100).toFixed(2)}
      onKeyDown={handleKeyDown}
      placeholder="0.00"
      readOnly
      inputMode="numeric"
    />
  );
}