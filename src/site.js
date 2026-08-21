export const site = {
  name: "La Octava",
  tagline: "An evening worth dressing up for.",
  summary: "Piano Bar upstairs · House Club below",
  nights: ["Thursday", "Friday", "Saturday"],
  address: {
    street: "Avinguda del Pla del Vinyet 57",
    city: "Sant Cugat del Vallès",
    region: "Barcelona, Spain",
    postalCode: "08172",
  },
};

export const siteCoordinates = {
  lat: 41.4727,
  lng: 2.0837,
  display: "41°28'21.7\"N 2°05'01.3\"E",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}`,
)}`;

export const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.city}`,
)}&ll=41.4727,2.0837`;
export const instagramUrl = "https://www.instagram.com/laoctavasantcugat/";

/* Copy stays short on purpose: a line to set the room, then the facts. */
export const floors = [
  {
    id: "piano-bar",
    level: "Upper floor",
    name: "Piano Bar",
    kicker: "Dinner · Piano · Live music",
    description: "Low light, a proper bar, and a piano that never quite stops.",
    details: [
      ["Bar", "From 8:30 pm"],
      ["Live music", "From 10:00 pm"],
      ["Dress", "Smart"],
    ],
  },
  {
    id: "house-club",
    level: "Lower floor",
    name: "House Club",
    kicker: "House · Late · Downstairs",
    description: "A darker room, a serious sound system, house until late.",
    details: [
      ["Doors", "From 12:00 am"],
      ["Sound", "House & guests"],
      ["Close", "Late"],
    ],
  },
];

/* The three lines worth knowing before you come. */
export const visitFacts = [
  ["Nights", "Thu · Fri · Sat"],
  ["Getting here", "8 min from FGC Sant Cugat · parking adjacent"],
  ["Dress", "Worth dressing up for"],
];
