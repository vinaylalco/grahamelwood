import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'This product changed my life.', name: 'Alice' },
  { quote: 'A must-have for professionals.', name: 'Bob' },
  { quote: 'Incredible experience and support.', name: 'Carol' },
];

export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="mb-4">“{t.quote}”</p>
            <p className="font-semibold">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
