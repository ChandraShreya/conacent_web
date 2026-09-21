import {
  ChartNoAxesCombined,
  HeartHandshake,
  Lightbulb,
  Trophy,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: ChartNoAxesCombined,
    title: "Growth",
    description: "Continuous opportunities to learn and grow.",
  },
  {
    id: 2,
    icon: HeartHandshake,
    title: "Culture",
    description: "Collaborative culture that values every individual.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Impact",
    description: "Work on meaningful projects that make a difference.",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Rewards",
    description: "Recognizing excellence and celebrating achievements.",
  },
];

export default function WhyConacent() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Why Conacent?
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Join a team where your ideas, growth, and impact matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  w-full
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <Icon
                  className="
                    mb-4
                    h-8
                    w-8
                    text-text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Title */}
                <h3 className="font-banner text-lg font-bold text-text-primary">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-banner text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}