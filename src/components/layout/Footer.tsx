import Image from 'next/image'
import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  FolderCheck,
  Users,
  CalendarDays,
  Globe,
  UsersRound,
  ChartColumn,
} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-footer-background">

{/* ===================================================== */}
{/* CTA SECTION */}
{/* ===================================================== */}

<div className="relative mx-auto w-full max-w-[1024px] px-4 sm:px-6 lg:px-8">

  <div
    className="
      relative
      z-10
      -translate-y-10
      min-h-[180px]
      overflow-hidden
      rounded-2xl
      bg-white
      shadow-[0_12px_40px_rgba(0,0,0,0.18)]

      sm:-translate-y-12
      sm:min-h-[160px]

      lg:-translate-y-16
      lg:h-[150px]
      lg:min-h-0
    "
  >

    {/* ================= RIGHT IMAGE ================= */}

    <div
      className="
        absolute
        inset-y-0
        right-0
        hidden
        w-[40%]
        overflow-hidden
        lg:block
      "
    >
      <Image
        src="/images/home/footer_overlay.png"
        alt="Business city"
        fill
        sizes="40vw"
        className="object-cover"
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/60
          to-transparent
        "
      />
    </div>


    {/* ================= CONTENT ================= */}

    <div
      className="
        relative
        z-10
        flex
        min-h-[180px]
        items-center
        px-5
        py-6

        sm:min-h-[160px]
        sm:px-8
        sm:py-5

        lg:h-full
        lg:min-h-0
        lg:px-12
        lg:py-0
      "
    >

      {/* ================= LEFT CONTENT ================= */}

      <div
        className="
          flex
          w-full
          flex-col
          gap-5

          sm:flex-row
          sm:items-center
          sm:justify-between

          lg:w-[70%]
        "
      >

        {/* Text */}

        <div>
          <h2
            className="
              font-banner
              text-lg
              font-semibold
              capitalize
              leading-6
              text-text-primary

              sm:text-xl

              lg:text-2xl
            "
          >
            Ready to transform your business?
          </h2>

          <p
            className="
              mt-1
              font-banner
              text-xs
              text-gray-500

              sm:text-sm

              lg:text-base
            "
          >
            Let's build the future together.
          </p>
        </div>


        {/* Button */}

        <div className="shrink-0">
          <button
            className="
              rounded-lg
              bg-text-primary
              px-6
              py-2.5
              font-banner
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg

              sm:px-7
              sm:py-3

              lg:px-8
              lg:py-3
              lg:text-base
            "
          >
            Let's Connect
          </button>
        </div>

      </div>

    </div>

  </div>

</div>


      {/* ===================================================== */}
      {/* MAIN FOOTER */}
      {/* ===================================================== */}

      <div className="px-4 pb-5 pt-0 sm:px-6 lg:px-12 xl:px-20">

      <div className="mx-auto w-full max-w-[1440px]">
                <div
          className="
          grid
          grid-cols-1
          gap-10
          sm:grid-cols-2
          lg:grid-cols-[1.5fr_1fr_1.2fr_1fr_1.2fr]
        "
        >

          {/* ================================================= */}
          {/* COMPANY */}
          {/* ================================================= */}

          <div>

            <Image
              src="/images/logo/logo.png"
              alt="Conacent"
              width={180}
              height={60}
              className="h-auto w-40"
            />

            <p
              className="
              mb-4
              mt-5
              max-w-xs
              font-banner
              text-sm
              leading-6
              text-white/70
            "
            >
              Conacent is a global IT solutions and consulting company
              that empowers businesses to accelerate growth and create
              lasting value.
            </p>


            {/* Social icons */}

            <div className="flex gap-3">

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="h-4 w-4 text-white"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="h-4 w-4 text-white"
                />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-4 w-4 text-white"
                />
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
              "
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="h-4 w-4 text-white"
                />
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}

          <FooterLinks
            title="Quick Links"
            links={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Solutions", href: "/solutions" },
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/contact" },
            ]}
          />


          {/* SERVICES */}

          <FooterLinks
            title="Services"
            links={[
              {
                label: "Digital Transformation",
                href: "/services/digital-transformation",
              },
              {
                label: "Enterprise Solutions",
                href: "/services/enterprise-solutions",
              },
              {
                label: "Cloud Services",
                href: "/services/cloud-services",
              },
              {
                label: "Data & Analytics",
                href: "/services/data-analytics",
              },
              {
                label: "AI & Automation",
                href: "/services/ai-automation",
              },
              {
                label: "Application Development",
                href: "/services/application-development",
              },
            ]}
          />


          {/* RESOURCES */}

          <FooterLinks
            title="Resources"
            links={[
              { label: "Blogs", href: "/blogs" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Whitepapers", href: "/whitepapers" },
              { label: "News & Events", href: "/news" },
              { label: "Support", href: "/support" },
            ]}
          />


          {/* CONTACT */}

          <div>

            <h3 className="font-banner text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">

                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white" />

                <p className="font-banner text-sm text-white/70 capitalize">
                  Conacent Solutions
                  <br />
                  kolkata ,west bengal
                </p>

              </div>


              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 shrink-0 text-white" />

                <p className="font-banner text-sm text-white/70">
                  +971 4 256 1010
                </p>

              </div>


              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 shrink-0 text-white" />

                <p className="font-banner text-sm text-white/70">
                  info@conacent.com
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>


        {/* ================================================= */}
        {/* BOTTOM FOOTER */}
        {/* ================================================= */}

        <div
          className="
          mt-10
          flex
          w-full
          flex-col
          gap-4
          border-t
          border-white/20
          pt-5
          text-sm
          text-white/60
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >

          <p>
            © 2026 Conacent. All Rights Reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}


type FooterLink = {
  label: string;
  href: string;
};

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="font-banner text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-banner text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
