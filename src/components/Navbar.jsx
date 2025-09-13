import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-xl font-bold">Logo</a>
        <div className="space-x-4">
          <a href="/features" className="hover:underline">Features</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
