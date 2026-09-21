import Image from "next/image";

const lifeImages = [
  {
    id: 1,
    src: "/images/careers/life_1.jpg",
    alt: "Conacent team",
  },
  {
    id: 2,
    src: "/images/careers/life_2.jpg",
    alt: "Conacent event",
  },
  {
    id: 3,
    src: "/images/careers/life_3.jpg",
    alt: "Conacent team event",
  },
  {
    id: 4,
    src: "/images/careers/life_4.jpg",
    alt: "Conacent celebration",
  },
];

export default function LifeAtConacent() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Life at Conacent
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Experience a workplace where people, collaboration, and
            innovation come together.
          </p>
        </div>

        {/* Images */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifeImages.map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                h-[180px]
                w-full
                overflow-hidden
                rounded-xl
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}