"use client";

import React, { useState } from "react";

export default function AddQuestionPage() {
  const [anonymous, setAnonymous] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
      <div className="bg-white border border-gray-300 w-full max-w-2xl rounded shadow p-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4">Add Question</h2>
        <hr className="mb-4" />

        {/* Info Box */}
        <div className="bg-blue-100 text-sm text-gray-800 p-4 mb-6 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">
            📘 We Value Your Question
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Please confirm your question does not match with suggestions
            </li>
            <li>Keep your question short and to the point</li>
            <li>Begin your question with How/What/When/Where</li>
          </ul>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Question Title */}
          <div>
            <input
              type="text"
              placeholder="Question Title*"
              required
              className="w-full border border-gray-300 p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Category */}
          <div>
            <select
              required
              className="w-full border border-gray-300 p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="">Category*</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Keywords */}
          <div>
            <input
              type="text"
              placeholder="Add Keywords (Minimum 3)"
              required
              className="w-full border border-gray-300 p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <p className="text-xs text-gray-500 mt-1">
              Term used to search content by Google
            </p>
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Short Description (optional)"
              rows={4}
              className="w-full border border-gray-300 p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
          </div>

          {/* Anonymous */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={anonymous}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={(e) => setAnonymous(e.target.checked)}
              className="w-4 h-4"
            />
            <label className="text-sm text-gray-800">Post Anonymously</label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-2 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
