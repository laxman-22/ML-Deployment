'use client';
import { useState } from 'react';

export default function Home() {
  const [passengerClass, setPassengerClass] = useState('1');
  const [age, setAge] = useState('20');
  const [gender, setGender] = useState('male');

  const handlePassengerClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPassengerClass(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      pclass: passengerClass,
      sex: gender,
      age: age
    };

    try {
      const response = await fetch('http://4.248.15.105/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'cors',
        credentials: 'same-origin',
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
      } else {
        alert("Failed to Submit Data")
      }
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <h1 className="block font-bold text-2xl text-center flex-col text-white-700 mb-2">Titanic Passenger Survivor Prediction</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-col gap-8">
              {/* Dropdowns Section */}
            <div className="flex flex-row gap-4">
              {/* Dropdown 1 */}
              <div className="w-full">
                <label htmlFor="dropdown1" className="block text-white-700 mb-2">Passenger Class</label>
                <select id="dropdown1" value={passengerClass} onChange={handlePassengerClassChange} className="cursor-pointer block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* Dropdown 2 */}
              <div className="w-full">
                <label htmlFor="dropdown2" className="block text-white-700 mb-2">Sex</label>
                <select id="dropdown2" value={gender} onChange={handleGenderChange} className="cursor-pointer block w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Numerical Input Box */}
              <div className="w-full">
                <label htmlFor="numberInput" className="cursor-pointer block text-white-700 mb-2">Age</label>
                <input
                  type="number"
                  value={age} 
                  onChange={handleAgeChange}
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
        </form>
      </main>
    </div>
  );
}
