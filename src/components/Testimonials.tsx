import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'TestoBites',
      rating: 5,
      image: "IMAGE-33.png",
      text: 'TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.'
    },
    {
      name: 'Vina Renew',
      rating: 5,
      image: 'IMAGE-36.png',
      text: 'My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.'
    },
    {
      name: 'Nerve Freedom',
      rating: 5,
      image: 'IMAGE-39.png',
      text: "I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Verified Customer Testimonials" />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#E9F7FA] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
