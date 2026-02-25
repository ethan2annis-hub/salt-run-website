export default function Testimonials() {
  const testimonials = [
    {
      quote: "I always ended up with dirty hands, and who wants to farmer carry 320 pounds down two flights of stairs?",
      name: "Steve Duncan",
      location: "Ogden"
    },
    {
      quote: "I was having to roll salt down my stairs before they came around. My grandson wasn't even half as reliable as Salt Run.",
      name: "Sherry Hauler",
      location: "Layton"
    },
    {
      quote: "With the sensor, it's so easy! We love Salt Run.",
      name: "Lane Flamm",
      location: "Farmington"
    }
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-off-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-dark-gray mb-4 leading-tight">
            What our customers say
          </h2>
          <p className="text-[20px] text-medium-gray">
            Serving homeowners across Ogden, Layton, and Farmington
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-golden-yellow/20 group-hover:text-golden-yellow/40 transition-colors duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-[16px] text-dark-gray leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-[18px] font-bold text-dark-gray">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-dark-gray">
                    {testimonial.name}
                  </div>
                  <div className="text-[14px] text-medium-gray">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-golden-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
