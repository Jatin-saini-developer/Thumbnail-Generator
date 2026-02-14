const MODEL_CANDIDATES = [
  process.env.GEMINI_MODEL,
  "gemini-2.5-flash-image",
  "gemini-3-pro-image-preview",
].filter(Boolean);

const extractImage = (responseData) => {
  const candidates = responseData?.candidates || [];

  for (const candidate of candidates) {
    const parts = candidate?.content?.parts || [];
    for (const part of parts) {
      if (part?.inlineData?.data) {
        return {
          mimeType: part.inlineData.mimeType || "image/png",
          base64: part.inlineData.data,
        };
      }
    }
  }

  return null;
};

const generateImageWithGemini = async (prompt) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  let lastError = "Gemini request failed";

  for (const model of MODEL_CANDIDATES) {
    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
    const response = await fetch(`${geminiApiUrl}?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const raw = await response.text();
    let data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      data = {};
    }

    if (!response.ok) {
      lastError = data?.error?.message || `Gemini request failed for model ${model}`;
      continue;
    }

    const image = extractImage(data);
    if (image) {
      return image;
    }

    lastError = `Gemini did not return an image for model ${model}`;
  }

  throw new Error(lastError);
};

module.exports = {
  generateImageWithGemini,
};
