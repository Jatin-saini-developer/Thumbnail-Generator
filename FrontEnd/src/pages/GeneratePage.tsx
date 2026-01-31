import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data Constants ---
const styles = [
  { id: "bold", title: "Bold & Graphic", desc: "High contrast, bold typography", icon: "✨" },
  { id: "minimal", title: "Minimalist", desc: "Clean, simple, whitespace", icon: "⬜" },
  { id: "photo", title: "Photorealistic", desc: "Photo-based, natural looking", icon: "🖼️" },
  { id: "illustrated", title: "Illustrated", desc: "Hand-drawn, artistic, creative", icon: "✏️" },
  { id: "tech", title: "Tech/Futuristic", desc: "Modern, sleek, tech-inspired", icon: "🤖" },
];

const colorSchemes = [
  { id: "vibrant", name: "Vibrant", colors: ["#ff5f6d", "#ffc371", "#4facfe"] },
  { id: "warm", name: "Warm", colors: ["#ff9a44", "#ff3d3d", "#a83279"] },
  { id: "cool", name: "Cool", colors: ["#007adf", "#00c6ff", "#f0f9ff"] },
  { id: "nature", name: "Nature", colors: ["#2f855a", "#68d391", "#9ae6b4"] },
  { id: "purple", name: "Purple", colors: ["#6b46c1", "#9f7aea", "#d6bcfa"] },
  { id: "mono", name: "Monochrome", colors: ["#1a202c", "#4a5568", "#edf2f7"] },
  { id: "neon", name: "Neon", colors: ["#ff00ff", "#00ffff", "#ffff00"] },
  { id: "soft", name: "Soft", colors: ["#ffcdc2", "#ffe5de", "#ffffff"] },
];

const models = [
  { id: "basic", name: "Basic Model", credits: 5, description: "Fast generation, standard quality" },
  { id: "premium", name: "Premium Model", credits: 10, description: "High detail, complex lighting" },
];

const GeneratePage = () => {
  const [title, setTitle] = useState("");
  const [ratio, setRatio] = useState("16:9");
  const options = ["16:9", "1:1", "9:16"];

  const [styleOpen, setStyleOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(styles[4]);

  const [selectedColor, setSelectedColor] = useState(colorSchemes[0]);
  
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[1]);
  
  const [prompt, setPrompt] = useState("");

  return (
    <div className=" mt-11 min-h-screen bg-[#09090b] text-white p-4 md:p-8 font-sans selection:bg-pink-500/30">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        
        {/* --- Left Column: Controls --- */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Create Thumbnail
            </h1>
            <p className="text-neutral-400 text-sm">
              Describe your vision and let AI bring it to life.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Title Input */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-neutral-300">Title or Topic</label>
                <span className="text-xs text-neutral-500">{title.length}/100</span>
              </div>
              <input
                type="text"
                placeholder="e.g., 10 Tips for Better Sleep"
                maxLength={100}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-600 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
              />
            </div>

            {/* Aspect Ratio */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-3">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setRatio(option)}
                    className={`
                      relative flex items-center justify-center rounded-xl py-3 text-sm font-medium transition-all
                      ${ratio === option 
                        ? "bg-white text-black shadow-lg shadow-white/10" 
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5"}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Thumbnail Style Dropdown */}
            <div className="space-y-3 relative z-30">
              <label className="text-sm font-medium text-neutral-300">Visual Style</label>
              <div className="relative">
                <button
                  onClick={() => setStyleOpen(!styleOpen)}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition-all outline-none focus:ring-1 focus:ring-pink-500/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{selectedStyle.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-white">{selectedStyle.title}</p>
                      <p className="text-xs text-neutral-400">{selectedStyle.desc}</p>
                    </div>
                  </div>
                  <span className={`text-neutral-500 transition-transform ${styleOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>

                <AnimatePresence>
                  {styleOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#121214] shadow-2xl shadow-black/50"
                    >
                      {styles.map((style) => (
                        <button
                          key={style.id}
                          onClick={() => {
                            setSelectedStyle(style);
                            setStyleOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${selectedStyle.id === style.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                        >
                          <span className="text-xl">{style.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-white">{style.title}</p>
                            <p className="text-xs text-neutral-400">{style.desc}</p>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">Color Palette</label>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.id}
                    onClick={() => setSelectedColor(scheme)}
                    className={`group relative h-12 w-full overflow-hidden rounded-lg transition-all ${selectedColor.id === scheme.id ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-[#09090b]' : 'hover:opacity-80'}`}
                  >
                    <div className="flex h-full w-full">
                      {scheme.colors.map((color, idx) => (
                        <div key={idx} className="flex-1" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-neutral-500 text-right">Selected: <span className="text-white">{selectedColor.name}</span></p>
            </div>

            {/* Model Selection */}
            <div className="space-y-3 relative z-20">
              <label className="text-sm font-medium text-neutral-300">AI Model</label>
              <div className="relative">
                <button
                  onClick={() => setModelOpen(!modelOpen)}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{selectedModel.name}</span>
                    <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] font-semibold text-pink-500 border border-pink-500/20">
                      {selectedModel.credits} credits
                    </span>
                  </div>
                  <span className={`text-neutral-500 transition-transform ${modelOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>

                <AnimatePresence>
                  {modelOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#121214] shadow-2xl"
                    >
                      {models.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => {
                            setSelectedModel(model);
                            setModelOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-3 text-left transition-colors ${selectedModel.id === model.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                        >
                          <div>
                            <p className="text-sm font-medium text-white">{model.name}</p>
                            <p className="text-xs text-neutral-500">{model.description}</p>
                          </div>
                          <span className="text-xs font-mono text-neutral-400">{model.credits}c</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Additional Prompts */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">
                Additional Context <span className="text-neutral-600 font-normal">(Optional)</span>
              </label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Specific details like 'neon lighting', 'cyberpunk city background'..."
                className="w-full h-24 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button className="group w-full rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 py-4 font-semibold text-white shadow-lg shadow-pink-900/20 transition-all hover:shadow-pink-900/40 hover:scale-[1.01] active:scale-[0.99]">
              Generate Thumbnail
            </button>
            
          </div>
        </div>

        {/* --- Right Column: Preview --- */}
        <div className="hidden lg:block sticky top-8 h-[calc(100vh-4rem)]">
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                 <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-medium text-white">Preview Mode</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Fill in the details on the left to see your AI-generated thumbnail preview appear here.
              </p>
            </div>

            {/* Ratio Indicator Preview */}
            <div className="absolute bottom-6 right-6 text-xs font-mono text-neutral-600 border border-white/5 px-2 py-1 rounded bg-black/20">
              {ratio}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GeneratePage;