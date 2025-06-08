import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // reload of page to be avoided when submitting the form

    if (!description.trim()) {
      return;
    }

    const newItem = {
      id: Date.now(), // unique ID based on current timestamp
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);
    setDescription(""); // Clear input field after submission
    setQuantity(1); // Reset quantity to 1 after submission
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
