import SectionTitle from './SectionTitle';

export default function Categories() {
  const categories = [
    {
      image: '/012-medicine.png',
      name: 'Weight Loss',
      description: 'Shop trusted weight loss products that boost metabolism and support your journey to a healthier you',
      color: 'bg-blue-50'
    },
    {
      image: '/017-heart.png',
      name: 'Nerve Pain',
      description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
      color: 'bg-blue-50'
    },
    {
      image: '/005-syringe.png',
      name: 'Skin Care',
      description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
      color: 'bg-blue-50'
    },
    {
      image: '/005-syringe (1).png',
      name: "Men's Health",
      description: 'Discover men\'s health products designed to boost energy, strength and overall well-being',
      color: 'bg-blue-50'
    },
    {
      image: '/005-syringe (2).png',
      name: "Women's Health",
      description: 'Explore women\'s health products designed to support hormonal balance and overall wellness',
      color: 'bg-blue-50'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nutrition Solutions for Your Complete Well-Being"
          subtitle=""
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className={`${category.color} rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full flex items-center justify-center">
                  <img src={category.image} alt={category.name} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
                <p className="text-sm text-gray-600 text-center">{category.description}</p>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] text-white font-semibold py-3 rounded-full hover:shadow-lg transition-shadow duration-200">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
