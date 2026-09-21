import { ArrowRight } from "lucide-react";
import {Flower} from "lucide-react"

const products = [
  {
    id: 1,
    icon:Flower,
    title: "Supplier Portal",
    description:
      "Streamline supplier collaboration, communication, and management.",
  },
  {
    id: 2,
    icon:Flower,
    title: "Expense Management",
    description:
      "Simplify expense tracking, reporting, and approval processes.",
  },
  {
    id: 3,
    icon:Flower,
    title: "Project Management",
    description:
      "Plan, track, and manage projects efficiently from one platform.",
  },
  {
    id: 4,
    icon:Flower,
    title: "Issue Tracker",
    description:
      "Track and manage issues to improve operational efficiency.",
  },
];

export default function ConacentProducts() {
  return (
    <section className="w-full bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Conacent Products
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Powerful products designed to simplify your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon
            return(
              <div
              key={product.id}
              className="
                group
                flex
                min-h-[220px]
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
              {/* Icon */}
              <Icon className="text-text-primary h-8 w-8 mb-2"
              />
              

              <h3 className="font-banner text-sm font-bold text-gray-900">
                {product.title}
              </h3>

              <p className="mt-3 font-banner text-xs leading-5 text-gray-500">
                {product.description}
              </p>

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
            )
          })}
        </div>

      </div>
    </section>
  );
}