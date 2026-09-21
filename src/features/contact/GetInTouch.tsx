"use client";

import * as yup from "yup";

export default function GetInTouch() {
  const contactSchema = yup.object({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters"),

    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });

  return (
    <div className="h-full w-full rounded-xl border border-gray-100 bg-white p-6 shadow-lg">

      <h2 className="mb-6 font-banner text-xl font-bold text-text-primary">
        Get In Touch
      </h2>

      <form className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Your Name*
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="
              w-full
              rounded-md
              border
              border-gray-200
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Email*
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="
              w-full
              rounded-md
              border
              border-gray-200
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Phone Number*
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="
              w-full
              rounded-md
              border
              border-gray-200
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          />
        </div>

        {/* Company */}
        <div>
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Company Name*
          </label>

          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            className="
              w-full
              rounded-md
              border
              border-gray-200
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          />
        </div>

        {/* Country */}
        <div>
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Country*
          </label>

          <select
            name="country"
            className="
              w-full
              rounded-md
              border
              border-gray-200
              bg-white
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block font-banner text-sm text-gray-700">
            Your Message*
          </label>

          <textarea
            name="message"
            rows={4}
            placeholder="Enter your message"
            className="
              w-full
              resize-none
              rounded-md
              border
              border-gray-200
              px-3
              py-2.5
              font-banner
              text-sm
              outline-none
              transition-colors
              focus:border-text-primary
            "
          />
        </div>

        {/* Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="
              w-full
              rounded-md
              bg-text-primary
              py-2.5
              font-banner
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:opacity-90
            "
          >
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
}