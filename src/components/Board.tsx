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
    <div className='grid grid-flow-row md:gap-4 gap-2'>
      {mat.map((data, i) => {
        return (
          <div key={i} className='grid grid-flow-col md:gap-4 gap-2'>
            {data.map((data, j) => (
              <div className='relative group' key={j}>
                <button
                  className='border z-0 bg-red-200 w-full text-black hover:scale-105 transition-all flex cursor-pointer justify-center text-center border-gray-700 rounded-lg p-10'
                  onClick={() => {
                    handleClick(i, j);
                  }}
                >
                  <h1 className='font-black text-lg md:text-3xl'>{data}</h1>
                </button>

                <div className='absolute inset-0 md:inset-10 z-50 invisible group-hover:visible'>
                  <div className='flex h-full flex-col md:flex-row justify-between'>
                    <h1 className='p-3 self-center rounded-2xl backdrop-blur-md bg-white/30 hover:scale-105 transition-all cursor-pointer'>
                      High
                    </h1>

                    <h1 className='p-3 self-center rounded-2xl backdrop-blur-md bg-white/30 hover:scale-105 transition-all cursor-pointer'>
                      Low
                    </h1>
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
