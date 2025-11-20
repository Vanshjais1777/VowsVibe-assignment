export default function CharitySection() {
  const charities = [
    { logo: '/IMAGE-27.png', name: 'Breast Cancer Research' },
    { logo: '/IMAGE-28.png', name: 'American Red Cross' },
    { logo: '/IMAGE-29.png', name: 'US Feline Foundation' },
    { logo: '/IMAGE-30.png', name: 'Animal Welfare Institute' },
    { logo: '/IMAGE-31.png', name: 'Health Foundation' }
  ];

  return (
    <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/IMAGE-26.png')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Charitable Initiatives
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Health Care Desk Gives Back
          </h3>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto">
            At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {charities.map((charity, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="p-6 w-full h-28 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={charity.logo}
                  alt={charity.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
