import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Item List Manager</h1>
        
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter item"
          />
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Add Item
          </button>
        </div>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
              <span className="text-lg text-gray-700">{item}</span>
              <button
                onClick={() => setItems(items.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
