import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const chat = this.ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history,
      });

      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "Desculpe, tive um problema técnico. Tente novamente em um momento.";
    }
  }
}

export const geminiService = new GeminiService();
