import Image from "next/image";

const technologies = [
  {
    id: 1,
    title: "Java",
    logo: "/images/logo/Java.png",
  },
  {
    id: 2,
    title: "Open Source",
    logo: "/images/logo/openSourceIcon.png",
  },
  {
    id: 3,
    title: "PostgreSQL",
    logo: "/images/logo/postgresql.jpg",
  },
  {
    id: 4,
    title: ".NET",
    logo: "/images/logo/dotnetIcon.jpg",
  },
  {
    id: 5,
    title: "MySQL",
    logo: "/images/logo/mysql.png",
  },
];

export default function Technologies() {
  return (
    <section className="w-full bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Technologies
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Technologies we use to build scalable and reliable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="
                flex
                min-h-[125px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div className="relative h-[45px] w-[100px]">
                <Image
                  src={technology.logo}
                  alt={technology.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-banner text-sm font-semibold text-gray-800">
                {technology.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}