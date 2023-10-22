class God {
  constructor(godName, godTitle, info, family, cssClass, imgSrc) {
    this.godName = godName;
    this.godTitle = godTitle;
    this.info = info;
    this.family = family;
    this.cssClass = cssClass;
    this.imgSrc = imgSrc;
    this.show = false;
  }
}

const zeus = new God(
  "Zeus",
  "King of the Gods",
  "ZEUS was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle.",
  "Olympus",
  "span-five"
);

const dionysus = new God(
  "Dionysus",
  "God of Wine",
  "DIONYSUS was the Olympian god of wine, vegetation, pleasure, festivity, madness and wild frenzy. He was depicted as either an older, bearded god or an effeminate, long-haired youth. His attributes included the thyrsos (a pine-cone tipped staff), a drinking cup and a crown of ivy. He was usually accompanied by a troop of Satyrs and Mainades (wild female devotees.)",
  "Olympus"
);

export { zeus, dionysus };
