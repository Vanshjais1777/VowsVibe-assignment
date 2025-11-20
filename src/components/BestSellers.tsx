import { Star } from 'lucide-react';
import Button from './Button';
import SectionTitle from './SectionTitle';

export default function BestSellers() {
  const products = [
    {
      name: 'Dent Pure',
      image: 'Rectangle 58.png',
      rating: 5,
      reviews: 120
    },
    {
      name: 'True Fem',
      image: 'Frame 141.png',
      rating: 5,
      reviews: 98
    },
    {
      name: 'Vita Renew',
      image: 'Rectangle 59.png',
      rating: 5,
      reviews: 156
    },
    {
      name: 'ProstaZen',
      image: 'Frame 224.png',
      rating: 5,
      reviews: 87
    },
    {
      name: 'Nerve Freedom',
      image: 'IMAGE-39.png',
      rating: 5,
      reviews: 143
    }
  ];

  const filters = ['Results-Driven', 'All-Natural', 'Non-GMO', 'Cruelty-Free'];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Best Sellers"
          subtitle="Experience health and wellness through the purity of all-natural ingredients, our unique supplements support health, healing & wellness."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-[#2563EB] hover:text-white transition-all duration-300 border border-gray-200"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-100 p-6 flex items-center justify-center h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <Button variant="primary" className="w-full">Shop Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
