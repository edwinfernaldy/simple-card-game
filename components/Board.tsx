"use-client";

export default function Board() {
  const matrix = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ];

  return (
    <div className='grid grid-flow-row gap-4'>
      {matrix.map((data, i) => {
        return (
          <div key={i} className='grid grid-flow-col gap-4'>
            {data.map((data, i) => {
              return (
                <div
                  className='border flex cursor-pointer flex-col justify-center text-center border-gray-700 rounded-lg p-4'
                  key={i}
                >
                  {data}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
