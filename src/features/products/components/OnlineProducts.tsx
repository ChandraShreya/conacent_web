import Image from "next/image";
import { ArrowRight } from "lucide-react";

const onlineProducts = [
  {
    id: 1,
    logo: "/images/logo/Oracle.png",
    title: "Oracle E-Business Suite",
    description:
      "Comprehensive ERP solutions to streamline business operations and improve efficiency.",
  },
  {
    id: 2,
    logo: "/images/logo/Oracle.png",
    title: "Oracle Fusion Cloud",
    description:
      "Modern cloud solutions designed to simplify enterprise business management.",
  },
  {
    id: 3,
    logo: "/images/logo/Oracle.png",
    title: "Oracle Cloud Infrastructure",
    description:
      "Secure and scalable cloud infrastructure for enterprise workloads.",
  },
];



export default function ProductsCards() {
  return (
    <section className="w-full bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* ================= ONLINE PRODUCTS ================= */}
        <section>
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Online Products
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Explore our online enterprise products and solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {onlineProducts.map((product) => (
              <div
                key={product.id}
                className="
                  group
                  flex
                  min-h-[235px]
                  flex-col
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
                {/* Logo */}
                <div className="relative mb-5 h-[42px] w-[125px]">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Title */}
                <h3 className="font-banner text-sm font-bold text-gray-900">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-banner text-xs leading-5 text-gray-500">
                  {product.description}
                </p>

                {/* Learn More */}
                <button
                  type="button"
                  className="
                    mt-auto
                    flex
                    w-fit
                    items-center
                    gap-1
                    pt-5
                    font-banner
                    text-xs
                    font-semibold
                    text-text-primary
                    transition-all
                    duration-300
                    group-hover:gap-2
                  "
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}