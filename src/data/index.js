// Menu data
export const menuData = {
  featured: [
    {
      id: 1,
      name: "NEW RICE Recipe",
      description:
        "A wholesome plateful of basmati rice, caramelized onions and chicken shawarma cooked in aromatic spices, topped with your choice of sauces and crunch.",
      image: "/images/sample_food (1).png",
      category: "featured",
    },
    {
      id: 2,
      name: "NEW RICE Recipe",
      description:
        "A wholesome plateful of basmati rice, caramelized onions and chicken shawarma cooked in aromatic spices, topped with your choice of sauces and crunch.",
      image: "/images/sample_food (1).png",
      category: "featured",
    },
    {
      id: 3,
      name: "NEW RICE Recipe",
      description:
        "A wholesome plateful of basmati rice, caramelized onions and chicken shawarma cooked in aromatic spices, topped with your choice of sauces and crunch.",
      image: "/images/sample_food (1).png",
      category: "featured",
    },
  ],
  combos: [
    { id: 1, name: "Combo 1", description: "Perfect combination meal" },
    { id: 2, name: "Combo 2", description: "Delicious combo deal" },
  ],
  starters: [
    { id: 1, name: "Hummus", description: "Creamy chickpea dip" },
    { id: 2, name: "Falafel", description: "Crispy chickpea fritters" },
  ],
  salads: [
    { id: 1, name: "Garden Salad", description: "Fresh mixed greens" },
    { id: 2, name: "Fattoush", description: "Traditional Lebanese salad" },
  ],
  drinks: [
    { id: 1, name: "Soft Drinks", description: "Assorted beverages" },
    { id: 2, name: "Fresh Juice", description: "Freshly squeezed" },
  ],
  sides: [
    { id: 1, name: "Fries", description: "Crispy golden fries" },
    { id: 2, name: "Rice", description: "Aromatic basmati rice" },
  ],
};

// Team data
export const teamData = [
  {
    id: 1,
    name: "Sacha",
    role: "Founder",
    description:
      "With a decade of experience, our team brings authentic flavor to every dish.",
    image: "/images/CEO sacha.png",
  },
  {
    id: 2,
    name: "Sacha",
    role: "Founder",
    description:
      "With a decade of experience, our team brings authentic flavor to every dish.",
    image: "/images/CEO sacha.png",
  },
  {
    id: 3,
    name: "Sacha",
    role: "Founder",
    description:
      "With a decade of experience, our team brings authentic flavor to every dish.",
    image: "/images/CEO sacha.png",
  },
];

// Locations data
export const locationsData = [
  {
    id: 1,
    name: "KIGALI",
    subtitle: "City Centre",
    address: "KN 4 Ave, Kigali",
    status: "OPEN NOW",
    openingTimes: [
      { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
      { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
    ],
    email: "mukobwinkashalon@gmail.com",
    phone: "+250788436863",
    coordinates: [-1.9441, 30.0619], // Kigali city centre coordinates
    directionsUrl: "https://maps.google.com/?q=KN+4+Ave+Kigali+Rwanda",
    orderUrl: "#order",
  },
  {
    id: 2,
    name: "NYARUGENGE",
    subtitle: "Downtown",
    address: "KN 3 Rd, Nyarugenge",
    status: "OPEN NOW",
    openingTimes: [
      { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
      { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
    ],
    email: "mukobwinkashalon@gmail.com",
    phone: "+250788436863",
    coordinates: [-1.9536, 30.0606], // Nyarugenge coordinates
    directionsUrl:
      "https://maps.google.com/?q=KN+3+Rd+Nyarugenge+Kigali+Rwanda",
    orderUrl: "#order",
  },
];
