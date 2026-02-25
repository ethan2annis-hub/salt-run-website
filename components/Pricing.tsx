export default function Pricing() {
  const tiers = [
    {
      name: "Salt Only",
      price: 25,
      description: "Perfect for hassle-free salt delivery",
      features: [
        "Smart sensor installed free",
        "Text alerts when salt is low",
        "Salt delivered to your door",
        "We refill your tank for you",
        "No lifting, no trips to the store"
      ],
      featured: false
    },
    {
      name: "Salt + Filters",
      price: 39,
      description: "Keep your air clean and your water soft—automatically",
      features: [
        "Everything in Salt Only",
        "Furnace filter delivery",
        "Automatic replacement schedule",
        "Custom-sized filters for your home",
        "Never forget to change filters again"
      ],
      featured: true,
      badge: "Most Popular"
    },
    {
      name: "Full Home Care",
      price: 79,
      description: "Everything you'd pay 3 vendors for, one price",
      features: [
        "Everything in Salt + Filters",
        "Annual furnace tune-up & inspection",
        "Annual AC tune-up & inspection",
        "Annual water heater flush",
        "Priority scheduling & support",
        "Complete peace of mind"
      ],
      featured: false,
      valueNote: "$450+ value if purchased separately"
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-dark-gray mb-4 leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-[20px] text-medium-gray">
            Simple, transparent pricing. Cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.featured
                  ? 'bg-gradient-to-b from-golden-yellow/10 to-golden-yellow/5 border-2 border-golden-yellow shadow-[0_8px_30px_rgba(255,199,0,0.2)] scale-105'
                  : 'bg-off-white border-2 border-transparent hover:border-golden-yellow/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-golden-yellow text-dark-gray text-[13px] font-bold rounded-full shadow-lg uppercase tracking-wide">
                  {tier.badge}
                </div>
              )}

              {/* Tier Info */}
              <div className="mb-6">
                <h3 className="text-[26px] font-bold text-dark-gray mb-2">{tier.name}</h3>
                <p className="text-[15px] text-medium-gray min-h-[44px]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-[56px] font-bold text-dark-gray tracking-tight">${tier.price}</span>
                  <span className="text-[20px] text-medium-gray ml-2">/month</span>
                </div>
                {tier.valueNote && (
                  <p className="text-[14px] text-golden-yellow font-semibold mt-1">{tier.valueNote}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-golden-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="tel:8014770670"
                className={`block w-full py-4 text-center text-[16px] font-semibold rounded-xl transition-all duration-300 ${
                  tier.featured
                    ? 'bg-golden-yellow text-dark-gray hover:shadow-[0_4px_20px_rgba(255,199,0,0.4)] hover:-translate-y-1'
                    : 'bg-white border-2 border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
