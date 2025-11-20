import Button from './Button';

export default function ManufacturingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Research-Backed Formulations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Formulated with Clinically-Tested ingredients
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each Health Care Desk product is informed by the latest health data and medical research, ensuring every supplement we create aligns with proven scientific understanding. We perform 11 quality tests on all our bottles before they reach you, making the most out of every dollar you invest in your health.
            </p>
            <Button>Learn More</Button>
          </div>

          <div className="relative lg:order-2">
            <img
              src='IMAGE-24.png'
              alt="Lab Research"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
