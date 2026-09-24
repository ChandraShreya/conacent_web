import {
  CircleUserRound,
  Globe2,
  Handshake,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";


export default function WhyChooseUs() {
  const whyChooseUs = [
    {
      id: 1,
      icon: CircleUserRound,
      title: "Customer Centric",
      description:
        "We put our customers at the center of everything we do.",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We embrace innovation to deliver future-ready solutions.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Quality Assured",
      description:
        "We are committed to delivering the highest quality in everything.",
    },
    {
      id: 4,
      icon: RefreshCw,
      title: "Agile & Adaptive",
      description:
        "We adapt quickly to changes and deliver with speed and flexibility.",
    },
    {
      id: 5,
      icon: Globe2,
      title: "Global Presence",
      description:
        "Strong global footprint with local expertise.",
    },
    {
      id: 6,
      icon: Handshake,
      title: "Trusted Partnerships",
      description:
        "We build long-term partnerships based on trust and success.",
    },
  ];

  return (
    <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[30%]">
          <p className="mb-3 font-banner text-sm uppercase text-white">
            Why Conacent
          </p>

          <h2 className="mb-4 max-w-[320px] font-banner text-xl font-bold uppercase leading-relaxed text-white">
            Your Trusted Transformation Partner
          </h2>

          <p className="mb-6 max-w-[320px] font-banner text-sm leading-6 text-white/90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Culpa minima cum reiciendis ratione sint quos placeat,
            quasi qui optio iusto.
          </p>

          <button className="rounded-lg border border-white px-6 py-3 font-banner text-sm capitalize text-white transition-all duration-300 hover:bg-white hover:text-secondary-background">
            Partner With Us
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:w-[70%] lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="shrink-0 pt-1 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-1 font-banner text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="max-w-[230px] font-banner text-sm leading-6 text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}