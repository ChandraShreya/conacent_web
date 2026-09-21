import React from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const offices = [
  {
    id: 1,
    title: "India",
    address:
      "Conacent Consulting Pvt. Ltd.\nCF-90, CF Block, Sector 1, Salt Lake City, Kolkata-700064, West Bengal, India.",
    phone: "+91 714 256 1010",
    email: "info@conacent.com",
  },
];

export default function OurOffices() {
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-lg">

      {/* Heading */}
      <h2 className="mb-6 font-banner text-xl font-bold text-text-primary">
        Our Offices
      </h2>

      {/* Office Information */}
      <div className="space-y-5">

        {offices.map((office) => (
          <div key={office.id}>

            {/* Location */}
            <div className="flex gap-3">

              <MapPin className="mt-1 h-5 w-5 shrink-0 text-text-primary" />

              <div>
                <h3 className="font-banner text-sm font-bold text-text-primary">
                  {office.title}
                </h3>

                <p className="mt-1 whitespace-pre-line font-banner text-sm leading-5 text-gray-600">
                  {office.address}
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="mt-4 flex gap-3">

              <Phone className="h-5 w-5 shrink-0 text-text-primary" />

              <p className="font-banner text-sm text-gray-600">
                {office.phone}
              </p>

            </div>

            {/* Email */}
            <div className="mt-4 flex gap-3">

              <Mail className="h-5 w-5 shrink-0 text-text-primary" />

              <p className="font-banner text-sm text-gray-600">
                {office.email}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Map */}
      <div className="mt-6 min-h-[200px] flex-1 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.586008014145!2d88.41392547507846!3d22.594582079476062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ec0518a835%3A0x51c57c1dc5b3b024!2sConacent%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1789019550591!5m2!1sen!2sin"
          loading="lazy"
          className="h-full min-h-[200px] w-full border-0"
        />
      </div>

    </div>
  );
}