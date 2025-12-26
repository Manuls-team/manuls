import FooterLogoIcon from "./icons/FooterLogoIcon";

export default function Footer() {
  return (
    <footer className="border-t border-stroke py-8 px-4">
      <div className="max-w-[1512px] mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-[113.744px] h-24">
          <FooterLogoIcon className="w-full h-full text-text-main" />
        </div>

        {/* Copyright */}
        <p className="text-text-main text-sm text-center">
          © 2024 Manuls. All rights reserved.
        </p>

        {/* Legal */}
        <p className="text-sm text-center">
          <span className="text-text-main">
            This site is protected by reCAPTCHA and the Google{" "}
          </span>
          <a
            href="https://policies.google.com/privacy"
            className="text-white underline hover:text-white/80 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-text-main"> and </span>
          <a
            href="https://policies.google.com/terms"
            className="text-white underline hover:text-white/80 transition-colors"
          >
            Terms of Service
          </a>
          <span className="text-text-main"> apply</span>.
        </p>
      </div>
    </footer>
  );
}
