export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1A1A1A 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Headline with staggered animation */}
        <h1 className="text-[64px] lg:text-[72px] font-bold text-dark-gray leading-[1.1] tracking-tight mb-6">
          No lifting.
          <br />
          No forgetting.
          <br />
          <span className="relative inline-block">
            No thinking about it.
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
              <path d="M0 6 Q 100 0, 200 6 T 400 6" stroke="#FFC700" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-[22px] text-medium-gray max-w-[640px] mx-auto mb-12 leading-relaxed">
          Smart home maintenance for your salt, filters, HVAC, and water heater.{' '}
          <span className="text-dark-gray font-semibold">One subscription. Zero hassle.</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('how-it-works')}
          className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-golden-yellow text-dark-gray text-[18px] font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(255,199,0,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          <span>See How It Works</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap items-center justify-center gap-8 text-[15px] text-medium-gray">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-golden-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Family-owned & local</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-golden-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Serving Ogden, Layton & Farmington</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-golden-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
