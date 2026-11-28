import { Application } from "@/types/application";

export const applications: Application[] = [
  {
    id: "AP-1184",
    name: "Mahmoud Abdelrahman",
    trade: "Electrical",
    governorate: "Cairo",
    experienceYears: 12,
    submittedAt: "2026-11-12",
    phone: "+20 100 442 8891",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"],
    about:
      "Licensed electrician working on apartment rewiring, panel upgrades and lighting installation across Nasr City and Heliopolis.",
  },
  {
    id: "AP-1185",
    name: "Sayed El-Sherbiny",
    trade: "Plumbing",
    governorate: "Giza",
    experienceYears: 8,
    submittedAt: "2026-11-13",
    phone: "+20 111 000 1185",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"].slice(0, 5),
    about:
      "Residential plumbing installations, leak detection and water heater maintenance.",
  },
  {
    id: "AP-1186",
    name: "Karim Mostafa",
    trade: "AC & HVAC",
    governorate: "Alexandria",
    experienceYears: 6,
    submittedAt: "2026-11-15",
    phone: "+20 122 000 1186",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"].slice(0, 4),
    about:
      "Split and concealed AC installation, gas charging and seasonal servicing.",
  },
  {
    id: "AP-1187",
    name: "Ahmed Fathy",
    trade: "Carpentry",
    governorate: "Dakahlia",
    experienceYears: 15,
    submittedAt: "2026-11-16",
    phone: "+20 100 000 1187",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"],
    about: "Made-to-measure kitchens, wardrobes and solid wood doors.",
  },
  {
    id: "AP-1188",
    name: "Tarek Ismail",
    trade: "Painting",
    governorate: "Cairo",
    experienceYears: 9,
    submittedAt: "2026-11-18",
    phone: "+20 111 000 1188",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"].slice(0, 6),
    about: "Interior painting, putty preparation and decorative wall textures.",
  },
  {
    id: "AP-1189",
    name: "Hossam El-Deeb",
    trade: "Aluminum & Glass",
    governorate: "Giza",
    experienceYears: 11,
    submittedAt: "2026-11-19",
    phone: "+20 122 000 1189",
    photos: ["/work.png", "/work2.png", "/work3.png", "/work4.png"].slice(0, 7),
    about:
      "Double-glazed aluminum windows, sliding doors and tempered glass partitions.",
  },
];
