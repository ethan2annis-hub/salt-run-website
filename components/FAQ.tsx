'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We serve from Farmington to Brigham City. If you're in Northern Utah and not sure if we cover your area, give us a call at (801) 477-0670 — we're expanding and might be able to help."
    },
    {
      question: "How does the smart sensor work?",
      answer: "We install a small sensor in your water softener tank (takes about 10 minutes, no tools required). It monitors your salt level 24/7 and sends you a text when it's running low. You approve delivery with one tap, and we show up. No checking the tank yourself, no guessing when you'll run out."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yep. No contracts, no cancellation fees. If it's not working for you, just let us know. We'll be bummed, but we get it — life changes."
    },
    {
      question: "What if I'm not home when you deliver?",
      answer: "Not a problem. For salt delivery, we go directly to your water softener tank (usually in the garage or basement). We don't need you there. For HVAC tune-ups or water heater work, we'll schedule a time that works for you. You'll always get a heads-up before we show up."
    },
    {
      question: "Do you work with all water softener brands?",
      answer: "We service pretty much every brand out there — Culligan, Kinetico, WaterBoss, GE, you name it. Our sensor works with any standard water softener tank. If you've got something unusual, call us at (801) 477-0670 and we'll figure it out."
    },
    {
      question: "How do you schedule HVAC tune-ups and water heater flushes?",
      answer: "We reach out based on the season and your service schedule. For HVAC, we'll text you in the fall for furnace work and spring for AC. For water heater flushes, we schedule around 6 months into your subscription. You approve the date, we show up. Simple as that."
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer: "Nope. You pay month-to-month. Cancel anytime. We're confident you'll love the service, so we don't need to lock you in."
    },
    {
      question: "What if something goes wrong during a tune-up or service?",
      answer: "If we spot an issue during a tune-up (like a worn part or potential problem), we'll let you know what we found and give you options. We don't do surprise upsells or scare tactics. If a repair is needed, we'll explain it clearly, give you a fair price, and let you decide. Our job is maintenance and keeping things running smoothly — not selling you stuff you don't need."
    }
  ]

  return (
    <section id="faqs" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-dark-gray mb-4 leading-tight">
            Common questions
          </h2>
          <p className="text-[20px] text-medium-gray">
            Everything you need to know about Salt Run
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-golden-yellow/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-off-white transition-colors duration-200"
              >
                <span className="text-[18px] font-semibold text-dark-gray pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-golden-yellow flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[16px] text-medium-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-[16px] text-medium-gray mb-4">
            Still have questions?
          </p>
          <a
            href="tel:8014770670"
            className="inline-flex items-center space-x-2 text-golden-yellow font-semibold hover:underline"
          >
            <span>Give us a call: (801) 477-0670</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
