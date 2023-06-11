"use client";

import { useEffect, useState } from "react";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Board() {
  const [mat, setMat] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);

  const handleWin = (prev: number, next: number, guess: string) => {
    if (guess === "high") {
      if (next > prev) {
        alert("You Win !");
      } else {
        alert("You Lose..");
      }
    }

    if (guess === "low") {
      if (next < prev) {
        alert("You Win !");
      } else {
        alert("You Lose..");
      }
    }
  };

  const handleClick = (r: number, c: number, guess: string) => {
    let random = getRandomInt(13);

    if (random == 0) {
      random++;
    }

    let tmp = [...mat];

    if (random === tmp[r][c]) {
      random++;
    }
    const prev = tmp[r][c];
    const next = random;

    handleWin(prev, next, guess);

    tmp[r][c] = random;

    setMat(tmp);
  };

  return (
    <div className='grid grid-flow-row md:gap-4 gap-2'>
      {mat.map((data, i) => {
        return (
          <div key={i} className='grid grid-flow-col md:gap-4 gap-2'>
            {data.map((data, j) => (
              <div className='relative group' key={j}>
                <button className='border z-0 bg-red-200 w-full text-black hover:scale-105 transition-all flex cursor-pointer justify-center text-center border-gray-700 rounded-lg p-10'>
                  <h1 className='font-black text-lg md:text-3xl'>{data}</h1>
                </button>

                <div className='absolute inset-0 md:inset-10 z-50 invisible group-hover:visible'>
                  <div className='flex h-full flex-col md:flex-row justify-between'>
                    <button
                      onClick={() => {
                        handleClick(i, j, "high");
                      }}
                      className='p-3 self-center rounded-2xl backdrop-blur-md bg-white/30 hover:scale-105 transition-all cursor-pointer'
                    >
                      High
                    </button>

                    <button
                      onClick={() => {
                        handleClick(i, j, "low");
                      }}
                      className='p-3 self-center rounded-2xl backdrop-blur-md bg-white/30 hover:scale-105 transition-all cursor-pointer'
                    >
                      Low
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
