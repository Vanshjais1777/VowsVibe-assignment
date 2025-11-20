import Button from './Button';

export default function PhilanthropySection() {
  return (
    <section className="py-2 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src='IMAGE-25.png'
              alt="Manufacturing Facility"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Eco-Conscious Manufacturing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smart Manufacturing by Design
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're not merely focused on selling health supplements— we're committed to protecting the environment as well. Our facilities follow the most stringent sustainability standards — ensuring environmentally-wise footprint in their operations. We invest in sustainable packaging materials using mostly recyclable and eco-friendly resources to help minimize any negative ecological impacts. With each conscious purchase from us, you can feel good knowing your solutions that you are as good for the planet as they are for your health.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
