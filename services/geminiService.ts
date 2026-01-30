
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Eden Media Group AI Assistant. 
Eden Media Group is a creative ecosystem for brands that inspire, challenge, and connect.
Our philosophy: "Media should do more than look good—it should mean something."
We have three core sub-brands:
1. Motor Toad: Bold, expressive, and creative.
2. Peachy Charms: Handcrafted, joyful, and personal.
3. Spreading Truth: Faith-driven, message-focused.

Your role is to help visitors understand our mission and find the brand that fits their needs.
Keep your tone premium, intentional, and cinematic. Avoid being overly playful or corporate.
If asked about faith, handle it with depth and grace (tastefully stated, not preachy).
`;

export const getEdenAssistantResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the Eden ecosystem right now. Please try again or explore our brands manually.";
  }
};
