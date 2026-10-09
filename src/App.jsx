



import { useState, useTransition } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      setNumber(number + 1);
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Number: {number}
        </h1>

        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Increase
        </button>

        {isPending && (
          <p className="text-orange-500 mt-4">
            Updating...
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

