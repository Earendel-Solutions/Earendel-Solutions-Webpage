"use client";

import { useForm } from "react-hook-form";

type FormType = {
  name: string;
  email: string;
  service: string;
  description: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    defaultValues: {
      service: "",
    },
  });

  const onSubmit = async (data: FormType) => {
    console.log("Form Data -> ", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Form sent");
  };

  return (
    <div  className="border border-white rounded-3xl min-h-[550px] p-8  text-white">
      <div className="space-y-3 mb-8">
        <h3 className="text-2xl font-bold text-white">Project Consultation</h3>

        <p className="text-[#c2c6d6]">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "At least 2 characters" },
          })}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
        />
        {errors.name && (
          <p className="text-red-400 text-sm font-bold">
            {errors.name.message}
          </p>
        )}
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
        />
        {errors.email && (
          <p className="text-red-400 text-sm font-bold">
            {errors.email.message}
          </p>
        )}
        <select
          {...register("service", {
            required: "Please select a service",
          })}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
        >
          <option value="" disabled className="bg-black/90 text-white">
            Select Service
          </option>

          <option className="bg-black/90 text-white">UI/UX Design</option>
          <option className="bg-black/90 text-white">AI Solutions</option>
          <option className="bg-black/90 text-white">Automation</option>
          <option className="bg-black/90 text-white">Consultation</option>
          <option className="bg-black/90 text-white">Web Application</option>
          <option className="bg-black/90 text-white">Other</option>
          <option className="bg-black/90 text-white">
            Website Development
          </option>
        </select>
        {errors.service && (
          <p className="text-red-400 text-sm font-bold">
            {errors.service.message}
          </p>
        )}

        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: { value: 10, message: "At least 10 characters" },
          })}
          rows={6}
          placeholder="Describe your project, goals, requirements, or challenges..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none resize-none focus:border-purple-500"
        />
        {errors.description && (
          <p className="text-red-400 text-sm font-bold">
            {errors.description.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-all hover:bg-purple-500"
        >
          {isSubmitting ? "Sending..." : "Book a Free Consultation"}
        </button>
      </form>
    </div>
  );
}
