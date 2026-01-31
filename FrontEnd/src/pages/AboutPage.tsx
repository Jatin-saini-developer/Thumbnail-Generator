import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    desc: "Generate professional thumbnails in seconds, not hours. Save time for creating content.",
    icon: "⚡",
  },
  {
    title: "AI Optimization",
    desc: "Analyzes composition, contrast, and facial focus to maximize click-through rates.",
    icon: "🧠",
  },
  {
    title: "Creator Focused",
    desc: "Built for YouTubers, by design experts. No steep learning curves or expensive tools.",
    icon: "🎨",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-pink-500/30">
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">ThumbnailGo</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-neutral-400 text-lg leading-relaxed"
          >
            <p>
              <span className="text-white font-medium">ThumbnailGo</span> is an AI-powered platform built to help creators design eye-catching, high-converting YouTube thumbnails in seconds - without needing advanced design skills.
            </p>
            <p>
              In today's crowded creator economy, first impressions decide everything. A strong thumbnail can be the difference between getting ignored and getting clicked. ThumbnailGo was created to remove the guesswork and turn proven design principles into automated, intelligent visuals.
            </p>
            <p>
              Our AI analyzes composition, color contrast, facial focus, text placement, and visual hierarchy to help you generate thumbnails that naturally attract attention in YouTube feeds and recommendations.
            </p>
            <p>
              Whether you're a full-time YouTuber, a growing creator, a brand, or a marketing team, ThumbnailGo helps you publish faster, stay visually consistent, and increase click-through rates - without slowing down your workflow.
            </p>
          </motion.div>
          
          {/* Right Side: Features */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="space-y-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              Why Choose Us?
            </h2>

            <div className="grid gap-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-2xl group-hover:bg-pink-500/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional CTA Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/20">
              <p className="text-pink-200 text-sm font-medium mb-2">Ready to start?</p>
              <p className="text-white font-semibold">Join thousands of creators growing their channels today.</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;