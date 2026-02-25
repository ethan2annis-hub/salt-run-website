export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Logo & Tagline */}
          <div>
            <div className="text-[28px] font-bold mb-3">SALT RUN</div>
            <p className="text-[16px] text-white/70 max-w-md leading-relaxed">
              No lifting. No forgetting. No thinking about it.
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="md:text-right">
            <div className="mb-6">
              <div className="text-[14px] text-white/60 mb-2">Call us</div>
              <a
                href="tel:8014770670"
                className="text-[24px] font-bold text-golden-yellow hover:text-golden-yellow/80 transition-colors"
              >
                (801) 477-0670
              </a>
            </div>
            <div>
              <div className="text-[14px] text-white/60 mb-2">Service area</div>
              <p className="text-[16px] text-white/90">
                Serving Ogden, Layton, and Farmington
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-white/60">
            © 2026 Salt Run. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-[14px] text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('faqs')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-[14px] text-white/70 hover:text-white transition-colors"
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
