import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";

const LETTERS = "0123456789ABCDEF";
const LOCAL_STORAGE_KEY = "app-squares";

const getRandomColor = (): string => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 16)]; // TODO
  }
  return color;
};

const App: React.FC = () => {
  const [colors] = useState<string[]>([
    ...Array(4).fill("").map(getRandomColor),
  ]);

  const [squares, setSquares] = useState<any[]>(
    localStorage.getItem(LOCAL_STORAGE_KEY)?.split(",") || [...Array(10)]
  );

  const stackColor = useCallback(
    (color: string) => {
      setSquares([color, ...squares.slice(0, squares.length - 1)]);
    },
    [squares, setSquares]
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, squares as any);
  }, [squares]);

  return (
    <div className="app">
      {colors.map((color, index) => (
        <div className="clickable-boxes" key={index}>
          <button
            style={{ backgroundColor: color }}
            onClick={() => stackColor(color)}
          >
            Click me: {color}
          </button>
        </div>
      ))}
      {squares.map((color, i) => (
        <div className="square" style={{ backgroundColor: color }} key={i}>
          <span>*</span>
        </div>
      ))}
    </div>
  );
};

export default App;
