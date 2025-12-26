export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(175,35,100,0.16) 0%, rgba(168,82,166,0.02) 100%)",
          width: "1030px",
          height: "648px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center flex flex-col items-center gap-4">
        <p className="text-text-title text-4xl font-semibold">
          We develop - you enjoy
        </p>

        <h1 className="text-6xl font-bold gradient-text">MANULS TEAM</h1>

        <p className="text-text-accent text-lg font-semibold">
          Adobe Commerce, Hyva and Strapi Development
        </p>

        <div className="flex gap-8 mt-8">
          <button className="px-6 py-3 bg-secondary text-primary text-base font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Contact Us
          </button>
          <button className="px-6 py-3 text-text-title text-base font-semibold hover:opacity-80 transition-opacity">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
