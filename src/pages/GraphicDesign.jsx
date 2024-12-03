import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

const GraphicDesign = () => {
  return (
    <div>
        <Navbar></Navbar>
        <main>
        <section>
            <nav className="flex px-5 py-3 text-gray-700 pt-5 pl-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                <a
                    href='/'
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    All Category
                </a>
                </li>
                <li>
                <div className="flex items-center">
                    <svg
                    className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                    />
                    </svg>
                    <a
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                    Graphic Desaign
                    </a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg
                    className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                    />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Nineers
                    </span>
                </div>
                </li>
            </ol>
            </nav>
        </section>

        <section className="bg-[#DFE8D3]">
            <div>
            <h1 className="text-center text-3xl font-bold mb-10 pt-10">Graphic Desaign</h1>
            <div className="text-center">
                <p className="text-xl font-bold">
                Why You Should Choose Graphic Desaign Services at Nineers?
                </p>
                <ul className="py-10">
                {[
                    "Creative visual designs for logos, branding, posters, and other media.",
                    "Expertise in web design, UI/UX, and infographics.",
                    "Skilled in tools like Adobe Illustrator, Photoshop, and Figma.",
                    "Customized designs aligned with your company's identity and needs.",
                    "Delivered by freelancers with impressive portfolios.",
                    "Revision guarantee to ensure you get the best design.",
                ].map((text, index) => (
                    <li key={index} className="mb-2 flex items-center justify-center gap-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                        />
                    </svg>
                    {text}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </section>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default GraphicDesign