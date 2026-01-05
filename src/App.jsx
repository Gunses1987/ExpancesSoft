
import React, { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    note: ""
  });

  const categories = [
    "სურსათი",
    "ხილ-ბოსტნეული",
    "ტკბილეული / სასუსნავი",
    "სიგარეტი",
    "სასმელი"
  ];

  const addExpense = () => {
    if (!form.date || !form.category || !form.amount) return;
    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ date: "", category: "", amount: "", note: "" });
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>ხარჯების მართვა</h1>

      <input type="date" value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })} /><br /><br />

      <select value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}>
        <option value="">კატეგორია</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select><br /><br />

      <input type="number" placeholder="თანხა ₾"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })} /><br /><br />

      <input placeholder="შენიშვნა"
        value={form.note}
        onChange={e => setForm({ ...form, note: e.target.value })} /><br /><br />

      <button onClick={addExpense}>დამატება</button>

      <ul>
        {expenses.map(e => (
          <li key={e.id}>
            {e.date} | {e.category} | {e.amount} ₾
          </li>
        ))}
      </ul>
    </div>
  );
}
