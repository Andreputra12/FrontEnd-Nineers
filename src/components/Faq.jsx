import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which FAQ is active

  const faqs = [
    {
      id: 1,
      question: "What is Nineers?",
      answer: `Nineers is an online service platform that connects clients with experts in various fields, ranging from graphic design and web development to software development. Nineers provides services tailored to meet the needs of individuals and businesses alike. With a mission to simplify access to skilled professionals, Nineers offers an effective solution for anyone seeking the best results through a simple and transparent process.`,
    },
    {
      id: 2,
      question: "Why use Nineers?",
      answer: `Nineers makes it easy to find high-quality services at affordable prices. Every expert available on the platform has undergone a selection process to ensure their skills and professionalism. The platform offers access to a variety of service options, features a comparison system to help you make informed decisions, and guarantees secure transactions. Additionally, responsive customer support ensures a smooth experience from start to finish.`,
    },
    {
      id: 3,
      question: "Can I become a freelancer at Nineers?",
      answer: `Absolutely! Nineers welcomes professionals and freelancers who want to offer their services. By joining the Nineers community, you can promote your expertise, set your own rates and work schedule, and connect with clients from around the world. Joining is easy: simply create an account, upload your portfolio, and start receiving orders from clients.`,
    },
    {
      id: 4,
      question: "How do I order services at Nineers?",
      answer: `Ordering services on Nineers is easy and practical. Simply search for the service you need, compare freelancer profiles and portfolios, and select the one that suits you best. Afterward, you can place an order and communicate directly with the service provider to discuss project details. Once the service is completed, you can leave a review to help other clients choose the best freelancers.`,
    },
    {
      id: 5,
      question: "What are Nineers' advantages over other service providers?",
      answer: `Nineers stands out from other service providers with its unique advantages. By offering a variety of services on a single platform, Nineers saves you time and effort. The platform also provides access to a global pool of pre-vetted professionals, ensuring the quality of work delivered. Additionally, Nineers has a transparent system that allows you to read honest reviews from other clients and ensures secure transactions for every project. These advantages make Nineers the top choice for obtaining reliable and professional services.`,
    },
  ];

  // Function to toggle the FAQ accordion
  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <section className="container mx-auto p-12 mt-10">
      <p className="font-bold text-2xl text-center mb-10">FAQ</p>
      <div id="accordion-color">
        {faqs.map((faq, index) => (
          <div key={faq.id}>
            <h2 id={`accordion-color-heading-${faq.id}`}>
              <button
                type="button"
                onClick={() => toggleAccordion(index)} // Toggle FAQ on click
                className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
                aria-expanded={activeIndex === index ? "true" : "false"} // Update aria-expanded dynamically
                aria-controls={`accordion-color-body-${faq.id}`}
              >
                <span>{faq.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform ${activeIndex === index ? "rotate-180" : ""} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-color-body-${faq.id}`}
              className={activeIndex === index ? "p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900" : "hidden"} // Toggle visibility based on activeIndex
              aria-labelledby={`accordion-color-heading-${faq.id}`}
            >
              <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
