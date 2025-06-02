import { motion } from 'framer-motion';
import { UsersThree, ClipboardText, ChartLineUp, Brain, ListChecks } from '@phosphor-icons/react';

const CoachCapabilities = () => {
  const features = [
    {
      icon: <UsersThree size={32} weight="duotone" className="text-purple-600" />,
      title: 'Διαχείριση Ομάδας',
      description: 'Διαχειριστείτε εύκολα τους αθλητές σας, παρακολουθήστε την πρόοδό τους και δημιουργήστε προσαρμοσμένα προγράμματα προπόνησης.',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <ClipboardText size={32} weight="duotone" className="text-blue-600" />,
      title: 'Παρακολούθηση Απόδοσης',
      description: 'Μετρήστε και αναλύστε την απόδοση των αθλητών σας με λεπτομερή στατιστικά και γραφήματα.',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <ChartLineUp size={32} weight="duotone" className="text-emerald-600" />,
      title: 'Ανάλυση Δεδομένων',
      description: 'Λάβετε βαθιές πληροφορίες από τα δεδομένα των αθλητών σας για να βελτιστοποιήσετε τις προπονήσεις.',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Brain size={32} weight="duotone" className="text-amber-600" />,
      title: 'Έξυπνες Προτάσεις',
      description: 'Λάβετε AI-powered προτάσεις για βελτίωση των προγραμμάτων προπόνησης και πρόληψης τραυματισμών.',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <ListChecks size={32} weight="duotone" className="text-rose-600" />,
      title: 'Παρακολούθηση Ευεξίας',
      description: 'Παρακολουθήστε την φυσική κατάσταση των αθλητών σας και προσαρμόστε τις προπονήσεις ανάλογα.',
      color: 'from-rose-500 to-rose-600',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4 drop-shadow-lg">Δυνατότητες Προπονητή</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ανακαλύψτε πώς η πλατφόρμα μας μπορεί να βοηθήσει στην βελτίωση της απόδοσης της ομάδας σας
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
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
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

export default CoachCapabilities;