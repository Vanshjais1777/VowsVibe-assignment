import Button from './Button';

export default function FormulationSection() {
  return (
    <section className="py-2 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src='IMAGE-23.png'
              alt="Natural Ingredients"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              100% Natural Components Formulated with Premium Nutrients
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We harness the goodness of nature to create supplements enriched with premium, clean-label ingredients inspired by modern scientific research. Our formulas contain plant-based nutrients and phytonutrients, minerals, vitamins and more dietary supplements that deliver proven results—ensuring every component has a purpose and benefits overall health efficiently and sustainably.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
