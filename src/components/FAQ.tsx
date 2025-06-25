import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';
import FAQHero from './FAQHero';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Coach' | 'Athlete';
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'Coach' | 'Athlete'>('Coach');

  const faqs: FAQItem[] = [
    {
      question: 'How often should I fill out the wellness questionnaires?',
      answer: 'It is recommended to fill out the wellness questionnaires before and after each training session. This helps monitor your physical condition and prevent injuries.',
      category: 'Athlete'
    },
    {
      question: 'Πώς μπορώ να προσθέσω νέους αθλητές στην πλατφόρμα;',
      answer: 'Μπορείτε να προσθέσετε νέους αθλητές μέσω του μενού "Διαχείριση Ομάδας". Κάντε κλικ στο κουμπί "Προσθήκη Αθλητή" και συμπληρώστε τα απαραίτητα στοιχεία. Οι αθλητές θα λάβουν email με οδηγίες για την ενεργοποίηση του λογαριασμού τους.',
      category: 'Coach'
    },
    {
      question: 'Ποια τεστ μπορώ να δημιουργήσω;',
      answer: 'Η πλατφόρμα υποστηρίζει διάφορα τεστ όπως CMJ, 5-10-5, τεστ ισορροπίας, και άλλα. Μπορείτε να δημιουργήσετε προσαρμοσμένα τεστ και να ορίσετε τις παραμέτρους μέτρησης.',
      category: 'Coach'
    },
    {
      question: 'Πώς μπορώ να δω την πρόοδό μου;',
      answer: 'Στην καρτέλα "Απόδοση" θα βρείτε γραφήματα και στατιστικά στοιχεία για όλες τις μετρήσεις σας. Μπορείτε να δείτε την εξέλιξη με την πάροδο του χρόνου και να συγκρίνετε με προηγούμενες μετρήσεις.',
      category: 'Athlete'
    },
    {
      question: 'Πόσο συχνά πρέπει να συμπληρώνω τα ερωτηματολόγια ευεξίας;',
      answer: 'Συνιστάται να συμπληρώνετε τα ερωτηματολόγια ευεξίας πριν και μετά από κάθε προπόνηση. Αυτό βοηθά στην παρακολούθηση της φυσικής σας κατάστασης και στην πρόληψη τραυματισμών.',
      category: 'Athlete'
    }
  ];

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <FAQHero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4 drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-700">Find answers to common questions about using the platform</p>
        </motion.div>
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white/80 glass-effect p-1 shadow-lg border-2 border-transparent">
            <button
              onClick={() => setActiveCategory('Coach')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                activeCategory === 'Coach'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              For Coaches
            </button>
            <button
              onClick={() => setActiveCategory('Athlete')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                activeCategory === 'Athlete'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              For Athletes
            </button>
          </div>
        </div>
        {/* FAQ Items */}
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 glass-effect rounded-xl shadow-xl overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{faq.question}</span>
                <CaretDown
                  size={24}
                  className={`transform transition-transform group-hover:text-blue-600 ${
                    activeIndex === index ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700 font-medium drop-shadow-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 mb-4">Didn't find the answer you were looking for?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg focus:ring-2 focus:ring-blue-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 