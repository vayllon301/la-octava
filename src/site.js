export const site = {
  name: "La Octava",
  tagline: "An evening worth dressing up for.",
  summary: "Dinner, piano & live music.",
  nights: ["Thursday", "Friday", "Saturday"],
  address: {
    street: "Avinguda del Pla del Vinyet 57",
    city: "Sant Cugat del Vallès",
    region: "Barcelona, Spain",
    postalCode: "08172",
  },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}`,
)}`;

export const floors = [
  {
    id: "piano-bar",
    level: "Upper floor",
    name: "Piano Bar",
    kicker: "Dinner · Piano · Live music",
    description:
      "The evening opens upstairs. A proper bar under low light — something to eat if you want it, a piano that never quite stops, and live sets that carry the room from the first drink to the last.",
    details: [
      ["Bar", "From 8:30 pm"],
      ["Live music", "From 10:00 pm"],
      ["Dress", "Smart · Come dressed up"],
    ],
  },
  {
    id: "house-club",
    level: "Lower floor",
    name: "House Club",
    kicker: "House · Late · Downstairs",
    description:
      "Then the night moves down a floor. A darker room, a proper sound system, and resident selectors playing house until the small hours.",
    details: [
      ["Doors", "From 12:00 am"],
      ["Sound", "House & selected guests"],
      ["Close", "Late"],
    ],
  },
];
