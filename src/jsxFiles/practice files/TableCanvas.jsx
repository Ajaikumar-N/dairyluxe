import React, { useEffect, useRef } from "react";

const TableCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Drawing the table grid
    const cellWidth = 100;
    const cellHeight = 50;
    const numRows = 5;
    const numCols = 5;

    ctx.beginPath();
    for (let i = 0; i <= numRows; i++) {
      ctx.moveTo(0, i * cellHeight);
      ctx.lineTo(numCols * cellWidth, i * cellHeight);
    }
    for (let j = 0; j <= numCols; j++) {
      ctx.moveTo(j * cellWidth, 0);
      ctx.lineTo(j * cellWidth, numRows * cellHeight);
    }
    ctx.stroke();

    // Populating the table with data
    const data = [
      ["A1", "B1", "C1", "D1", "E1"],
      ["A2", "B2", "C2", "D2", "E2"],
      ["A3", "B3", "C3", "D3", "E3"],
      ["A4", "B4", "C4", "D4", "E4"],
      ["A5", "B5", "C5", "D5", "E5"],
    ];

    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const text = data[row][col];
        const x = col * cellWidth + cellWidth / 2;
        const y = row * cellHeight + cellHeight / 2;
        ctx.fillText(text, x, y);
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={500} height={250} />;
};

export default TableCanvas;
