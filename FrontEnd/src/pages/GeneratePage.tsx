import { button } from "motion/react-client";
import React, { useState } from "react";

const GeneratePage = () => {
  const [title, setTitle] = useState("");
  const [ratio, setRatio] = useState("16:9");
  const options = ["16:9", "1:1", "9:16"];
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
        {/* left side */}
        <div className="rounded-2xl bg-white/5 p-6">
          <div className="mt-10">
            <h1 className="text-2xl font-semibold text-white">
              Create Your Thumbnail{" "}
            </h1>
            <p className="mt-2 text-gray-400">
              Describe your vision and let AI bring it to life
            </p>
          </div>

          <div>
            <label>Title or Topic</label>
            <input
              type="text"
              placeholder="e.g., 10 Tips for Better Sleep"
              maxLength={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
            />
            <div>{title.length}/100</div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-white">
              Aspect Ratio
            </label>
            <div className="flex gap-4">
              {options.map((option) => (
                <button key={option} onClick={()=>setRatio(option)}  className={`
              flex items-center justify-center rounded-xl px-6 py-3 text-sm
              transition-all
              ${
                ratio === option
                  ? "bg-white/10 border border-pink-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }
            `}>{option}</button>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="rounded-2xl bg-white/5 p-6">Preview Section</div>
      </div>
    </div>
  );
};

export default GeneratePage;
