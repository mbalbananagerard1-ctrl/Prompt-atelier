import { useState } from "react";
import { Copy, Check, Sparkles, ImageIcon, MessageSquare, Layers, ExternalLink } from "lucide-react";

const MODES = [
  { id: "image", label: "Image", icon: ImageIcon, desc: "Midjourney, DALL·E, Stable Diffusion…" },
  { id: "texte", label: "Texte", icon: MessageSquare, desc: "ChatGPT, Claude, assistants…" },
  { id: "both", label: "Les deux", icon: Layers, desc: "Génère les deux variantes" },
];

// Liens "ouvrir directement" — non-officiels côté ChatGPT/Gemini/Perplexity (peuvent
// ne pas préremplir selon les jours), fiable côté Claude. Le bouton Copier reste
// toujours l'option garantie.
const TEXT_TARGETS = [
  { id: "chatgpt", label: "ChatGPT", url: (q) => `https://chatgpt.com/?q=${encodeURIComponent(q)}` },
  { id: "claude", label: "Claude", url: (q) => `https://claude.ai/new?q=${encodeURIComponent(q)}` },
  { id: "gemini", label: "Gemini", url: (q) => `https://gemini.google.com/app?q=${encodeURIComponent(q)}` },
  { id: "perplexity", label: "Perplexity", url: (q) => `https://www.perplexity.ai/search?q=${encodeURIComponent(q)}` },
];
const IMAGE_TARGETS = [
  { id: "chatgpt", label: "ChatGPT (DALL·E)", url: (q) => `https://chatgpt.com/?q=${encodeURIComponent(q)}` },
];

export default function App() {
  const [mode, setMode] = useState("both");
  const [sujet, setSujet] = useState("");
  const [ton, setTon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultats, setResultats] = useState([]);
  const [copiedIdx, setCopiedIdx] = useState(null);

  async function genererPrompts() {
    if (!sujet.trim()) {
      setError("Décris d'abord ton idée ou ton objectif.");
      return;
    }
    setErro
