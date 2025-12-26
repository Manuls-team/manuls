export default function ContactForm() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
              Let's
            </span>{" "}
            talk
          </h2>
          <p className="text-text-accent text-lg max-w-[740px] mx-auto">
            Let us hear about your project, and we'll contact you soon.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-[512px] px-4 py-6 mx-auto space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1.5">
              <label className="text-white text-sm">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-bg-dark border border-primary rounded-lg px-4 py-3 text-text-main placeholder:text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-sm transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-white text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-bg-dark border border-primary rounded-lg px-4 py-3 text-text-main placeholder:text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-sm transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="you@yourcompany.com"
              className="w-full bg-bg-dark border border-secondary rounded-lg px-4 py-3 text-text-main placeholder:text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-[0px_0px_10px_0px_rgba(5,225,236,0.25)] transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-white text-sm">Phone</label>
            <input
              type="tel"
              placeholder="+1 (000) 000-00-00"
              className="w-full bg-bg-dark border border-primary rounded-lg px-4 py-3 text-text-main placeholder:text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-sm transition-colors"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-white text-sm">Message</label>
            <textarea
              rows={5}
              placeholder=""
              className="w-full bg-bg-dark border border-primary rounded-lg px-4 py-3 text-text-main placeholder:text-text-main focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-sm resize-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-secondary to-tertiary-alt text-primary py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send your inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
