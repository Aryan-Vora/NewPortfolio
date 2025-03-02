import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Aryan Vora
            </Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/aryanvora1/"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aryan-vora"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:voraaryan1@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
