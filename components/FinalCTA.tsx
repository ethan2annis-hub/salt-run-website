export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-golden-yellow">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[48px] lg:text-[56px] font-bold text-dark-gray mb-6 leading-tight">
          Ready to stop worrying about
          <br />
          home maintenance?
        </h2>

        <p className="text-[20px] text-dark-gray/80 mb-10 max-w-2xl mx-auto">
          Join homeowners across Northern Utah who never think about salt, filters, or maintenance again.
        </p>

        {/* Primary CTA */}
        <a
          href="tel:8014770670"
          className="inline-flex items-center space-x-3 px-10 py-5 bg-dark-gray text-white text-[18px] font-semibold rounded-xl hover:bg-dark-gray/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Call (801) 477-0670</span>
        </a>

        {/* Service area note */}
        <p className="text-[15px] text-dark-gray/70">
          Serving Farmington to Brigham City
        </p>
      </div>
    </section>
  )
}
