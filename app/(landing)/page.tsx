import Logo from "@/app/components/commons/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <section 
        className="flex justify-center items-center w-full min-h-screen bg-amber-200 text-amber-950">
        Hero
      </section>
      <section
        className="flex justify-center items-center w-full min-h-screen bg-amber-700 text-amber-950"
        id="features"
      >
        Features
      </section>
      <section
        className="flex justify-center items-center w-full min-h-screen bg-blue-600 text-blue-200"
        id="pricing"
      >
        Pricing
      </section>
      <section
        className="flex justify-center items-center w-full min-h-screen bg-emerald-500 text-emerald-200"
        id="testimonials"
      >
        Testimonials
      </section>
      <section
        className="flex justify-center items-center w-full min-h-screen bg-red-600 text-red-200"
        id="blog"
      >
        Blog
      </section>
      <section
        className="flex justify-center items-center w-full min-h-screen bg-purple-600 text-purple-200"
        id="contact"
      >
        Contact
      </section>
    </div>
  );
}
