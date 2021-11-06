import React, { useState } from "react";
import Counters from "./component/counters";
import NavBar from "./component/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };
  const handleIncrement = (counterId) => {
    const counterIncrement = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(counterIncrement);
  };
  const handleDecrement = (counterId) => {
    const counterDecrement = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(counterDecrement);
  };
  const handleReset = () => setCounters(initialState);
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
