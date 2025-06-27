"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Camera } from "lucide-react";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log({ title, category, description, image });
  //   // You can now trigger router.push or API call
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded border shadow-md w-full max-w-xl">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold text-gray-800">Add Blog </h2>
        </div>

        {/* // eslint-disable-next-line react/jsx-no-bind */}
        <form className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring"
            value={title}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select
            className="w-full border px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring"
            value={category}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Category*</option>
            <option value="education">Education</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
          </select>

          <textarea
            placeholder="Describe your blog title in 50-70 words"
            rows={4}
            className="w-full border px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring"
            value={description}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <div className="flex items-center space-x-2">
            <label className="flex items-center px-4 py-2 border rounded cursor-pointer text-sm text-gray-700 hover:bg-gray-50">
              <Camera className="w-4 h-4 mr-2" />
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={handleImageUpload}
              />
            </label>
            {image && (
              <span className="text-sm text-gray-600">{image.name}</span>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <Link href="/" className="text-blue-700 hover:underline text-sm">
              CANCEL
            </Link>
            <button
              type="submit"
              disabled={!title || !category || !description}
              className="text-white text-sm px-4 py-2 rounded bg-gray-400 disabled:opacity-50"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
