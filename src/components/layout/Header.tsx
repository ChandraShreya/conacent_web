"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full  bg-nav-background">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={180}
            height={180}
            className="h-auto w-[200px] sm:w-[140px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 min-[990px]:flex min-sm:gap-4 min-lg:gap-6 min-xl:gap-10">

          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text-primary transition-all duration-200 hover:text-xl hover:font-bold hover:text-text-nav"
            >
              {link.name}
            </Link>
          ))}

          {/* Solutions Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-lg font-medium text-text-primary transition-all duration-200 hover:text-xl hover:font-bold hover:text-text-nav"
            >
              Solutions
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 ${isSolutionsOpen ? "block" : "hidden"
                }`}
            >
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">

                <Link
                  href="/products"
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-text-primary
  transition-all duration-200
  hover:text-xl
  hover:font-bold
  hover:text-text-nav"
                >
                  Products
                </Link>

                <Link
                  href="/caseStudy"
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-text-primary
  transition-all duration-200
  hover:text-xl
  hover:font-bold
  hover:text-text-nav"
                >
                  Case Studies
                </Link>

              </div>
            </div>
          </div>

          {/* Remaining Links */}
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
  text-lg font-medium text-text-primary
  transition-all duration-200
  hover:text-xl
  hover:font-bold
  hover:text-text-nav
"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Connect button - Desktop */}
          <button
            className="hidden rounded-lg bg-[var(--color-text-primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 min-[990px]:block"
          >
            Let's connect
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
  flex
  h-11
  w-11
  items-center
  justify-center
  rounded-full
  text-text-primary
  transition-colors
  duration-200
  hover:bg-black/5
  min-[990px]:hidden
"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h-16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="
        fixed
        inset-0
        z-40
        bg-black/40
        backdrop-blur-[2px]
        min-[990px]:hidden
      "
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className="
        fixed
        right-0
        top-0
        z-50
        flex
        h-dvh
        w-[85%]
        max-w-[380px]
        flex-col
        overflow-y-auto
        bg-nav-background
        shadow-2xl
        min-[990px]:hidden
      "
          >

            {/* Sidebar Header */}
            <div
              className="
          flex
          h-20
          shrink-0
          items-center
          justify-between
          border-b
          border-black/10
          px-5
        "
            >

              {/* Logo */}
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={150}
                height={60}
                className="h-auto w-[135px]"
              />

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            text-text-primary
            transition-colors
            duration-200
            hover:bg-black/5
          "
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

            </div>


            {/* Navigation */}
            <nav className="flex flex-1 flex-col px-5 py-4">

              {/* First Links */}
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
              border-b
              border-black/10
              py-5
              text-base
              font-medium
              text-text-primary
              transition-colors
              duration-200
              hover:text-text-nav
            "
                >
                  {link.name}
                </Link>
              ))}


              {/* Solutions */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="
              flex
              w-full
              items-center
              justify-between
              py-5
              text-base
              font-medium
              text-text-primary
            "
                >

                  <span>Solutions</span>

                  <ChevronDown
                    size={22}
                    strokeWidth={1.8}
                    className={`
                transition-transform
                duration-300
                ${isSolutionsOpen ? "rotate-180" : ""}
              `}
                  />

                </button>


                {/* Solutions Dropdown */}
                <div
                  className={`
              grid
              transition-[grid-template-rows]
              duration-300
              ease-in-out
              ${isSolutionsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
            `}
                >
                  <div className="overflow-hidden">

                    <div className="mb-4 ml-2 flex flex-col border-l-2 border-text-primary/20 pl-5">

                      <Link
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="
                    py-3
                    text-sm
                    font-medium
                    text-text-primary
                    transition-colors
                    hover:text-text-nav
                  "
                      >
                        Products
                      </Link>

                      <Link
                        href="/case-studies"
                        onClick={() => setIsMenuOpen(false)}
                        className="
                    py-3
                    text-sm
                    font-medium
                    text-text-primary
                    transition-colors
                    hover:text-text-nav
                  "
                      >
                        Case Studies
                      </Link>

                    </div>

                  </div>
                </div>

              </div>


              {/* Remaining Links */}
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
              border-b
              border-black/10
              py-5
              text-base
              font-medium
              text-text-primary
              transition-colors
              duration-200
              hover:text-text-nav
              last:border-b-0
            "
                >
                  {link.name}
                </Link>
              ))}


              {/* Connect Button */}
              <button
                className="
            mt-6
            w-full
            rounded-lg
            bg-[var(--color-text-primary)]
            px-6
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
          "
              >
                Let's connect
              </button>

            </nav>

          </div>
        </>
      )}
    </header>
  );
}