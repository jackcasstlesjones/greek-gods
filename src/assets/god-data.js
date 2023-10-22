class God {
  constructor(godName, info, family, cssClass) {
    this.godName = godName;
    this.info = info;
    this.family = family;
    this.cssClass = cssClass;
  }
}

const zeus = new God(
  "Zeus",
  "Zeus (/zjuːs/; Ancient Greek: Ζεύς)[a] is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus.",
  "Olympus",
  "span-five"
);

export { zeus };
