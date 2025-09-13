import { motion, useViewportScroll, useTransform } from 'framer-motion';

const bgImage = '../src/assets/BitcoinHollwood_resize.png';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">Bitcoin Hollwood</h1>
        <h2 className="text-xl md:text-xl">Entertain and educate.</h2>
        <p className="text-xl md:text-xl">Fair and transparent pay for content creators with Bitcoin.</p>
        <p className="text-sm md:text-xl">Scripted and unscripted entertainment with Bitcoin themes.</p>
        <a
          href="#features"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors m-3"
        >
          Learn More
        </a>

        <a
          href="#newsletter"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors m-3"
        >
          Newsletter
        </a>

        <a
          href="#testimonials"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors m-3"
        >
          Testimonials
        </a>

      </div>
    </section>
  );
}
