// src/components/careers/why-work-with-us.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const benefits = [
  'Competitive salary and benefits package',
  'Flexible working arrangements',
  'Professional development opportunities',
  'Challenging, varied projects across industries',
  'Collaborative, supportive team culture',
  'Opportunity to work with the latest technologies',
  'Regular team events and activities',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-heading-xl font-gilroy-bold mb-6"
          >
            WHY WORK WITH US?
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-6 text-body-lg text-muted-foreground"
          >
            <p>
              At KDVLAB, we believe that our people are our greatest asset.
              We are building a team of talented, passionate individuals who are
              excited about creating exceptional software and making a
              difference for our clients.
            </p>
            <p>
              We offer a supportive, collaborative environment where you can
              grow professionally, take on meaningful challenges, and work with
              cutting-edge technologies. Our culture values innovation,
              continuous learning, and work-life balance.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/career.jpg"
                alt="Professional climbing arrow - representing career growth and advancement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-heading-md font-gilroy-bold text-foreground"
            >
              What We Offer
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <p className="text-body-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-subheading-sm font-rubik font-medium text-primary">
                Ready to join our team? Check out our open positions below.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
