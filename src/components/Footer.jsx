import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          {/* Category Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Category
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {['Web Development', 'Software Development', 'Android Development', 'Graphic Design'].map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {[
                'Careers',
                'Press & News',
                'Partnerships',
                'Privacy Policy',
                'Terms of Service',
                'Intellectual Property Claims',
                'Investor Relations',
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {[
                'Help & Support',
                'Trust & Safety',
                'Selling on Nineers',
                'Buying on Nineers',
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Community
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {[
                'Customer Success Stories',
                'Community Hub',
                'Forum',
                'Events',
                'Blog',
                'Influencers',
                'Affiliates',
                'Podcast',
                'Invite a Friend',
                'Become a Seller',
                'Community Standards',
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* More From Nineers Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              More From Nineers
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {[
                'Nineers Pro',
                'Nineers Logo Maker',
                'Nineers Guides',
                'Get Inspired',
                'Nineers Select',
                'Nineers Workspace',
                'Working Not Working',
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <p className="hover:underline">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between border-t border-t-black-500">
          <span className="text-sm font-bold text-black-100 dark:text-black-300 sm:text-center">
            <span className="text-2xl">Nineers</span> © Nineers International Ltd. 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
