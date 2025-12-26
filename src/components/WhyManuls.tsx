import CertificateIcon from "./icons/CertificateIcon";
import CheckIcon from "./icons/CheckIcon";
import ChartIcon from "./icons/ChartIcon";

export default function WhyManuls() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute blur-[100px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,225,236,0.06) 0%, rgba(110,133,192,0.07) 100%)",
          width: "1254px",
          height: "306px",
          top: "252px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
              Why
            </span>{" "}
            Manuls
          </h2>
          <p className="text-text-accent text-lg max-w-[740px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Decorated List */}
        <div className="space-y-14 mb-16 max-w-[1280px] mx-auto">
          {/* First Row */}
          <div className="flex items-center gap-12">
            <div className="flex-1 bg-bg-dark rounded-lg p-6 border border-stroke shadow-sm">
              <h3 className="text-white uppercase mb-2">Magento Development</h3>
              <p className="text-text-main text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-4 border-stroke" />
              <div className="w-1 h-28 bg-stroke" />
              <div className="w-8 h-8 rounded-full border-4 border-stroke" />
            </div>

            <div className="flex-1 bg-bg-dark rounded-lg p-6 border border-stroke shadow-sm">
              <h3 className="text-white uppercase mb-2">Magento Development</h3>
              <p className="text-text-main text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-12">
            <div className="flex-1 bg-bg-dark rounded-lg p-6 border border-stroke shadow-sm">
              <h3 className="text-white uppercase mb-2">Magento Development</h3>
              <p className="text-text-main text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-4 border-stroke" />
              <div className="w-1 h-28 bg-stroke" />
              <div className="w-8 h-8 rounded-full border-4 border-stroke" />
            </div>

            <div className="flex-1 bg-bg-dark rounded-lg p-6 border border-stroke shadow-sm">
              <h3 className="text-white uppercase mb-2">Magento Development</h3>
              <p className="text-text-main text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="border border-stroke rounded-lg p-4 flex flex-wrap gap-8 justify-center">
          <FeatureBlock
            icon={<CertificateIcon className="w-12 h-12" />}
            title="Experienced And Certified Team"
            description="We have a lot of experience 10 years super duper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <FeatureBlock
            icon={<CheckIcon className="w-12 h-12" />}
            title="Result oriented development"
            description="We have a lot of experience 10 years super duper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <FeatureBlock
            icon={<ChartIcon className="w-12 h-12" />}
            title="Experienced And Certified Team"
            description="We have a lot of experience 10 years super duper. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 min-w-[320px] max-w-sm p-4 flex flex-col items-center text-center gap-2">
      {icon}
      <h3 className="text-white text-lg">{title}</h3>
      <p className="text-text-main text-sm">{description}</p>
    </div>
  );
}
