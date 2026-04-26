
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";

export default function CategoryModal(props) {
  const [form, setForm] = useState({ name: "", budget: "" });

    useEffect(() => {
      if (props.show) {
        if (props.editingCategory) {
          setForm({
            name: props.editingCategory.name,
            budget: props.editingCategory.budget
          });
        } else {
          setForm({
            name: "",
            budget: ""
          });
        }
      }
    }, [props.show, props.editingCategory]);

    function handleSubmit() {
        const value = Number(form.budget);

        if (!form.name || isNaN(value) || value <= 0) return;

        props.onSave({
            ...props.editingCategory,
            id: props.editingCategory?.id || Date.now(),
            name: form.name,
            budget: Number(value.toFixed(2))
        });

        setForm({
          name: "",
          budget: ""
        });

        props.onHide();
    }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.editingCategory ? "Edit Category" : "Add Category"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control
          className="mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

      <CurrencyInput
        value={form.budget}
        onChange={(val) => setForm({ ...form, budget: val })}
      />
      </Modal.Body>

      <Modal.Footer>
        {props.editingCategory && (
          <Button
            variant="danger"
            onClick={() => {
              if (window.confirm("Delete this category? All associated transactions will also be deleted.")) {
                props.onDeleteCategory(props.editingCategory.id);
                props.onHide();
              }
            }}
          >
            Delete
          </Button>
        )}

        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}