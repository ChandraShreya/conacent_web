"use client";
import * as yup from "yup"

import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { log } from "console";

const applicationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^[0-9]{10}$/,
      "Please enter a valid 10 digit phone number"
    ),

  experience: yup
    .string()
    .required("Experience is required"),

  location: yup
    .string()
    .required("Location is required"),

  coverLetter: yup
    .string()
    .optional(),

  cv: yup
    .mixed<FileList>()
    .test(
      "fileRequired",
      "Please upload your CV",
      (value) => !!value && value.length > 0
    )
    .test(
      "fileType",
      "Only PDF, DOC or DOCX files are allowed",
      (value) => {
        if (!value || value.length === 0) return true;

        const file = value[0];

        return [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type);
      }
    )
    .test(
      "fileSize",
      "CV must be less than 5MB",
      (value) => {
        if (!value || value.length === 0) return true;

        return value[0].size <= 5 * 1024 * 1024;
      }
    ),
});

type ApplicationFormData = yup.InferType<typeof applicationSchema>;

interface ApplicationModalProps {
  job: {
    id: number;
    title: string;
  };
  onClose: () => void;
}

export default function ApplicationModal({
  job,
  onClose,
}: ApplicationModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationFormData) => {
    // console.log("Job ID:", job.id);
    // console.log("Application Data:", data);
    console.log("ggedsw");

  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="
        relative
        max-h-[90vh]
        w-full
        max-w-2xl
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-xl
      "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-scroll max-h-[90vh] overflow-y-auto p-8">

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="
            absolute
            right-5
            top-5
            rounded-full
            p-1
            text-gray-500
            transition
            hover:bg-gray-100
            hover:text-black
          "
            aria-label="Close application form"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Heading */}
          <div className="mb-4 pr-8">
            <h2 className="font-banner text-2xl font-semibold text-text-primary">
              Apply for {job.title}
            </h2>

            <p className="mt-2 font-banner text-sm text-gray-500">
              Please fill in your details and upload your CV.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(
              (data) => {
                console.log("SUBMIT WORKING");
                console.log(data);
              },
              (errors) => {
                console.log("VALIDATION ERRORS:", errors);
              }
            )}
            className="space-y-5"
          >
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName")}
                className="w-full rounded-lg font-banner border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full rounded-lg border border-gray-300 font-banner px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                placeholder="Enter 10 digit phone number"
                {...register("phone")}
                className="w-full rounded-lg border border-gray-300 font-banner px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Years of Experience{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                min="0"
                placeholder="e.g. 3"
                {...register("experience")}
                className="w-full rounded-lg border border-gray-300 font-banner px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.experience && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Current Location{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Kolkata"
                {...register("location")}
                className="w-full rounded-lg border border-gray-300 font-banner px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.location && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Cover Letter */}
            {/* <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Cover Letter
              </label>

              <textarea
                rows={4}
                placeholder="Write something about yourself..."
                {...register("coverLetter")}
                className="w-full resize-none rounded-lg border border-gray-300 font-banner px-4 py-3 text-sm outline-none transition focus:border-text-primary"
              />

              {errors.coverLetter && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.coverLetter.message}
                </p>
              )}
            </div> */}

            {/* CV */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 font-banner">
                Upload CV <span className="text-red-500">*</span>
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("cv")}
                className="w-full cursor-pointer rounded-lg border border-gray-300 p-3 text-sm font-banner"
              />

              <p className="mt-1 text-xs text-gray-500 font-banner">
                PDF, DOC or DOCX · Maximum 5MB
              </p>

              {errors.cv && (
                <p className="mt-1 text-sm text-red-500 font-banner">
                  {errors.cv.message as string}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              onClick={() => console.log("BUTTON CLICKED")}
              className="w-full rounded-lg bg-text-primary px-6 py-3 font-banner text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}