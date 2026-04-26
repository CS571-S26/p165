export function getSpentThisMonth(transactions, categoryId) {
  const now = new Date();

  return transactions
    .filter((t) => {
      const d = new Date(t.date);
      return (
        t.categoryId === categoryId &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    })
    .reduce((sum, t) => sum + t.amount, 0);
}