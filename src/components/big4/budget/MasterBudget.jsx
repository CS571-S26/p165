import { useState } from "react";
import { Container, Button } from "react-bootstrap";

import { useBudgetData } from "./helpers/useBudgetData";
import CategoryList from "./helpers/CategoryList";
import TransactionModal from "./helpers/TransactionModal";
import CategoryModal from "./helpers/CategoryModal";

export default function MasterBudget() {
  const { categories, setCategories, transactions, setTransactions } = useBudgetData();

  const [mode, setMode] = useState("view");

  const [showTx, setShowTx] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [showCategory, setShowCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  function deleteCategory(id) {
    setCategories((prev) =>
      prev.filter((c) => c.id !== id)
    );

    setTransactions((prev) =>
      prev.filter((t) => t.categoryId !== id)
    );
  }

  function onAddTransaction(id) {
    setActiveCategoryId(id);
    setShowTx(true);
  }

  function onEditCategory(cat) {
    setEditingCategory(cat);
    setShowCategory(true);
  }

  return (
    <Container className="py-3">
      <h3>Budget</h3>

      <Button
        className="mb-3"
        onClick={() => setMode(mode === "view" ? "edit" : "view")}
        >
        Switch to {mode === "view" ? "Edit" : "View"}
      </Button>

        <div className="mt-4">
        {mode === "edit" && (
            <Button
            className="mb-2"
            onClick={() => {
                setEditingCategory(null);
                setShowCategory(true);
            }}
            >
            Add Category
            </Button>
        )}

        <CategoryList
          categories={categories}
          transactions={transactions}
          mode={mode}
          onAddTransaction={onAddTransaction}
          onEditCategory={onEditCategory}
          onDeleteCategory={deleteCategory}
        />
    </div>

      <TransactionModal
        show={showTx}
        categoryId={activeCategoryId}
        onHide={() => setShowTx(false)}
        onSave={(tx) => setTransactions((prev) => [...prev, tx])}
      />

      <CategoryModal
        show={showCategory}
        editingCategory={editingCategory}
        onHide={() => setShowCategory(false)}
        onSave={(cat) =>
          setCategories((prev) => {
            const safePrev = Array.isArray(prev) ? prev : [];
            const exists = safePrev.find((c) => c.id === cat.id);

            if (exists) {
              return safePrev.map((c) =>
                c.id === cat.id ? cat : c
              );
            }

            return [...safePrev, cat];
          })
        }
        onDeleteCategory={deleteCategory}
      />
    </Container>
  );
}