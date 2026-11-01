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

export const faqCategories = ["All questions", "Get ready", "Manage your eSIM", "Account & payment", "Troubleshooting"] as const;

export const faqs = [
  { category: "Get ready", question: "How do I get a roamly eSIM?", answer: "Choose a plan for your destination, submit the mock request and follow the QR installation instructions. In production, the eSIM profile would be delivered after payment." },
  { category: "Get ready", question: "Who should use an eSIM while travelling?", answer: "An eSIM is useful when you want local data without swapping your physical SIM, especially for international trips, multi-country itineraries and short stays." },
  { category: "Get ready", question: "How do I check if my phone supports eSIM?", answer: "Look for an Add eSIM or Add Mobile Plan option in your phone's cellular settings. Your device must also be carrier-unlocked. Check the manufacturer's model list before purchase." },
  { category: "Get ready", question: "Can I use an eSIM on my laptop or tablet?", answer: "Some cellular laptops and tablets support eSIM. Check the device specifications and make sure the cellular modem is unlocked before selecting a plan." },
  { category: "Get ready", question: "How do I choose the right data plan?", answer: "Match the coverage to your itinerary first, then choose data based on trip length and usage. Maps, messaging and ride apps need less data than video calls or streaming." },
  { category: "Get ready", question: "When should I install my eSIM?", answer: "Install it before your trip while you have reliable Wi‑Fi. Keep your travel eSIM turned off until arrival if you want the plan to start only when you reach the destination." },
  { category: "Manage your eSIM", question: "Do I need to remove my physical SIM?", answer: "No. Keep your primary SIM for calls and texts, then set roamly as the mobile data line when you travel. Turn off data roaming on your primary SIM to avoid unexpected charges." },
  { category: "Manage your eSIM", question: "Does roamly include calls and text messages?", answer: "The plans shown here are data-first plans. Calling and SMS availability depends on the specific plan, so check the plan details before choosing it for a phone number." },
  { category: "Manage your eSIM", question: "Can I use hotspot or tethering?", answer: "Hotspot is available on plans marked “Hotspot supported”. Local network policies can affect performance, so use the coverage and feature notes as the source of truth." },
  { category: "Manage your eSIM", question: "Can I top up my plan?", answer: "Top-up is available only where the plan details say it is supported. In the current mock experience, the top-up flow is represented by the plan feature and is ready for a fulfilment integration." },
  { category: "Account & payment", question: "Can I keep my eSIM number after the plan expires?", answer: "A data-only eSIM does not automatically provide a permanent phone number. Number retention depends on the product type and provider policy; check the plan terms before relying on it for calls or SMS." },
  { category: "Account & payment", question: "Can I receive verification codes on my eSIM number?", answer: "OTP delivery is not guaranteed. Some services block virtual or travel numbers, and data-only plans do not receive SMS. Keep access to your primary number for important verification." },
  { category: "Troubleshooting", question: "What should I do if there is no connection?", answer: "Confirm the eSIM is enabled, select it for mobile data, turn data roaming on for the travel line, and restart your phone. If the issue continues, check local coverage and contact support." },
  { category: "Troubleshooting", question: "What happens when I use all my data?", answer: "The connection may stop when the included data is used up, even if the validity period has not ended. Choose a larger plan or a top-up-enabled plan if you expect heavy usage." },
  { category: "Troubleshooting", question: "Why is my network slower than expected?", answer: "Speed depends on local coverage, congestion, device capability and the partner network. 5G is available only where the plan and local network support it." },
  { category: "Troubleshooting", question: "What happens after I submit a request?", answer: "The current form creates a mock request only and does not collect payment. In production, this step would connect to checkout, eSIM fulfilment and support." },
];

export const formatVnd = (amount: number) => `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
