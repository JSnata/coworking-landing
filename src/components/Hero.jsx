import React from "react";
import SelectBox from "./ui/SelectBox";
import DateInput from "./ui/DateInput";
import PrimaryButton from "./ui/PrimaryButton";
import ScrollDownButton from "./ui/ScrollDownButton";

const locations = [
  {
    value: "",
    label: "Select Location",
    disabled: true,
    selected: true,
    hidden: true,
  },
  { value: "wroclaw", label: "Wrocław" },
  { value: "warsaw", label: "Warszawa" },
  { value: "gdansk", label: "Gdańsk" },
];

const Hero = () => {
  return (
    <section className="pt-navbar min-h-screen flex flex-col justify-center text-center bg-hero bg-cover bg-center">
      <div className="container">
        <p className="text-sm uppercase tracking-widest text-brandGreen mb-8">
          Shared space in your town
        </p>

        <h1 className="text-4xl md:text-[56px] font-medium tracking-tight md:leading-snug text-white mb-10">
          Rent desk space in a <br />
          shared office environment
        </h1>

        <form className="bg-white rounded-lg shadow-md px-3 py-5 flex flex-col md:flex-row items-stretch items-center justify-center gap-y-4 md:gap-x-7 max-w-3xl mx-auto mb-6">
          <div className="w-full md:flex-1 ">
            <SelectBox options={locations} />
          </div>
          <div className="hidden md:block w-px bg-gray-200 self-stretch" />
          <div className="w-full md:flex-1">
            <DateInput />
          </div>
          <div className="w-full md:flex-1">
            <PrimaryButton type="submit">Search Place</PrimaryButton>
          </div>
        </form>

        <p className="text-sm text-white/70">Take virtual tour of our spaces</p>

        <div className="mt-6">
          <ScrollDownButton targetId="popular-locations" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
