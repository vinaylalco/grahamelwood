import { motion, useViewportScroll, useTransform } from 'framer-motion';

const bgImage =
  'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1400&q=80';

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
        <h1 className="text-5xl md:text-7xl font-bold">Cinematic Showcase</h1>
        <p className="text-xl md:text-2xl">Experience projects in an Apple TV style.</p>
        <a
          href="/signup"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
