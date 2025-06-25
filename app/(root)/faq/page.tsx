"use client";
import React, { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How to create your profile on Let’s Diskuss?",
    answer: `Follow the given steps to create your profile on Let’s Diskuss:
1. Click on Register on extreme right on the website.
2. Fill in all the details and create a password.
3. Make sure you read and approve to all the terms and conditions of Let’s Diskuss.
4. Click on the register tab, so that a confirmation mail is sent on your e mail account.
5. Go to your e mail and confirm your registration.
Now you can update your profile picture, designation, etc, in your Let’s Diskuss account.`,
  },
  {
    question: "How to post a question on Let’s Diskuss?",
    answer: `Follow the given steps to post a question on Let’s Diskuss:
1. Click on Register on extreme right on the website.
2. Fill in all the details and create a password.
3. Make sure you read and approve to all the terms and conditions of Let’s Diskuss.
4. Click on the register tab, so that a confirmation mail is sent on your e mail account.
5. Go to your e mail and confirm your registration.`,
  },
  {
    question: "How to post an answer?",
    answer: `Follow the given steps to post an answer to a question on Let’s Diskuss:
1. Log in to your Let’s Diskuss account for posting an answer.
2. Select the question to which you want to answer. This can be an already answered question or an unanswered question.
3. Type your answer in the answer box and format it using the editing tools provided.
4. Interlink, insert images, videos, and audios, if any.
5. Click on Publish to post your answer.`,
  },
  {
    question: "How to create a blog on Let’s Diskuss?",
    answer: `Follow the given steps to create a blog on Let’s Diskuss:
1. Log in to your Let’s Diskuss account for creating a Blog.
2. Click on Become a Blogger tab, present at the extreme left of Let’s Diskuss webpage.
3. This will take you to the Blog page.
4. Insert all the details related to your blog: Blogger’s name, Blog’s title, and category.
5. Create a suitable and appropriate URL for your Blog.
6. Write a short description explaining your blog in brief.
7. Choose a good cover image for your blog.
8. Click on Next to move on to posting your blog content.

Posting a blog and blog content:
Once you have created a blog, you will need to post your content in it.

1. After clicking Next, click on the Add new post option appearing in front of your blog name.
2. Enter the title of your post.
3. Insert at least three keywords related to your blog.
4. Write your content and format it using the editing tools provided.
5. Interlink, insert images, videos, and audios, if any.
6. Click on Submit Post to publish your blog.
7. Your blog will appear in the Blog section of Let’s Diskuss.`,
  },
  {
    question: "How many categories are offered on Let’s Diskuss?",
    answer: `Let’s Diskuss is an online platform which allows you to discuss various issues related to different areas of interest and categories. To make the procedure of asking and answering questions easier, Let’s Diskuss broadly offers 11 categories. Users can ask questions, answer any question, and write blogs, on any of these 11 categories.
1. Science and Technology
2. Current Topics
3. Entertainment and Lifestyle
4. Health and Beauty
5. Food and Cooking
6. Astrology
7. Cars and Bikes
8. Finance
9. Sports
10. Education
11. Others`,
  },
];

export default function FAQPage() {
  const [openIndexes] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        LetsDiskuss - Frequently Asked Questions
      </h1>

      {/* Description */}
      <div className="bg-white shadow p-6 rounded mb-6 max-w-4xl text-gray-700">
        <p>
          <strong>Let Diskuss</strong> is an online discussion forum which
          allows you to access information and latest news about the world and
          actively participate in the ongoing discussions. This online portal
          serves the interest of its users belonging to various different fields
          and categories. Users here can ask anything they want an answer or
          advice on, and get experts point of view immediately on their queries.
          Let Diskuss hosts a panel of different experts and intellectuals who
          hold an eminent position in their respective fields. With the help of
          this panel, Let’s Diskuss ensures that no query of its valuable users
          goes unanswered or unheard. Whether you have a problem related to your
          studies, your personal life, or you are disturbed thinking about a
          particular political issue, you can post it on Let’s Diskuss without
          being judged. Let’s Diskuss also offers a picture gallery for
          entertainment and a blog section for people who believe in detailed
          expression.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-4xl space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow p-4 rounded">
            <button className="flex justify-between items-center w-full text-left font-semibold text-gray-800">
              <span>Question: {faq.question}</span>
              {openIndexes.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndexes.includes(index) && (
              <div className="mt-4 text-gray-700 whitespace-pre-line">
                <p>
                  <strong>Answer:</strong> {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
