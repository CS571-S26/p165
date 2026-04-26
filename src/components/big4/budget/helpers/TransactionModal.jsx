import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";

export default function TransactionModal(props) {
  const [form, setForm] = useState({ amount: "", date: "", note: "" });

  useEffect(() => {
    if (props.how) {
      setForm({
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        note: ""
      });
    }
  }, [props.show]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onSave({
      id: Date.now(),
      amount: Number(form.amount),
      date: form.date,
      note: form.note,
      categoryId: props.categoryId
    });

      setForm({
        amount: "",
        date: "",
        note: ""
      });

    props.onHide();
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Transaction</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <CurrencyInput
            value={form.amount}
            onChange={(val) => setForm({ ...form, amount: val })}
          />

          <Form.Control
            className="mb-2"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <Form.Control
            placeholder="Note"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
