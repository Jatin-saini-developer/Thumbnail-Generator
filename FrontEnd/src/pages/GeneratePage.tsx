import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateCredits } from "../Redux/slices/authSlice"; 

type PreviewStatus = "idle" | "loading" | "success" | "error";

type StyleOption = {
  id: string;
  title: string;
  desc: string;
  icon: string;
};

type ColorScheme = {
  id: string;
  name: string;
  colors: string[];
};

const styles: StyleOption[] = [
  {
    id: "bold",
    title: "Bold & Graphic",
    desc: "High contrast, bold typography",
    icon: "*",
  },
  {
    id: "minimal",
    title: "Minimalist",
    desc: "Clean, simple, whitespace",
    icon: "O",
  },
  {
    id: "photo",
    title: "Photorealistic",
    desc: "Photo-based, natural looking",
    icon: "[]",
  },
  {
    id: "illustrated",
    title: "Illustrated",
    desc: "Hand-drawn, artistic, creative",
    icon: "/",
  },
  {
    id: "tech",
    title: "Tech/Futuristic",
    desc: "Modern, sleek, tech-inspired",
    icon: "#",
  },
];

const colorSchemes: ColorScheme[] = [
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
  {
    id: "basic",
    name: "Basic Model",
    credits: 5,
    description: "Fast generation, standard quality",
  },
  {
    id: "premium",
    name: "Premium Model",
    credits: 10,
    description: "High detail, complex lighting",
  },
];

const GeneratePage = () => {
  const [title, setTitle] = useState("");
  const [ratio, setRatio] = useState("16:9");
  const [styleOpen, setStyleOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(styles[4]);
  const [selectedColor, setSelectedColor] = useState(colorSchemes[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[1]);
  const [prompt, setPrompt] = useState("");
  const [previewStatus, setPreviewStatus] = useState<PreviewStatus>("idle");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const dispatch = useDispatch();

  const API_BASE_URL =
    import.meta.env.VITE_API_URL ||
    "https://thumbnail-generator-hdh4.onrender.com";
  const options = ["16:9", "1:1", "9:16"];

  const handleGenerate = async () => {
    if (!title.trim()) {
      setPreviewStatus("error");
      setStatusMessage("Please add a title/topic first.");
      return;
    }

    setPreviewStatus("loading");
    setStatusMessage("");

    const extraContext = [selectedStyle.title, prompt.trim()]
      .filter(Boolean)
      .join(". ");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/generate`,
        {
          thumbnailTitle: title.trim(),
          prompt: extraContext,
          aspectRatio: ratio,
          colourScheme: selectedColor.name,
          model: selectedModel.id,
        },
        { withCredentials: true },
      );

      const imageUrl = response.data?.imageUrl || response.data?.thumbnail?.url;
      if (!imageUrl) {
        throw new Error("Image URL missing in API response");
      }

      setGeneratedImage(imageUrl);
      setPreviewStatus("success");
      setStatusMessage("Thumbnail generated successfully.");

      if (response.data?.remainingCredits !== undefined) {
        dispatch(updateCredits(response.data.remainingCredits));
      }
    } catch (error) {
      let message = "Failed to generate thumbnail";
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          message = "Please login first, then try generating again.";
        } else {
          message = error.response?.data?.message || message;
        }
      }
      setPreviewStatus("error");
      setStatusMessage(message);
    }
  };

  const handleDownload = async () => {
    if (!generatedImage || isDownloading) return;

    try {
      setIsDownloading(true);
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = `thumbnail-${Date.now()}.png`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(blobUrl);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="mt-11 min-h-screen bg-[#09090b] text-white p-4 md:p-8 font-sans selection:bg-pink-500/30">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Create Thumbnail
            </h1>
            <p className="text-neutral-400 text-sm">
              Describe your vision and let AI bring it to life.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-neutral-300">
                  Title or Topic
                </label>
                <span className="text-xs text-neutral-500">
                  {title.length}/100
                </span>
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

            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">
                Aspect Ratio
              </label>
              <div className="grid grid-cols-3 gap-3">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setRatio(option)}
                    className={`relative flex items-center justify-center rounded-xl py-3 text-sm font-medium transition-all ${
                      ratio === option
                        ? "bg-white text-black shadow-lg shadow-white/10"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 relative z-30">
              <label className="text-sm font-medium text-neutral-300">
                Visual Style
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setStyleOpen(!styleOpen)}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition-all outline-none focus:ring-1 focus:ring-pink-500/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{selectedStyle.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {selectedStyle.title}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {selectedStyle.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-neutral-500 transition-transform ${styleOpen ? "rotate-180" : ""}`}
                  >
                    v
                  </span>
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
                          type="button"
                          onClick={() => {
                            setSelectedStyle(style);
                            setStyleOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                            selectedStyle.id === style.id
                              ? "bg-white/10"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <span className="text-xl">{style.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {style.title}
                            </p>
                            <p className="text-xs text-neutral-400">
                              {style.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">
                Color Palette
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.id}
                    type="button"
                    onClick={() => setSelectedColor(scheme)}
                    className={`group relative h-12 w-full overflow-hidden rounded-lg transition-all ${
                      selectedColor.id === scheme.id
                        ? "ring-2 ring-pink-500 ring-offset-2 ring-offset-[#09090b]"
                        : "hover:opacity-80"
                    }`}
                  >
                    <div className="flex h-full w-full">
                      {scheme.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="flex-1"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-neutral-500 text-right">
                Selected:{" "}
                <span className="text-white">{selectedColor.name}</span>
              </p>
            </div>

            <div className="space-y-3 relative z-20">
              <label className="text-sm font-medium text-neutral-300">
                AI Model
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setModelOpen(!modelOpen)}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">
                      {selectedModel.name}
                    </span>
                    <span className="rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] font-semibold text-pink-500 border border-pink-500/20">
                      {selectedModel.credits} credits
                    </span>
                  </div>
                  <span
                    className={`text-neutral-500 transition-transform ${modelOpen ? "rotate-180" : ""}`}
                  >
                    v
                  </span>
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
                          type="button"
                          onClick={() => {
                            setSelectedModel(model);
                            setModelOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-3 text-left transition-colors ${
                            selectedModel.id === model.id
                              ? "bg-white/10"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <div>
                            <p className="text-sm font-medium text-white">
                              {model.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {model.description}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-neutral-400">
                            {model.credits}c
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-neutral-300">
                Additional Context{" "}
                <span className="text-neutral-600 font-normal">(Optional)</span>
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Specific details like 'neon lighting', 'cyberpunk city background'..."
                className="w-full h-24 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 resize-none transition-all"
              />
            </div>

            <button
              type="button"
              disabled={previewStatus === "loading"}
              onClick={handleGenerate}
              className="group w-full rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 py-4 font-semibold text-white shadow-lg shadow-pink-900/20 transition-all hover:shadow-pink-900/40 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {previewStatus === "loading"
                ? "Generating..."
                : "Generate Thumbnail"}
            </button>
          </div>
        </div>

        <div className="lg:sticky top-8 lg:h-[calc(100vh-4rem)] min-h-[460px]">
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            {previewStatus === "idle" && (
              <div>
                <div className="relative z-10 space-y-4 max-w-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    <span className="text-3xl">*</span>
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    Preview Mode
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Fill in the details on the left to see your AI-generated
                    thumbnail preview appear here.
                  </p>
                </div>
                <div className="absolute bottom-6 right-6 text-xs font-mono text-neutral-600 border border-white/5 px-2 py-1 rounded bg-black/20">
                  {ratio}
                </div>
              </div>
            )}

            {previewStatus === "loading" && (
              <div className="flex flex-col items-center gap-4 text-neutral-400">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-pink-500 border-t-transparent" />
                <p className="text-sm">Generating thumbnail...</p>
              </div>
            )}

            {previewStatus === "success" && generatedImage && (
              <div className="relative z-10 w-full h-full flex flex-col gap-3 items-center justify-center">
                <div className="group relative w-full">
                  <img
                    src={generatedImage}
                    alt="Generated thumbnail"
                    className="max-h-[78vh] w-full rounded-xl border border-white/10 object-contain bg-black/30"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="pointer-events-auto rounded-lg border border-white/20 bg-white/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isDownloading ? "Downloading..." : "Download"}
                    </button>
                  </div>
                </div>
                <p className="text-sm text-emerald-300">{statusMessage}</p>
              </div>
            )}

            {previewStatus === "error" && (
              <div className="relative z-10 flex flex-col items-center gap-2 text-red-300">
                <p className="text-base font-medium">Generation failed</p>
                <p className="text-sm text-red-200">{statusMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
