class God {
  constructor(godName, info, family, cssClass) {
    this.godName = godName;
    this.info = info;
    this.family = family;
    this.cssClass = cssClass;
    this.show = false;
  }
}

const zeus = new God(
  "Zeus",
  "ZEUS was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle.",
  "Olympus",
  "span-five"
);

export { zeus };
