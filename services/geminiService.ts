import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePersonalizedPitch = async (userProfile: string): Promise<string> => {
  if (!apiKey) {
    return "אנא הגדר מפתח API כדי לקבל המלצה אישית.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        Product Description: ChargerSafe is an innovative charging cable designed to solve common smartphone issues: fraying, accidental disconnection, and wear. 
        Key features: "Click-Lock" mechanism for secure connection with an audible click and release button, reinforced flexible material (4x durability), Fast-Charge support, and universal compatibility (iPhone, Type-C, Android).
        
        Task: You are a persuasive sales expert in Hebrew. 
        The user is: "${userProfile}". 
        Write a short, punchy paragraph (max 3 sentences) in Hebrew explaining specifically why ChargerSafe is the perfect solution for THIS specific user based on their lifestyle or profession. 
        Use a friendly, enthusiastic tone. Do not use markdown formatting.
      `,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "ChargerSafe הוא הפתרון המושלם עבורך בזכות העמידות והנוחות שלו.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "שגיאה בקבלת המלצה. נסה שוב מאוחר יותר.";
  }
};