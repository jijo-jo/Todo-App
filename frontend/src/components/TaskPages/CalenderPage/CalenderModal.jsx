
import React, { useState } from "react";


const years = Array.from(new Array(10), (val, index) => 2021 + index);

const CalenderModal = ({ isOpen, months, onClose, onSubmit}) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl mb-4">Select Month and Year</h2>

        <div className="mb-4">
          <label className="block mb-2">Month</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Year</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onSubmit(selectedYear,selectedMonth)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalenderModal;
