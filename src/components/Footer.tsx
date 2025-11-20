export default function Footer() {
  const footerSections = [
    {
      title: 'Have a Question?',
      content: [
        'Check out our FAQ page for answers the most commonly asked questions.',
        'Contact: +1 (855) 322-7777',
        'Email: info@healthdeskcare.com'
      ]
    },
    {
      title: 'Connect With Us',
      content: [
        '123 Main Street',
        'Brooklyn, NY 10006',
        'United States'
      ]
    },
    {
      title: 'We\'re Social',
      content: [
        'Follow us on Facebook, Instagram, Twitter, and LinkedIn for updates about our latest supplements.'
      ]
    }
  ];

  const linkColumns = [
    {
      title: 'Get To Know',
      links: ['Our Company', 'Our Process', 'Our Supplements', 'Our Story']
    },
    {
      title: 'Our Products',
      links: ['Heart Care', 'Immune Support', 'Weight Management', 'Mental Health']
    },
    {
      title: 'Our Mission',
      links: ['Our Difference', 'Our Giving', 'Sustainability', 'Transparency']
    },
    {
      title: 'Get Support',
      links: ['Help', 'Contact Us', 'FAQs', 'Guarantee']
    }
  ];

  return (
    <>
      <section className="py-12 bg-[#1A69BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <h3 className="text-2xl font-bold text-white">Let's Grow Together</h3>
            <p className="text-white text-center md:text-left">
              We'll keep it simple. Only the news and updates you need.            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-6 py-3 rounded-full w-64 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-[#2563EB] rounded-full font-medium hover:bg-gray-100 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 text-lg mb-4">{section.title}</h4>
                {section.content.map((text, i) => (
                  <p key={i} className="text-gray-600 mb-2">{text}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {linkColumns.map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-sm">
                © 2024-2025 Health Desk Clinic. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-4">
                <img src="/credit cards accepted.png" alt="Credit cards accepted" className="h-8 object-contain" />
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-[#2563EB]">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-[#2563EB]">Terms of Use</a>
                <a href="#" className="text-gray-600 hover:text-[#2563EB]">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
