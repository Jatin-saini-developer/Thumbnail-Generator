const express = require("express");

const thumbnailRouter = express.Router();

const userAuth = require("../middleWares/UserAuth");

const Data = require("../modals/Thumbnail");
const { generateImageWithGemini } = require("../services/geminiService");

thumbnailRouter.post("/generate", userAuth, async (req, res) => {
  try {
    const { thumbnailTitle, prompt, aspectRatio, colourScheme } = req.body;
    const safePrompt = typeof prompt === "string" ? prompt.trim() : "";

    if (!thumbnailTitle || !aspectRatio || !colourScheme) {
      return res.status(400).json({
        message: "thumbnailTitle, aspectRatio and colourScheme are required",
      });
    }

    const finalPrompt = [
      "Generate a high quality YouTube thumbnail image.",
      `Title: ${thumbnailTitle}`,
      safePrompt ? `Prompt: ${safePrompt}` : "",
      `Aspect ratio: ${aspectRatio}`,
      `Colour scheme: ${colourScheme}`,
      "Style: clear focal point, strong contrast, visually engaging composition.",
      "Return only the image.",
    ]
      .filter(Boolean)
      .join(" ");

    const generated = await generateImageWithGemini(finalPrompt);
    const imageDataUrl = `data:${generated.mimeType};base64,${generated.base64}`;

    const savedThumbnail = await Data.create({
      thumbnailTitle,
      prompt: safePrompt || "none",
      url: imageDataUrl,
      aspectRatio,
      colourScheme,
      user : req.user._id
    });

    return res.status(201).json({
      message: "Thumbnail generated successfully",
      imageUrl: imageDataUrl,
      thumbnail: savedThumbnail,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to generate thumbnail",
      error: err.message,
    });
  }
});

thumbnailRouter.get("/myGeneration", userAuth, async(req, res)=>{
    try {
    const thumbnails = await Data.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      thumbnails
    });

  } catch (err) {
    return res.status(500).json({
      message: "Failed to fetch thumbnails",
      error: err.message
    });
  }
})

module.exports = thumbnailRouter;
