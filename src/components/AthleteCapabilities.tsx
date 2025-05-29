import { motion } from 'framer-motion';
import { ClipboardText, ChartLineUp, ChatTeardropText } from '@phosphor-icons/react';

const AthleteCapabilities = () => {
  const features = [
    {
      icon: <ClipboardText size={32} weight="duotone" className="text-blue-600" />,
      title: 'Παρακολούθηση Προόδου',
      description: 'Δείτε την πρόοδό σας με λεπτομερή στατιστικά και γραφήματα για κάθε μέτρο απόδοσης.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <ChartLineUp size={32} weight="duotone" className="text-emerald-600" />,
      title: 'Προσωπικά Στόχοι',
      description: 'Ορίστε και παρακολουθήστε τους προσωπικούς σας στόχους και τις επιδόσεις σας.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <ChatTeardropText size={32} weight="duotone" className="text-purple-600" />,
      title: 'Επικοινωνία με Προπονητή',
      description: 'Επικοινωνήστε άμεσα με τον προπονητή σας και λάβετε ανατροφοδότηση για την απόδοσή σας.',
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
          <h2 className="text-4xl font-bold gradient-text mb-4">Δυνατότητες Αθλητή</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ανακαλύψτε πώς η πλατφόρμα μας μπορεί να βοηθήσει στην βελτίωση της προσωπικής σας απόδοσης
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}></div>
              <div className="relative p-8 glass-effect rounded-2xl card-hover">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteCapabilities;