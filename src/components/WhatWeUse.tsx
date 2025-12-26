import ReactIcon from "./icons/ReactIcon";
import VueIcon from "./icons/VueIcon";
import VuetifyIcon from "./icons/VuetifyIcon";
import NextIcon from "./icons/NextIcon";
import NuxtIcon from "./icons/NuxtIcon";
import TailwindIcon from "./icons/TailwindIcon";
import SassIcon from "./icons/SassIcon";
import PostCSSIcon from "./icons/PostCSSIcon";
import GraphQLIcon from "./icons/GraphQLIcon";
import AdobeCommerceIcon from "./icons/AdobeCommerceIcon";
import HyvaIcon from "./icons/HyvaIcon";
import StrapiIcon from "./icons/StrapiIcon";

export default function WhatWeUse() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute blur-[100px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,225,236,0.06) 0%, rgba(73,69,255,0.1) 100%)",
          width: "1254px",
          height: "306px",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase">
            <span className="bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
              What
            </span>{" "}
            we use
          </h2>
        </div>

        {/* Adobe Commerce Section */}
        <div className="flex items-center gap-8 mb-16 justify-center">
          <div className="bg-bg-dark rounded-lg p-6 max-w-md">
            <h3 className="text-text-title text-2xl mb-3">
              Adobe Commerce (Magento)
            </h3>
            <p className="text-text-main text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-stroke" />
            <div className="w-24 h-0.5 bg-stroke" />
          </div>

          <div className="flex items-center gap-8">
            <AdobeCommerceIcon className="h-12" />
            <HyvaIcon className="h-12" />
          </div>
        </div>

        {/* Strapi Section */}
        <div className="flex items-center gap-8 mb-16 justify-center">
          <div className="flex items-center justify-center p-6">
            <StrapiIcon className="h-12" />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-24 h-0.5 bg-stroke" />
            <div className="w-4 h-4 rounded-full border-2 border-stroke" />
          </div>

          <div className="bg-bg-dark rounded-lg p-6 max-w-md">
            <h3 className="text-text-title text-2xl mb-3">Strapi</h3>
            <p className="text-text-main text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border border-stroke rounded-lg p-8 flex flex-wrap items-center justify-center gap-12">
          <ReactIcon className="h-8" />
          <VueIcon className="h-8" />
          <VuetifyIcon className="w-8 h-8" />
          <NextIcon className="h-[26px]" />
          <NuxtIcon className="h-[26px]" />
          <TailwindIcon className="h-8" />
          <SassIcon className="h-8" />
          <PostCSSIcon className="w-8 h-8" />
          <GraphQLIcon className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
