import { ListGroup, Button } from "react-bootstrap";
import { getSpentThisMonth } from "./budget";

export default function CategoryList(props) {
  if (!Array.isArray(props.categories)) {
    return <div>Invalid category data</div>;
  }

  return (
    <ListGroup>
      {props.categories.map((cat) => {
        const spent = getSpentThisMonth(props.transactions, cat.id);

        return (
          <ListGroup.Item
            key={cat.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              {cat.name} — {spent} / {cat.budget}
            </div>

            {props.mode === "view" ? (
              <Button size="sm" onClick={() => props.onAddTransaction(cat.id)}>
                Add
              </Button>
            ) : (
              <div className="d-flex gap-2">
                <Button size="sm" onClick={() => props.onEditCategory(cat)}>
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    if (window.confirm("Delete this category? All associated transactions will also be deleted.")) {
                      props.onDeleteCategory(cat.id);
                    }
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}