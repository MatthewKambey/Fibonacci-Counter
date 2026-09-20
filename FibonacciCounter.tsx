import { useState } from 'react';
import './App.css';

function FibonacciCounter() {
  const [current, setCurrent] = useState<number>(0);
  const [next, setNext] = useState<number>(1);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleNextFibonacci = () => {
    if (clickCount === 0) {
      setCurrent(1);
      setNext(1);
    } else {
      const newNext = current + next;
      setCurrent(next);
      setNext(newNext);
    }
    setClickCount(clickCount + 1);
  };

  const handleReset = () => {
    setCurrent(0);
    setNext(1);
    setClickCount(0);
  };

  return (
    <div className="fibo-card">
      <div className="fibo-badge">React + TypeScript</div>
      <h2 className="fibo-title">Fibonacci Counter</h2>
      
      <div className="fibo-display">
        <span className="fibo-number">{current}</span>
        <p className="fibo-click-info">
          {clickCount === 0 ? 'Klik tombol untuk mulai' : `Klik Ke-${clickCount}`}
        </p>
      </div>

      <div className="fibo-actions">
        <button className="btn btn-primary" onClick={handleNextFibonacci}>
          Next Sequence ✨
        </button>
        
        {clickCount > 0 && (
          <button className="btn btn-danger" onClick={handleReset}>
            Reset 🔄
          </button>
        )}
      </div>
    </div>
  );
}

export default FibonacciCounter;