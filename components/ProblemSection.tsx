export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Coordinating the HVAC guy, the plumber, the hardware store runs. 😞",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Remembering when filters need changing, when tune-ups are due. 🤢",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Surprise bills, scheduling hassles, no-shows. 🤮",
    },
  ]

  return (
    <section className="py-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-dark-gray mb-4 leading-tight">
            Managing your home's maintenance
            <br />
            shouldn't feel like a part-time job.
          </h2>
          <p className="text-[20px] text-medium-gray max-w-2xl mx-auto">
            Multiple vendors. Too many trips. Constant mental load.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-golden-yellow/5 rounded-bl-[40px]" />

              <div className="relative">
                <div className="text-medium-gray group-hover:text-golden-yellow transition-colors duration-300 mb-4">
                  {problem.icon}
                </div>
                <p className="text-[17px] text-dark-gray leading-relaxed font-medium">
                  {problem.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
