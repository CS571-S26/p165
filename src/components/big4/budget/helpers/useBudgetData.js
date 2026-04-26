import { useEffect, useState } from "react";

export function useBudgetData() {
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      const savedCategories = JSON.parse(localStorage.getItem("categories"));
      const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

      setCategories(Array.isArray(savedCategories) ? savedCategories : []);
      setTransactions(Array.isArray(savedTransactions) ? savedTransactions : []);
    } catch (err) {
      console.error("Error parsing localStorage:", err);

      setCategories([]);
      setTransactions([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return {
    categories,
    setCategories,
    transactions,
    setTransactions
  };
}