"use client";
import React from "react";

import Image from "next/image";

interface GalleryItem {
  id: number;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery1.webp",
    description:
      "Planning a picnic? Try these 10 super easy and delicious recipes that are perfect for any outdoor vibe. Fresh, fun, and so simple to make!",
  },
  {
    id: 2,
    image: "/galleryimg2.png",
    description:
      "2024, you’ve been a year to remember! From big wins to small joys, every moment shaped this amazing journey. Here’s to new memories in 2025!",
  },
  {
    id: 3,
    image: "/galleryimg3.png",
    description:
      "May your Christmas be filled with love, laughter, and the warmth of cherished moments with family and friends. Wishing you peace, joy, and happiness this holiday season!",
  },
  {
    id: 4,
    image: "/galleryimg4.png",
    description:
      "Embracing the magic of winter in the kitchen garden. Fresh herbs and leafy greens thriving despite the chill. A little patch of life to brighten the frosty days!",
  },
  {
    id: 5,
    image: "/galleryimg5.png",
    description:
      '"Every child is a bundle of potential, hope, and dreams." Happy Children\'s Day!',
  },
  {
    id: 6,
    image: "/galleryimg6.png",
    description:
      "At a recent Islamic countries' meeting, Saudi Crown Prince Mohammed bin Salman expressed his respect for Palestine and emphasized Saudi Arabia’s unwavering support.",
  },
  {
    id: 7,
    image: "/galleryimg7.png",
    description:
      "Virat Kohli, the celebrated Indian cricketer, chose to spend his birthday on November 5 with a masterclass century against South Africa.",
  },
  {
    id: 8,
    image: "/galleryimg8.png",
    description:
      "Wishing you a Diwali filled with joy, light, and endless celebrations.",
  },
  {
    id: 9,
    image: "/mycardgallery.png",
    description:
      "Planning a picnic? Try these 10 super easy and delicious recipes that are perfect for any outdoor vibe. Fresh, fun, and so simple to make!",
  },
  {
    id: 10,
    image: "/galleryimg2.png",
    description:
      "2024, you’ve been a year to remember! From big wins to small joys, every moment shaped this amazing journey. Here’s to new memories in 2025!",
  },
  {
    id: 11,
    image: "/galleryimg3.png",
    description:
      "May your Christmas be filled with love, laughter, and the warmth of cherished moments with family and friends. Wishing you peace, joy, and happiness this holiday season!",
  },
  {
    id: 12,
    image: "/galleryimg4.png",
    description:
      "Embracing the magic of winter in the kitchen garden. Fresh herbs and leafy greens thriving despite the chill. A little patch of life to brighten the frosty days!",
  },
  {
    id: 13,
    image: "/galleryimg5.png",
    description:
      '"Every child is a bundle of potential, hope, and dreams." Happy Children\'s Day!',
  },
  {
    id: 14,
    image: "/galleryimg6.png",
    description:
      "At a recent Islamic countries' meeting, Saudi Crown Prince Mohammed bin Salman expressed his respect for Palestine and emphasized Saudi Arabia’s unwavering support.",
  },
  {
    id: 15,
    image: "/galleryimg7.png",
    description:
      "Virat Kohli, the celebrated Indian cricketer, chose to spend his birthday on November 5 with a masterclass century against South Africa.",
  },
  {
    id: 16,
    image: "/galleryimg8.png",
    description:
      "Wishing you a Diwali filled with joy, light, and endless celebrations.",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-500 p-4 mb-8">
          <div className="flex justify-center items-center ">
            <h1 className="text-2xl  text-gray-900 text-center">Gallery</h1>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={item.image}
                alt="Gallery Item"
                width={400}
                height={300}
                className="w-full h-64 object-cover p-5"
              />
              <div className="p-4">
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
