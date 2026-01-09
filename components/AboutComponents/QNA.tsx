'use client'
import { useState } from 'react';

export default function QNA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I access course materials offline?",
      answer: "Yes, you can download course materials for offline access. Simply click the download button next to each lesson or resource. Downloaded materials will be available in your device's storage and can be accessed without an internet connection."
    },
    {
      question: "Do I need a technical background to join the courses?",
      answer: "No, you don’t need any prior technical experience. Our courses are designed to start from the basics and gradually move to advanced topics, making them suitable for beginners and experienced learners alike."
    },
    {
      question: "Do I need a technical background to join the courses?",
      answer: "No, you don’t need any prior technical experience. Our courses are designed to start from the basics and gradually move to advanced topics, making them suitable for beginners and experienced learners alike."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Yes, all courses are self-paced. You can start, pause, and continue lessons anytime, allowing you to learn according to your schedule and comfort level."
    },
    {
      question: "Will I get a certificate after completing a course?",
      answer: "Yes, after successfully completing a course, you will receive a digital certificate that can be used for your portfolio, job applications, or professional profiles."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-text font-semibold xl:text-base">
                {faq.question}
              </span>
              <i
                className={`bx bx-chevron-down w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 text-gray-text">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}