import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Health Desk Clinic:<br />
              <span className="text-gray-900">All Natural Supplements</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Health Care Desk is a trusted name for those seeking potent natural health supplements. We are proud to have gained our clients' trust by only producing high quality products backed by a team of scientists and nutritionists that provide full support and care.
            </p>
            <Button>Shop Now</Button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="IMAGE.png"
                alt="Healthcare Professional"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
