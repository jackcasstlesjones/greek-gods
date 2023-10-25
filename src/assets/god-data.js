class God {
  constructor(godName, godTitle, godInfo, family, cssClass, imgSrc) {
    this.godName = godName;
    this.godTitle = godTitle;
    this.godInfo = godInfo;
    this.family = family;
    this.cssClass = cssClass;
    this.imgSrc = imgSrc;
    this.show = false;
  }
}
const chaos = new God(
  "Chaos",
  "First of the Primordial Gods",
  "CHAOS was the first of the primordial gods to emerge at the dawn of creation. Khaos was the lower atmosphere which surrounds the earth--both the invisible air and the gloom of fog and mist. The word khaos means 'gap' or 'chasm' being the space between heaven and earth. She was also a goddess of fate like her daughter Nyx and grand-daughters the Moirai (Moirae). As the goddess of the air Khaos was also the mother of birds, just as Gaia (the Earth) was the mother of land animals, and Thalassa (the Sea) was the mother of fish."
);

const nyx = new God(
  "Nyx",
  "Goddess of the Night",
  "NYX was the goddess of the night, one of the primordial gods (protogenoi) who emerged as the dawn of creation. She was a child of Khaos (Chaos, Air), and coupling with Erebos (Darkness) she produced Aither (Aether, Light) and Hemera (Day). Alone she spawned a brood of dark spirits including the three Fates, Sleep, Death, Strife and Pain. Nyx was an ancient deity usually envisaged as the very substance of the night--a veil of dark mists drawn across the sky to obscure the light of Aither, the shining blue of the heavens. Her opposite number was Hemera (Day) who scattered the mists of night at dawn. In ancient art Nyx was depicted as a either a winged goddess or charioteer, sometimes crowned with an aureole of dark mists."
);

const aither = new God(
  "Aether",
  "God of Light",
  "AITHER (Aether) was the primordial god (protogenos) of light and the bright, blue ether of the heavens. His mists filled the space between the solid dome of the sky (ouranos) and the transparent mists of the earth-bound air (khaos, aer). In the evening his mother Nyx drew her dark veil across the sky, obscuring the ether and bringing night. In the morn his sister and wife Hemera dispersed night's mist to reveal the shining blue ether of day. In the ancient cosmogonies night and day were regarded as elements separate from the sun. Aither was one of the three 'airs'. The middle air was aer or khaos, a colourless mist which enveloped the mortal world. The lower air was erebos, the mists of darkness, which enveloped the dark places beneath the earth and the realm of the dead. The third was the upper air of aither, the mist of light and blue of the heavenly ether. The aither enveloped the mountain peaks, clouds, stars, sun and moon. Aether's female counterpart was Aithre (Aethra), Titaness of the clear blue sky and mother of the sun and moon."
);

const erebus = new God(
  "Erebus",
  "God of Darkness",
  "EREBOS (Erebus) was the primordial god (protogenos) of darkness and the consort of Nyx (Night). His dark mists encircled the world and filled the deep hollows of the earth. In the evening, Erebos' wife Nyx drew Erebos' darkness across the sky bringing night and his daughter Hemera scattered it at dawn bringing day--the first obscuring Aither (Aether), the heavenly light of the ether, the second revealing it. In the ancient cosmogonies the heavenly ether (aither) and the dark mists of the netherworld (erebos) were regarded as the sources of day and light rather than the sun."
);

const hemera = new God(
  "Hemera",
  "Goddess of the Day",
  "HEMERA was the the primordial goddess (protogenos) of the day. She was a daughter of Erebos (Darkness) and Nyx (Night) and the sister and wife of Aither (Aether, Heavenly Light). Every evening Hemera's mother Nyx drew her dark veil across the sky, obscuring the the shining blue of the heavenly ether (aither), and bringing night to earth. With each morn Hemera dispersed her mother's mists, bathing the earth again in the light of the ether. In the ancient cosmogonies night and day were actual substances distinct and independent of the sun. The sun ruled the day but was not its source."
);

const gaia = new God(
  "Gaia",
  "Goddess of the Earth",
  "GAIA (Gaea) was the goddess of the earth. She was one of the primoridal elemental deities (protogenoi) born at the dawn of creation. Gaia was the great mother of all creation--the heavenly gods were descended from her through her union with Ouranos (Uranus) (Sky), the sea-gods from her union with Pontos (Sea), the Gigantes (Giants) from her mating with Tartaros (the Pit), and mortal creatures born directly from her earthy flesh."
);

const ouranos = new God(
  "Ouranos",
  "God of the Sky",
  "OURANOS (Uranus) was the primordial god (protogenos) of the sky. The Greeks imagined the sky as a solid dome of brass, decorated with stars, whose edges descended to rest upon the outermost limits of the flat earth. Ouranos was the literal sky, just as his consort Gaia (Gaea) was the earth. Ouranos and Gaia had twelve sons and six daughters. He locked the eldest of these--the giant Kyklopes (Cyclopes) and Hekatonkheires (Hecatoncheires)--away inside the belly of Earth. Gaia suffered immense pain and persuaded her Titan sons to rebel. Four of these positioned themselves at the corners of the world, ready to grasp their father as he descended to lie with Earth, while the fifth, Kronos (Cronus), took his place in the centre and there castrated Ouranos with an adamantine sickle. The sky-god's blood fell upon the earth, producing the avenging Erinyes and the Gigantes (Giants)."
);

const aphrodite = new God(
  "Aphrodite",
  "Goddess of Love",
  "APHRODITE was the Olympian goddess of love, beauty, pleasure and procreation. She was depicted as a beautiful woman often accompanied by the winged godling Eros (Love). Her attributes included a dove, apple, scallop shell and mirror. In classical sculpture and fresco she was usually depicted nude."
);

const mnemosyne = new God(
  "Mnemosyne",
  "Goddess of Memory & Language",
  "MNEMOSYNE was the Titan goddess of memory and remembrance and the inventress of language and words. As a Titan daughter of Ouranos (Uranus, Heaven), Mnemosyne was also a goddess of time. She represented the rote memorisation required to preserve the stories of history and the sagas of myth before the introduction of writing. In this role she was the mother of the Mousai (Muses) who were originally patron goddesses of poets of the oral tradition. Finally Mnemosyne was a minor oracular goddess like her sister-Titanesses. She presided over the underground oracle of Trophonios (Trophonius) in Boiotia (Boeotia). The Titanis (Titaness) Mnemosyne was sometimes named as one of three Elder Mousai (Muses), who preceded the nine daughters of Zeus as goddesses of music."
);

const oceanus = new God(
  "Oceanus",
  "God of the Earth-River",
  "OKEANOS (Oceanus) was the primordial Titan god of the great, earth-encircling River Okeanos, font of all of the earth's fresh-water - rivers, wells, springs and rain-clouds. He was also the god who regulated the heavenly bodies which rose from and set into his waters. Okeanos' wife Tethys 'the Nurse' was probably envisioned distributing his nourishing waters across the earth through subterranean acquifers. Their children were the Potamoi, gods of rivers, and the Okeanides (Oceanids), nymphs of springs and fountains. Unlike his Titan-brothers Okeanos did not participate in the castration of their father Ouranos nor join the war against Zeus and the Olympian gods."
);

const tethys = new God(
  "Tethys",
  "Goddess of Fresh Water",
  "TETHYS was the Titan goddess of the primal font of fresh water which nourishes the earth. She was the wife of Okeanos (Oceanus), the earth-encircling, fresh-water stream, and the mother of the Potamoi (Rivers), the Okeanides (Oceanids) (nymphs of springs, streams and fountains), and the Nephelai (Clouds). Tethys, daughter of Gaia (Earth), fed her children's springs with the waters of Okeanos drawn through subterranean acquifers. Her name was derived from the Greek word têthê meaning 'nurse' or 'grandmother'."
);

const iapetus = new God(
  "Iapetus",
  "a Titan Brother",
  "IAPETOS (Iapetus) was one of the elder Titanes (Titans), sons of Ouranos (Uranus, Heaven) and Gaia (Gaea, Earth). Led by Kronos (Cronus), Iapetos and his brothers ambushed their father as he descended to lie with Mother Earth. Krios (Crios), Koios (Coeus), Hyperion and Iapetos (Iapetus) were posted at the four corners of the world where they seized hold of the Sky-God and held him fast, while Kronos castrated him with a sickle. The Titanes were later deposed by Zeus and cast into the pit of Tartaros (Tartarus). According to Pindar and Aeschylus (in his lost play Prometheus Unbound) the Titanes were eventually released from the pit through the clemency of Zeus. Iapetos (Iapetus) and his three brothers probably represent the four pillars of the cosmos which are described in Near-Eastern cosmogonies holding heaven and earth apart. Iapetos himself would have been the pillar of the west, a position later held by his son Atlas. When the Titanes were later cast into the pit of Tartaros - which Hesiod describes as a void beneath the foundations of the cosmos, where earth, sea and sky all have their roots - their cosmological role shifts from being supports of heaven to bearers of the entire cosmos. Iapetos 'the piercer' was probably also the Titan god symbolising mortality and the mortal life-span as his sons Prometheus and Epimetheus were the creators of mankind and all other mortal creatures."
);

const klymene = new God(
  "Klymene",
  "Goddess of Fame",
  "KLYMENE (Clymene) was one of the elder Okeanides and the Titan goddess of fame and renown. She was the wife of the Titan Iapetos and the mother of Prometheus and Atlas. Klymene was also named Asia and in this guise portrayed as the eponymous goddess of Anatolia (Asia Minor)."
);

const kronos = new God(
  "Kronos",
  "God of Time",
  "KRONOS (Cronus) was the King of the Titanes and the god of time, in particular time when viewed as a destructive, all-devouring force. He ruled the cosmos during the Golden Age after castrating and deposing his father Ouranos (Uranus, Sky). In fear of a prophecy that he would in turn be overthrown by his own son, Kronos swallowed each of his children as they were born. Rhea managed to save the youngest, Zeus, by hiding him away on the island of Krete (Crete), and fed Kronos a stone wrapped in swaddling clothes. The god grew up, forced Kronos to disgorge his swallowed offspring, and led the Olympians in a ten year war against the Titanes (Titans), driving them in defeat into the pit of Tartaros (Tartarus)."
);

const rhea = new God(
  "Rhea",
  "Mother of the Gods",
  "RHEIA (Rhea) was the Titanis (Titaness) mother of the gods, and goddess of female fertility, motherhood, and generation. Her name means 'flow' and 'ease.' As the wife of Kronos (Cronus, Time), she represented the eternal flow of time and generations; as the great Mother (Meter Megale), the 'flow' was menstrual blood, birth waters, and milk. She was also a goddess of comfort and ease, a blessing reflected in the common Homeric phrase 'the gods who live at their ease (rhea).' In myth, Rhea was the wife of the Titan Kronos (Cronus) and Queen of Heaven. When her husband heard a prophecy that he would be deposed by one of his children, he took to swallowing each of them as soon as they were born. But Rhea bore her youngest, Zeus, in secret and hid him away in a cave in Krete (Crete) guarded by shield-clashing Kouretes (Curetes). In his stead she presented Kronos with a stone wrapped in swaddling clothes which he promptly devoured. Rhea was closely identified with the Anatolian mother-goddess Kybele (Cybele). They were both depicted as matronly women, usually wearing a turret crown, and attended by lions."
);

const themis = new God(
  "Themis",
  "Goddess of Law & Order",
  "THEMIS was the Titan goddess of divine law and order--the traditional rules of conduct first established by the gods. She was also a prophetic goddess who presided over the most ancient oracles, including Delphoi (Delphi). In this role, she was the divine voice (themistes) who first instructed mankind in the primal laws of justice and morality, such as the precepts of piety, the rules of hospitality, good governance, conduct of assembly, and pious offerings to the gods. In Greek, the word themis referred to divine law, those rules of conduct long established by custom. Unlike the word nomos, the term was not usually used to describe laws of human decree."
);

const hyperion = new God(
  "Hyperion",
  "God of Heavenly Light",
  "HYPERION was the Titan god of heavenly light, one of the sons of Ouranos (Uranus, Heaven) and Gaia (Gaea, Earth), and the father of the lights of heaven--Eos the Dawn, Helios the Sun, and Selene the Moon. His wife was Theia, lady of the aither--the shining blue of the sky. Hyperion's name means 'watcher from above' or 'he who goes above' from the greek words hyper and iôn."
);

const theia = new God(
  "Theia",
  "Goddess of Sight",
  "THEIA was the Titan goddess of sight (thea) and the shining ether of the bright, blue sky (aithre). She was also, by extension, the goddess who endowed gold and silver with their brilliance and intrinsic value. Theia bore the Titan Hyperion three shining children--Helios the Sun, Eos the Dawn, and Selene the Moon. Her name was derived from the Greek words thea 'sight' and theiazô 'prophesy'. She was also named Aithre (Aethra) 'Blue-Sky' and Euryphaessa 'Wide-Shining'."
);

const koios = new God(
  "Koios",
  "a Titan Brother",
  "KOIOS (Coeus) was one of the elder Titanes (Titans), sons of Ouranos (Uranus, Sky) and Gaia (Gaea, Earth). He and his brothers conspired against their father, laying an ambush for him as he descended to lie with Earth. Four of the siblings were posted at the corners of the world, where they seized hold of him and held him fast, while Kronos (Cronus) castrated him with a sickle. In this myth the brothers apparently personified the great pillars which occur in near-Eastern cosmologies holding heaven and earth apart, or sometimes the whole cosmos aloft. Koios' alternate name, Polos ('of the northern pole'), suggests he was the Titan of the pillar of the north. His brothers Hyperion, Iapetos (Iapetus), and Krios (Crius), on the other hand, presided over the west, east, and south respectively. Koios, as god of the axis of heaven around which the constellations revolved, was probably also a god of heavenly oracles, just as his wife Phoibe (Phoebe) presided over the oracles of the axis of earth Delphi,--a role inherited by their grandson Apollon. The Titanes were eventually deposed by Zeus and cast into the pit of Tartaros. Hesiod describes this as a void located beneath the foundations of all, where earth, sea and sky have their roots. Here the Titanes shift in cosmological terms from being holders of heaven to bearers of the entire cosmos. According to Pindar and Aeschylus (in his lost play Prometheus Unbound) the Titanes were eventually released from the pit through the clemency of Zeus."
);

const phoebe = new God(
  "Phoebe",
  "Goddess of Intellect",
  "PHOIBE (Phoebe) was the Titan goddess of the bright intellect. She was wife of the Titan Koios (Coeus) 'the Inquiring' and the grandmother of Apollon, Artemis and Hekate. Phoibe was the third goddess to hold the great oracle of Delphoi (Delphi) which she in turn bestowed upon her grandson Apollon. Her name was derived from the Greek words phoibos 'bright' or 'radiant', phoibazô 'to prophesy' and phoibaô 'to purify'."
);

const krios = new God(
  "Krios",
  "a Titan Brother",
  "KRIOS (Crius) was one of the elder Titanes (Titans), sons of Ouranos (Uranus, Sky) and Gaia (Gaea, Earth). Led by Kronos (Cronus), the brothers conspired against their father and prepared an ambush as he descended to lie with Earth. Krios, Koios (Coeus), Hyperion and Iapetos (Iapetus) were posted at the four corners of the world where they seized hold of the sky-god and held him firm, while Kronos, hidden in the centre, castrated him with a sickle. In this myth the four brothers probably represent the four cosmic pillars separating heaven and earth which are described in near-Eastern cosmogonies. Krios was likely the southern pillar, while his brothers Koios, Iapetos, and Hyperion were the pillars of the north, east and west respectively. Krios' connection with the south is found both in his name and family connections:-he is 'the Ram,' the constellation Aries, whose springtime rising in the south marked the start of the Greek year; his eldest son is Astraios (Astraeus), god of the stars; and his wife is Eurybia, a daughter of the sea."
);

const eurybia = new God(
  "Eurybia",
  "Goddess of Mastery of the Sea",
  "EURYBIA was the goddess of power over, and mastery of, the sea. She apparently presided over external forces which influence the main such as the rise of the constellations, seasonal weather, and the power of the winds. Eurybia was the wife of the Titan Krios (Crius) and the grandmother of a variety of divinities with power over the sea. These included the Anemoi (Winds), the Astra (Stars), Hekate (Lady of Witchraft), Selene (the Moon), Nike (Victory), Bia (Force), Kratos (Power), Zelos (Rivalry). Some of these also represent human mastery of the seas such as the winds for sailing, stars for navigation, and force, power and victory representing naval supremacy."
);

const metis = new God(
  "Metis",
  "Goddess of Good Counsel",
  "METIS was one of the elder Okeanides and the Titan-goddess of good counsel, planning, cunning and wisdom. She was a counsellor of Zeus during the Titan War and hatched the plan through which Kronos (Cronus) was forced to regurgitate his devoured children. In an odd reversal of fortune, Zeus swallowed Metis whole when a prophecy was revealed that she was destined to bear a son greater than his father. Metis afterwards bore a daughter, Athena, within the very belly of the god and equipped her with arms and armour before she was rebirthed from the god's head."
);

const amphitrite = new God(
  "Amphitrite",
  "Queen of the Sea",
  "AMPHITRITE was the goddess-queen of the sea, wife of Poseidon, and eldest of the fifty Nereides. She was the female personification of the sea--the loud-moaning mother of fish, seals and dolphins. When Poseidon first sought Amphitrite's hand in marriage, she fled his advances, and hid herself away near Atlas in the Ocean stream at the far ends of the earth. The dolphin-god Delphin eventually tracked her down and persuaded her to return to wed the sea-king."
);

const zeus = new God(
  "Zeus",
  "King of the Gods",
  "ZEUS was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle.",
  "Olympus",
  "span-three"
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
  chaos,
  nyx,
  aither,
  erebus,
  hemera,
  gaia,
  ouranos,
  mnemosyne,
  oceanus,
  tethys,
  iapetus,
  klymene,
  kronos,
  rhea,
  themis,
  hyperion,
  theia,
  koios,
  phoebe,
  krios,
  eurybia,
  metis,
  amphitrite,
};
