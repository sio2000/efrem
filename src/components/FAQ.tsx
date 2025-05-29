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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <FAQHero />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Συχνές Ερωτήσεις</h1>
          <p className="text-xl text-gray-600">
            Βρείτε απαντήσεις σε συχνές ερωτήσεις για τη χρήση της πλατφόρμας
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveCategory('Coach')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === 'Coach'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Για Προπονητές
            </button>
            <button
              onClick={() => setActiveCategory('Athlete')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === 'Athlete'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Για Αθλητές
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <CaretDown
                  size={24}
                  className={`transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
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
                    <p className="text-gray-600">{faq.answer}</p>
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
          <p className="text-gray-600 mb-4">Δεν βρήκατε την απάντηση που αναζητάτε;</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Επικοινωνήστε μαζί μας
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 