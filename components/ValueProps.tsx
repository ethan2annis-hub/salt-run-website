export default function ValueProps() {
  const props = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "One Service Replaces Three Vendors",
      description: "HVAC, plumber, hardware store—all handled by the same trusted team."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Smart Sensors Monitor 24/7",
      description: "Text alerts before problems happen. Never run out of salt or miss maintenance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparent Pricing, No Surprises",
      description: "Flat monthly rate. No hidden charges. No pushy upsells. Cancel anytime."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Local & Reliable",
      description: "Family-owned, serving Northern Utah. Your neighbors, not a national chain."
    }
  ]

  return (
    <section className="py-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-yellow/10 rounded-xl mb-4 text-golden-yellow group-hover:bg-golden-yellow group-hover:text-dark-gray transition-all duration-300">
                {prop.icon}
              </div>
              <h3 className="text-[18px] font-bold text-dark-gray mb-2 leading-snug">{prop.title}</h3>
              <p className="text-[15px] text-medium-gray leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
