import { motion, useViewportScroll, useTransform } from 'framer-motion';
// const logoImage = '../src/assets/bitcoin_hollywood_logo.svg';
// const y = useTransform(scrollY, [0, 300], [0, 100]);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <img 
          src="/bitcoin_hollywood_logo.svg" 
          alt="Bitcoin Hollywood Logo" 
          className="h-16 w-auto" 
        />
      </div>
    </nav>
  );
}
