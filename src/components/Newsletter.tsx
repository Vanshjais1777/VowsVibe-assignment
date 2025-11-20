import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img src="/Rectangle 730.png" alt="Health Desk" className="h-18" />
          </div>

          <div className="mb-8">
            <input
              type="email"
              placeholder="Follow Us"
              className="px-6 py-3 border-2 border-gray-300 rounded-full w-full max-w-md text-center focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#" className="w-10 h-10 bg-[#2AABED] rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#2AABED] rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#2AABED] rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#2AABED] rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
