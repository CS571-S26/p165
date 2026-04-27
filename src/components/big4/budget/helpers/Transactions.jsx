import { ListGroup, Button } from "react-bootstrap";

export default function Transactions(props) {
  function getCategoryName(id) {
    const cat = props.categories.find((c) => c.id === id);
    return cat ? cat.name : "Unknown";
  }

  return (
    <ListGroup>
      {props.transactions.length === 0 && (
        <ListGroup.Item>No transactions yet</ListGroup.Item>
      )}

      {[...props.transactions].reverse().map((t) => (
        <ListGroup.Item
          key={t.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <div>
              ${t.amount.toFixed(2)} — {getCategoryName(t.categoryId)}
            </div>
            <div>
              {t.note || "No note"} •{" "}
              {new Date(t.date).toLocaleDateString()}
            </div>
          </div>

          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              if (window.confirm("Undo this transaction?")) {
                props.onDeleteTransaction(t.id);
              }
            }}
          >
            Undo
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}