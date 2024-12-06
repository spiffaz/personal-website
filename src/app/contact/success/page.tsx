"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="h-8 w-8 text-green-400" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white mb-4"
          >
            Message Sent Successfully!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mb-8"
          >
            Thank you for reaching out. I'll get back to you as soon as possible.
          </motion.p>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/contact')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Send Another Message
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/')}
              className="w-full bg-transparent border border-purple-500 hover:bg-purple-500/10 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Return to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}