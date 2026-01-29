import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 99,
        period: "100 credits",
        features: [
            "10 Premium AI Thumbnails",
            "Best for starters",
            "Access to all AI models",
            "High-quaality",
            "Commercial usage allowed"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 299,
        period: "400 credits",
        features: [
            "40 Premium AI Thumbnails",
            "Best for Intermediate",
            "Access to all AI Models",
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: true
    },
    {
        name: "Ultra",
        price: 999,
        period: "1500 credits",
        features: [
            "150 Premium AI Thumbnails",
            "Best for professionals",
            "Access to all AI models",
            "No watermark on downloads",
            "High-quality",
            "Credits never expire"
        ],
        mostPopular: false
    }
];