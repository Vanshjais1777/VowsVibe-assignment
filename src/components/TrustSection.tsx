export default function TrustSection() {
  const trustItems = [
    { image: '/IMAGE-18.png', text: 'All Natural' },
    { image: '/IMAGE-19.png', text: 'Clinically Tested' },
    { image: '/IMAGE-20.png', text: 'FDA Approved Facility' },
    { image: '/IMAGE-21.png', text: 'US FDA Registered' },
    { image: '/IMAGE-22.png', text: 'GMP Certified' }
  ];

  return (
    <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/Bg-1.png')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Brand That You Can Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our highest priority is your health and safety, which gives you peace of mind. We follow the highest GMP standards to ensure that we use only safe ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src={item.image} alt={item.text} className="w-14 h-10" />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
