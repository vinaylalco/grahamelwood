import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-center" id="cta">
      <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
      <p className="mb-8 text-lg">Sign up today and start your journey.</p>
      <motion.a
        href="/signup"
        className="inline-block px-8 py-4 bg-black text-white font-semibold rounded"
        whileHover={{ scale: 1.05 }}
      >
        Join Now
      </motion.a>
    </section>
  );
}
