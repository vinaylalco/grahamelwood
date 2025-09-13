import { motion, useViewportScroll, useTransform } from 'framer-motion';

const features = [
  {
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80',
    title: 'Feature One',
    description: 'An amazing feature that does cool things.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80',
    title: 'Feature Two',
    description: 'Another incredible feature for your users.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    title: 'Feature Three',
    description: 'This feature will blow your mind.',
  },
];

export default function Features() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="py-20" id="features">
      <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
      <div className="overflow-x-auto flex space-x-6 px-4 snap-x snap-mandatory">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="snap-center flex-shrink-0 w-72 bg-gray-800 rounded-lg p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="mb-4 rounded"
              style={{ y }}
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
