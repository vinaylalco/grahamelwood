import { motion, useViewportScroll, useTransform } from 'framer-motion';

const features = [
  {
    image:
      '/FeatureFilms.png',
    title: 'Feature Films',
    description: 'Drama, Comedy, Documentary, Action, Animation.',
  },
  {
    image:
      '/ComedyShow.png',
    title: 'Stand Up Comedy',
    description: 'Stand up comedy specials taped in front of a live audience.',
  },
  {
    image:
      '/tvShows.png',
    title: 'TV Shows',
    description: 'Drama, Comedy, Documentary, Action, Animation.',
  },
  {
    image:
      '/LiveEvents.png',
    title: 'Live Events',
    description: 'Live Comedy Shows, Podcasts, Gameshows.',
  },
  {
    image:
      '/GameShows.png',
    title: 'Game Shows',
    description: 'Old School gameshows with a new twist.',
  }
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
