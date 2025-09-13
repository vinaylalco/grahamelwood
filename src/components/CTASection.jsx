import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-center" id="cta">
      <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
      <p className="mb-8 text-lg">Sign up for updates and announcements.</p>
      <motion.a
        href="https://preview.mailerlite.io/forms/1208458/165418246809323435/share"
        className="inline-block px-8 py-4 bg-black text-white font-semibold rounded"
        whileHover={{ scale: 1.05 }}
      >
        Join Now
      </motion.a>
    </section>
  );
}
