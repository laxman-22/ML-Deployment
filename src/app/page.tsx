// import { useState } from 'react';

export default function Home() {
  // const [inputVal, setInputVal] = useState('');
  // const [inputVal, setInputVal] = useState('');
  // const [inputVal, setInputVal] = useState('');


  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white">Titanic Passenger Survivor Prediction</h1>
        <div className="flex flex-col gap-8">
            {/* Dropdowns Section */}
          <div className="flex flex-row gap-4">
            {/* Dropdown 1 */}
            <div className="w-full">
              <label htmlFor="dropdown1" className="block text-white-700 mb-2">Passenger Class</label>
              <select id="dropdown1" className="cursor-pointer block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="Option 1">1</option>
                <option value="Option 2">2</option>
                <option value="Option 3">3</option>
              </select>
            </div>

            {/* Dropdown 2 */}
            <div className="w-full">
              <label htmlFor="dropdown2" className="block text-white-700 mb-2">Sex</label>
              <select id="dropdown2" className="cursor-pointer block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="Option A">Male</option>
                <option value="Option B">Female</option>
              </select>
            </div>

            {/* Numerical Input Box */}
            <div className="w-full">
              <label htmlFor="numberInput" className="cursor-pointer block text-white-700 mb-2">Age</label>
              <input
                type="number"
                id="numberInput"
                className="text-black block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a number"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-0 inline-flex"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
