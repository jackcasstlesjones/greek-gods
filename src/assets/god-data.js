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

const poseidon = new God(
  "Poseidon",
  "God of the Sea",
  "POSEIDON was the Olympian god of the sea, earthquakes, floods, drought and horses. He was depicted as a mature man with a sturdy build and dark beard holding a trident (a three-pronged fisherman's spear).",
  "Olympus"
);

const dionysus = new God(
  "Dionysus",
  "God of Wine",
  "DIONYSUS was the Olympian god of wine, vegetation, pleasure, festivity, madness and wild frenzy. He was depicted as either an older, bearded god or an effeminate, long-haired youth. His attributes included the thyrsos (a pine-cone tipped staff), a drinking cup and a crown of ivy. He was usually accompanied by a troop of Satyrs and Mainades (wild female devotees.)",
  "Olympus"
);

const hestia = new God(
  "Hestia",
  "Goddess of the Hearth",
  "HESTIA was the virgin goddess of the hearth (both private and municipal) and the home. As the goddess of the family hearth she also presided over the cooking of bread and the preparation of the family meal. Hestia was also the goddess of the sacrificial flame and received a share of every sacrifice to the gods. The cooking of the communal feast of sacrificial meat was naturally a part of her domain."
);

const demeter = new God(
  "Demeter",
  "Goddess of Agriculture",
  "DEMETER was the Olympian goddess of agriculture, grain and bread who sustained mankind with the earth's rich bounty. She presided over the foremost of the Mystery Cults which promised its intiates the path to a blessed afterlife in the realm of Elysium. Demeter was depicted as a mature woman, often wearing a crown and bearing sheafs of wheat or a cornucopia (horn of plenty), and a torch."
);

const hades = new God(
  "Hades",
  "God of the Underworld",
  "HADES was the king of the underworld and god of the dead. He presided over funeral rites and defended the right of the dead to due burial. Haides was also the god of the hidden wealth of the earth, from the fertile soil with nourished the seed-grain, to the mined wealth of gold, silver and other metals."
);

const hera = new God(
  "Hera",
  "Queen of the Gods",
  "HERA was the Olympian queen of the gods, and the goddess of marriage, women, the sky and the stars of heaven. She was usually depicted as a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre, and sometimes accompanied by a lion, cuckoo or hawk."
);

const athena = new God(
  "Athena",
  "Goddess of Wisdom",
  "ATHENA was the Olympian goddess of wisdom and good counsel, war, the defence of towns, heroic endeavour, weaving, pottery and various other crafts. She was depicted as a stately woman armed with a shield and spear, and wearing a long robe, crested helm, and the famed aigis--a snake-trimmed cape adorned with the monstrous visage of the Gorgon Medousa (Medusa)."
);

const apollo = new God(
  "Apollo",
  "God of Prophecy",
  "APOLLO was the Olympian god of prophecy and oracles, music, song and poetry, archery, healing, plague and disease, and the protection of the young. He was depicted as a handsome, beardless youth with long hair and attributes such as a wreath and branch of laurel, bow and quiver of arrows, raven, and lyre."
);

const artemis = new God(
  "Artemis",
  "Goddess of the Hunt",
  "ARTEMIS was the Olympian goddess of hunting, the wilderness and wild animals. She was also a goddess of childbirth, and the protectress of the girl child up to the age of marriage--her twin brother Apollo was similarly the protector of the boy child. Together the two gods were also bringers of sudden death and disease--Artemis targetted women and girls, Apollo men and boys. In ancient art Artemis was usually depicted as a girl or young maiden with a hunting bow and quiver of arrows."
);

const hermes = new God(
  "Hermes",
  "Messenger of the Gods",
  "HERMES was the Olympian god of herds and flocks, travellers and hospitality, roads and trade, thievery and cunning, heralds and diplomacy, language and writing, athletic contests and gymnasiums, astronomy and astrology. He was the herald and personal messenger of Zeus, King of the Gods, and also the guide of the dead who led souls down into the underworld. Hermes was depicted as either a handsome and athletic, beardless youth or as an older, bearded man, with winged boots and a herald's wand."
);

const hephaestus = new God(
  "Hephaestus",
  "God of Blacksmiths",
  "HEPHAISTOS (Hephaestus) was the Olympian god of fire, smiths, craftsmen, metalworking, stonemasonry and sculpture. He was depicted as a bearded man holding a hammer and tongs--the tools of a smith--and sometimes riding a donkey."
);

const aphrodite = new God(
  "Aphrodite",
  "Goddess of Love",
  "APHRODITE was the Olympian goddess of love, beauty, pleasure and procreation. She was depicted as a beautiful woman often accompanied by the winged godling Eros (Love). Her attributes included a dove, apple, scallop shell and mirror. In classical sculpture and fresco she was usually depicted nude."
);
export {
  zeus,
  dionysus,
  poseidon,
  hestia,
  demeter,
  hades,
  hera,
  artemis,
  apollo,
  athena,
  hermes,
  hephaestus,
  aphrodite,
};
