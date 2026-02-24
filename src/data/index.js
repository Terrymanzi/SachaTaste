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
    name: "LEEDS",
    subtitle: "City Centre",
    address: "7 Duncan St, LS1 6DQ",
    status: "OPEN NOW",
    openingTimes: [
      { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
      { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
    ],
    email: "leeds@sqew.uk",
    phone: "+44 113 123 4567",
    coordinates: [53.7985, -1.5418], // Leeds city centre coordinates
    directionsUrl: "https://maps.google.com/?q=7+Duncan+St+Leeds+LS1+6DQ",
    orderUrl: "#order",
  },
  {
    id: 2,
    name: "MANCHESTER",
    subtitle: "Deansgate",
    address: "75 Deansgate, M3 2BW",
    status: "OPEN NOW",
    openingTimes: [
      { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "12:00 PM - 11:00 PM" },
      { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
    ],
    email: "manchester@sqew.uk",
    phone: "+44 161 123 4567",
    coordinates: [53.4808, -2.2426], // Manchester Deansgate coordinates
    directionsUrl: "https://maps.google.com/?q=75+Deansgate+Manchester+M3+2BW",
    orderUrl: "#order",
  },
];
