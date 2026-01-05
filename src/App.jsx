
import { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ date: "", category: "", amount: "", note: "" });

  const categories = ["სურსათი","ხილ-ბოსტნეული","ტკბილეული / სასუსნავი","სიგარეტი","სასმელი"];

  const add = () => {
    if (!form.date || !form.category || !form.amount) return;
    setExpenses([...expenses, { ...form, id: Date.now() }]);
    setForm({ date: "", category: "", amount: "", note: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ხარჯების მართვა</h1>

      <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} /><br/>
      <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>
        <option value="">კატეგორია</option>
        {categories.map(c=><option key={c}>{c}</option>)}
      </select><br/>
      <input placeholder="თანხა" type="number" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})}/><br/>
      <input placeholder="შენიშვნა" value={form.note} onChange={e=>setForm({...form,note:e.target.value})}/><br/>
      <button onClick={add}>დამატება</button>

      <ul>
        {expenses.map(e=><li key={e.id}>{e.date} | {e.category} | {e.amount} ₾</li>)}
      </ul>
    </div>
  );
}
