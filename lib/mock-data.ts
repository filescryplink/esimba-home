export type Region = "Asia Pacific" | "Europe" | "Americas" | "Global";

export type EsimPlan = {
  id: string;
  name: string;
  country: string;
  code: string;
  region: Region;
  data: string;
  days: number;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: string[];
  coverage: string;
  activation: string;
  note: string;
};

export const regions: Array<"All destinations" | Region> = [
  "All destinations",
  "Asia Pacific",
  "Europe",
  "Americas",
  "Global",
];

export const countries = ["All countries", "Japan", "Thailand", "Vietnam", "France", "Italy", "United States"];

export const plans: EsimPlan[] = [
  {
    id: "jp-sakura-10",
    name: "Japan Sakura 10GB",
    country: "Japan",
    code: "JP",
    region: "Asia Pacific",
    data: "10GB",
    days: 15,
    price: 189000,
    originalPrice: 229000,
    popular: true,
    features: ["4G/LTE speed", "Hotspot supported", "No passport needed"],
    coverage: "Japan nationwide",
    activation: "Scan QR after landing",
    note: "Best for city breaks and rail trips.",
  },
  {
    id: "th-smile-15",
    name: "Thailand Smile 15GB",
    country: "Thailand",
    code: "TH",
    region: "Asia Pacific",
    data: "15GB",
    days: 30,
    price: 159000,
    popular: true,
    features: ["5G ready", "Hotspot supported", "Thai + English help"],
    coverage: "Thailand nationwide",
    activation: "Instant QR delivery",
    note: "A relaxed plan for islands, cities and long stays.",
  },
  {
    id: "vn-coast-5",
    name: "Vietnam Coast 5GB",
    country: "Vietnam",
    code: "VN",
    region: "Asia Pacific",
    data: "5GB",
    days: 7,
    price: 79000,
    originalPrice: 99000,
    features: ["4G/LTE speed", "Maps & ride apps", "Top-up available"],
    coverage: "Vietnam nationwide",
    activation: "Ready in under 2 minutes",
    note: "Light, simple and ideal for a short escape.",
  },
  {
    id: "eu-hop-20",
    name: "Europe Hop 20GB",
    country: "France",
    code: "EU",
    region: "Europe",
    data: "20GB",
    days: 30,
    price: 349000,
    popular: true,
    features: ["38 countries", "5G where available", "Hotspot supported"],
    coverage: "EU + UK + Switzerland",
    activation: "Install before departure",
    note: "One connection for a multi-city itinerary.",
  },
  {
    id: "it-la-dolce-10",
    name: "Italy La Dolce 10GB",
    country: "Italy",
    code: "IT",
    region: "Europe",
    data: "10GB",
    days: 15,
    price: 199000,
    features: ["4G/LTE speed", "Rome to Milan coverage", "Hotspot supported"],
    coverage: "Italy nationwide",
    activation: "Scan and go",
    note: "Made for food, art and slow train days.",
  },
  {
    id: "us-road-20",
    name: "USA Roadtrip 20GB",
    country: "United States",
    code: "US",
    region: "Americas",
    data: "20GB",
    days: 30,
    price: 429000,
    features: ["Nationwide 5G", "Hotspot supported", "Airport to highway"],
    coverage: "United States nationwide",
    activation: "Instant QR delivery",
    note: "Reliable data for navigation, music and remote work.",
  },
  {
    id: "world-pass-10",
    name: "World Pass 10GB",
    country: "Global",
    code: "GL",
    region: "Global",
    data: "10GB",
    days: 30,
    price: 599000,
    features: ["120+ destinations", "5G where available", "One eSIM, many borders"],
    coverage: "120+ countries",
    activation: "Install once, roam more",
    note: "For travellers who do not stay in one timezone.",
  },
];

export const benefits = [
  { number: "01", title: "Arrive connected", body: "Install at home, switch on when your flight lands and skip airport queues." },
  { number: "02", title: "Know what you pay", body: "Clear plans, transparent validity and no surprise roaming bill at the end." },
  { number: "03", title: "Keep your SIM", body: "Use your existing number for calls while roamly handles your travel data." },
];

export const faqs = [
  { question: "When should I install my eSIM?", answer: "Install before your trip while you have Wi-Fi. Your plan starts when it connects to a supported network at your destination." },
  { question: "Can I use hotspot or tethering?", answer: "Yes. Every mock plan marked “Hotspot supported” is designed for tethering. Availability can vary by local network." },
  { question: "Do I need to remove my physical SIM?", answer: "No. Keep your main SIM for calls and set roamly as the mobile data line when you travel." },
  { question: "What happens after I submit a request?", answer: "The demo form creates a mock request only. In production, this step will connect to Turso and your chosen fulfilment provider." },
];

export const formatVnd = (amount: number) => `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
