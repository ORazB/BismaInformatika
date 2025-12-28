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
      question: "Can I access course materials offline?",
      answer: "Yes, you can download course materials for offline access. Simply click the download button next to each lesson or resource. Downloaded materials will be available in your device's storage and can be accessed without an internet connection."
    },
    {
      question: "Can I access course materials offline?",
      answer: "Yes, you can download course materials for offline access. Simply click the download button next to each lesson or resource. Downloaded materials will be available in your device's storage and can be accessed without an internet connection."
    },
    {
      question: "Can I access course materials offline?",
      answer: "Yes, you can download course materials for offline access. Simply click the download button next to each lesson or resource. Downloaded materials will be available in your device's storage and can be accessed without an internet connection."
    },
    {
      question: "Can I access course materials offline?",
      answer: "Yes, you can download course materials for offline access. Simply click the download button next to each lesson or resource. Downloaded materials will be available in your device's storage and can be accessed without an internet connection."
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
              <span className="text-text font-semibold">
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