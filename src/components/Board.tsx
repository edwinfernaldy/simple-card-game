"use client";

import { useState } from "react";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Board() {
  const [mat, setMat] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  const handleClick = (r: number, c: number) => {
    let random = getRandomInt(13);

    if (random == 0) {
      random++;
    }

    let tmp = [...mat];
    tmp[r][c] = random;

    setMat(tmp);
  };

  return (
    <div className='grid grid-flow-row gap-4'>
      {mat.map((data, i) => {
        return (
          <div key={i} className='grid grid-flow-col gap-4'>
            {data.map((data, j) => (
              <button
                className='border bg-red-200 text-black hover:scale-105 transition-all flex cursor-pointer justify-center text-center border-gray-700 rounded-lg p-10'
                key={j}
                onClick={() => {
                  handleClick(i, j);
                }}
              >
                {data}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
