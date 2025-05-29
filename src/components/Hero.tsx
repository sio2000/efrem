import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChartLineUp, 
  Users, 
  Brain, 
  RocketLaunch,
  ArrowRight
} from "@phosphor-icons/react";

const Hero = () => {
  const features = [
    {
      icon: <ChartLineUp size={32} weight="duotone" className="text-blue-600" />,
      title: "Ανάλυση Απόδοσης",
      description: "Παρακολούθηση και ανάλυση των μετρήσεων απόδοσης",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users size={32} weight="duotone" className="text-purple-600" />,
      title: "Διαχείριση Ομάδας",
      description: "Διαχείριση αθλητών και παρακολούθηση προόδου",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brain size={32} weight="duotone" className="text-emerald-600" />,
      title: "Έξυπνες Αναλύσεις",
      description: "AI-powered αναλύσεις για βέλτιστες αποφάσεις",
      color: "from-emerald-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            What the Coach Sees
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Η πλατφόρμα παρακολούθησης αθλητικής απόδοσης που βοηθά τους προπονητές να δουν τα πάντα
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}></div>
              <div className="relative p-8 glass-effect rounded-2xl card-hover overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <RocketLaunch size={24} className="mr-2" />
            Ξεκινήστε Δωρεάν
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 glass-effect rounded-xl hover:bg-white/90 transition-all duration-300"
          >
            Μάθετε Περισσότερα
            <ArrowRight size={24} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;