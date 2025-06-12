import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4 md:mb-0"
            >
              Delhia Gbelidji
            </motion.div>
            <div className="flex space-x-6">
              <SocialLink href="https://github.com/DelhiaGbelidji" label="GitHub" />
              <SocialLink href="https://linkedin.com/in/yourusername" label="LinkedIn" />
              <SocialLink href="https://twitter.com/yourusername" label="Twitter" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Delhia Gbelidji. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="text-gray-400 hover:text-white transition-colors"
  >
    {label}
  </motion.a>
);

export default Footer; 