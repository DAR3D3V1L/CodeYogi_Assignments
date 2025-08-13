import { useState } from 'react';

function Table() {
  const [num, setNum] = useState(2);
  function nextTable() {
    setNum(num+1);
  }

  return (
    <div className="text-2xl text-indigo-500 font-bold">
      <button className="bg-indigo-600 text-white p-2 rounded-md" onClick={nextTable}>Next</button>
      <p>{num} x 1 = {num * 1}</p>
      <p>{num} x 2 = {num * 2}</p>
      <p>{num} x 3 = {num * 3}</p>
      <p>{num} x 4 = {num * 4}</p>
      <p>{num} x 5 = {num * 5}</p>
    </div>
  );
}

export default Table;