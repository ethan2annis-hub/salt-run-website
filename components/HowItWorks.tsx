export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Setup",
      subtitle: "Month 1",
      points: [
        "Install smart salt sensor (free, 10 minutes)",
        "Set up filter replacement schedule",
        "Get you into the maintenance calendar"
      ]
    },
    {
      number: "02",
      title: "Ongoing Monitoring",
      subtitle: "24/7",
      points: [
        "Smart sensors monitor salt levels 24/7",
        "Text alerts when salt is low (you approve delivery)",
        "Filters delivered on schedule (no thinking required)"
      ]
    },
    {
      number: "03",
      title: "Seasonal HVAC",
      subtitle: "Spring & Fall",
      points: [
        "Fall/Winter: Furnace tune-up scheduled",
        "Spring/Summer: AC tune-up scheduled",
        "We reach out to schedule, you approve"
      ]
    },
    {
      number: "04",
      title: "Annual Maintenance",
      subtitle: "6 months in",
      points: [
        "Water heater flush (6 months into service)",
        "Everything on autopilot",
        "You approve, we handle it"
      ]
    }
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-20">
          <h2 className="text-[48px] font-bold text-dark-gray mb-4 leading-tight">
            One service. Everything handled.
          </h2>
          <p className="text-[20px] text-medium-gray max-w-3xl mx-auto">
            We set you up once, then handle maintenance automatically throughout the year.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-golden-yellow via-golden-yellow to-golden-yellow/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="relative bg-off-white rounded-2xl p-6 h-full hover:shadow-[0_8px_30px_rgba(255,199,0,0.15)] transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-golden-yellow rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[20px] font-bold text-dark-gray">{step.number}</span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-[22px] font-bold text-dark-gray">{step.title}</h3>
                    <p className="text-[14px] text-medium-gray font-medium">{step.subtitle}</p>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2 text-[15px] text-medium-gray">
                        <svg className="w-5 h-5 text-golden-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 text-center">
          <p className="text-[18px] text-dark-gray font-semibold">
            Set it and forget it. <span className="text-golden-yellow">You approve, we execute.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
