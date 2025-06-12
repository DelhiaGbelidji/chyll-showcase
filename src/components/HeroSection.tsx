const HeroSection = () => (
  <section
    id="hero"
    className="min-h-[70vh] flex flex-col items-center justify-center bg-white pt-20"
  >
    <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight mb-6">
      <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent pb-2">
        Hey, I'm Delhia
      </span>
      <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
        a Fullstack Developer apprentice
      </span>
      <span className="block bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent pb-2">
        Why recruit me?
      </span>
    </h1>
    <p className="text-lg text-gray-500 text-center mb-8 max-w-xl">
      I design performant and maintainable front-end applications to help you
      deliver fast, reliable, and scalable products.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#chyll"
        className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:opacity-90 transition"
      >
        Why Chyll?
        <span className="ml-2">🔗</span>
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center px-6 py-3 border border-black text-black rounded-lg font-semibold bg-white hover:bg-gray-50 transition"
      >
        Contact Me
        <span className="ml-2">→</span>
      </a>
    </div>
  </section>
);

export default HeroSection;
