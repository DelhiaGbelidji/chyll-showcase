import { motion } from "framer-motion";

const ChyllSection = () => {
  return (
    <section
      id="chyll"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why I Want to Join chyll.ai ?
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm excited about the opportunity to join Chyll.ai because of your
              innovative approach to transforming B2B prospecting. Your focus on
              streamlining lead generation and enriching data to let teams focus
              on meaningful conversations strongly aligns with my passion for
              building purposeful and user-centric technology.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With my experience in full-stack development and modern web
              technologies, I can help design intuitive, efficient, and scalable
              tools that simplify complex workflows. I'm especially interested
              in creating seamless user interfaces that empower sales and
              marketing teams to work smarter, not harder.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm eager to contribute to your vision, collaborate with your
              team, and support chyll.ai’s mission to redefine how companies
              connect with their prospects. My technical skills, combined with
              my dedication to solving real business problems through thoughtful
              UX, make me confident I could bring value to your team.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChyllSection;
