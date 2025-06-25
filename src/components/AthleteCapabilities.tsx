import { motion } from 'framer-motion';
import { ClipboardText, ChartLineUp, ChatTeardropText } from '@phosphor-icons/react';

const AthleteCapabilities = () => {
  const features = [
    {
      icon: <ClipboardText size={32} weight="duotone" className="text-blue-600" />,
      title: 'Progress Tracking',
      description: 'See your progress with detailed stats and charts for every performance metric.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <ChartLineUp size={32} weight="duotone" className="text-emerald-600" />,
      title: 'Personal Goals',
      description: 'Set and track your personal goals and achievements.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <ChatTeardropText size={32} weight="duotone" className="text-purple-600" />,
      title: 'Coach Communication',
      description: 'Communicate directly with your coach and get feedback on your performance.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 drop-shadow-lg">Athlete Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our platform can help you improve your personal performance
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.97, rotate: 2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}></div>
              <div className="relative p-8 glass-effect rounded-2xl card-hover overflow-hidden border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 shadow-2xl">
                <div className="relative z-10">
                  <div className="mb-4 animate-bounce-slow group-hover:animate-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 gradient-text drop-shadow-sm">{feature.title}</h3>
                  <p className="text-gray-700 font-medium drop-shadow-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteCapabilities;