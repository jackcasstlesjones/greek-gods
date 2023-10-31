import { v4 as uuidv4 } from "uuid";

class God {
  constructor(godName, godTitle, godInfo, godLink, replaceLink) {
    this.uuid = uuidv4();
    this.godName = godName;
    this.godTitle = godTitle;
    this.godInfo = godInfo;
    this.godLink = godLink;
  }
}
const chaos = new God(
  "Chaos",
  "First of the Primordial Gods",
  "CHAOS was the first of the primordial gods to emerge at the dawn of creation. Khaos was the lower atmosphere which surrounds the earth--both the invisible air and the gloom of fog and mist. The word khaos means 'gap' or 'chasm' being the space between heaven and earth. She was also a goddess of fate like her daughter Nyx and grand-daughters the Moirai (Moirae). As the goddess of the air Khaos was also the mother of birds, just as Gaia (the Earth) was the mother of land animals, and Thalassa (the Sea) was the mother of fish.",
  "https://en.wikipedia.org/wiki/Chaos_(cosmogony)"
);

const nyx = new God(
  "Nyx",
  "Goddess of the Night",
  "NYX was the goddess of the night, one of the primordial gods who emerged as the dawn of creation. She was a child of Chaos, and coupling with Erebus she produced Aether and Hemera. Alone she spawned a brood of dark spirits including the three Fates, Sleep, Death, Strife and Pain. Nyx was an ancient deity usually envisaged as the very substance of the night--a veil of dark mists drawn across the sky to obscure the light of Aither, the shining blue of the heavens. Her opposite number was Hemera who scattered the mists of night at dawn."
);

const aither = new God(
  "Aether",
  "God of Light",
  "AETHER was the primordial god of light and the bright, blue ether of the heavens. His mists filled the space between the solid dome of the sky (Ouranos) and the transparent mists of the earth-bound air (khaos, aer). In the evening his mother Nyx drew her dark veil across the sky. In the morn his sister and wife Hemera dispersed night's mist. Aither was one of three 'airs'. The middle air was aer, a colourless mist which enveloped the mortal world. The lower air was erebus, which enveloped the dark places beneath the earth and the realm of the dead. The third was the upper air of aether.",
  "https://en.wikipedia.org/wiki/Aether_(mythology)"
);

const erebus = new God(
  "Erebus",
  "God of Darkness",
  "EREBUS was the primordial god of darkness and the consort of Nyx. His dark mists encircled the world and filled the deep hollows of the earth. In the evening, Nyx drew Erebus' darkness across the sky bringing night and his daughter Hemera scattered it at dawn bringing day--the first obscuring Aither (Aether), the heavenly light of the ether, the second revealing it. In the ancient cosmogonies the heavenly ether (aither) and the dark mists of the netherworld (erebos) were regarded as the sources of day and light rather than the sun."
);

const hemera = new God(
  "Hemera",
  "Goddess of the Day",
  "HEMERA was the the primordial goddess of the day. She was a daughter of Erebos and Nyx and the sister and wife of Aether. With each morn Hemera dispersed her mother's mists, bathing the earth again in the light of the ether. In the ancient cosmogonies night and day were actual substances distinct and independent of the sun. The sun ruled the day but was not its source."
);

const gaia = new God(
  "Gaia",
  "Goddess of the Earth",
  "GAIA was the goddess of the earth. She was one of the primoridal elemental deities (protogenoi) born at the dawn of creation. Gaia was the great mother of all creation--the heavenly gods were descended from her through her union with Ouranos (Uranus) (Sky), the sea-gods from her union with Pontos (Sea), the Gigantes (Giants) from her mating with Tartaros (the Pit), and mortal creatures born directly from her earthy flesh."
);

const ouranos = new God(
  "Ouranos",
  "God of the Sky",
  "OURANOS was the primordial god of the sky. Ouranos was the literal sky, just as his consort Gaia was the earth. Ouranos and Gaia had twelve sons and six daughters. He locked the eldest of these--the giant Cyclopes and Hecatoncheires--away inside the belly of Earth. Gaia suffered immense pain and persuaded her Titan sons to rebel. When they castrated Ouranos, the sky-god's blood fell upon the earth, producing the avenging Erinyes and the Gigantes."
);

const aphrodite = new God(
  "Aphrodite",
  "Goddess of Love",
  "APHRODITE was the Olympian goddess of love, beauty, pleasure and procreation. She was depicted as a beautiful woman often accompanied by the winged godling Eros (Love). Her attributes included a dove, apple, scallop shell and mirror. In classical sculpture and fresco she was usually depicted nude."
);

const mnemosyne = new God(
  "Mnemosyne",
  "Goddess of Memory & Language",
  "MNEMOSYNE was the Titan goddess of memory and remembrance and the inventress of language and words. As a Titan daughter of Ouranos, Mnemosyne was also a goddess of time. She represented the rote memorisation required to preserve the stories of history and the sagas of myth before the introduction of writing. In this role she was the mother of the Mousai (Muses) who were originally patron goddesses of poets of the oral tradition."
);

const oceanus = new God(
  "Oceanus",
  "God of the Earth-River",
  "OCEANUS was the primordial Titan god of the great, earth-encircling River Okeanos, font of all of the earth's fresh-water. Oceanus' wife Tethys was envisioned distributing his nourishing waters across the earth through subterranean acquifers. Their children were the Potamoi, gods of rivers, and the Oceanids, nymphs of springs and fountains. Unlike his Titan-brothers Okeanos did not participate in the castration of their father Ouranos nor join the war against Zeus and the Olympian gods."
);
const tethys = new God(
  "Tethys",
  "Goddess of Fresh Water",
  "TETHYS was the Titan goddess of the primal font of fresh water which nourishes the earth. She was the wife of Oceanus, the earth-encircling, fresh-water stream, and the mother of the Potamoi (Rivers), the Oceanids (nymphs of springs, streams and fountains), and the Nephelai (Clouds). Tethys, daughter of Gaia, fed her children's springs with the waters of Okeanos drawn through subterranean acquifers. Her name was derived from the Greek word têthê meaning 'nurse' or 'grandmother'.",
  "https://en.wikipedia.org/wiki/Tethys_(mythology)"
);

const iapetus = new God(
  "Iapetus",
  "a Titan Brother",
  "IAPETUS was one of the elder Titans. Led by Kronos, Iapetos and his brothers ambushed their father as he descended to lie with Mother Earth. Crius, Koios, Hyperion and Iapetus were posted at the four corners of the world where they seized hold of the Sky-God and held him fast, while Kronos castrated him. Iapetus and his three brothers represent the four pillars of the cosmos which are described in Near-Eastern cosmogonies. Iapetos himself would have been the pillar of the west, a position later held by his son Atlas."
);

const klymene = new God(
  "Klymene",
  "Goddess of Fame",
  "KLYMENE was one of the elder Okeanides and the Titan goddess of fame and renown. She was the wife of the Titan Iapetos and the mother of Prometheus and Atlas. Klymene was also named Asia and in this guise portrayed as the eponymous goddess of Anatolia (Asia Minor).",
  "https://en.wikipedia.org/wiki/Clymene_(wife_of_Iapetus)"
);

const kronos = new God(
  "Kronos",
  "God of Time",
  "KRONOS was the King of the Titanes and the god of time, in particular time when viewed as a destructive force. He ruled the cosmos after castrating and deposing his father Ouranos. In fear of a prophecy that he would be overthrown by his own son, Kronos swallowed each of his children as they were born. Rhea managed to save the youngest, Zeus, by feeding Kronos a stone wrapped in clothes. Zeus grew up, forced Kronos to disgorge his offspring, and led the Olympians in a war against the Titans, driving them in defeat into the pit of Tartarus.",
  "https://en.wikipedia.org/wiki/Cronus"
);

const rhea = new God(
  "Rhea",
  "Mother of the Gods",
  "Rhea was the Titaness mother of the gods, and goddess of female fertility and motherhood. Her name means 'flow' and 'ease.' As the wife of Kronos, she represented the eternal flow of time and generations; the 'flow' was menstrual blood, birth waters, and milk. When her husband took to swallowing each of his children them as soon as they were born, Rhea bore her youngest, Zeus, in secret and hid him away in a cave in Crete. In his stead she presented Kronos with a stone wrapped in swaddling clothes which he promptly devoured.",
  "https://en.wikipedia.org/wiki/Rhea_(mythology)"
);

const themis = new God(
  "Themis",
  "Goddess of Law & Order",
  "THEMIS was the Titan goddess of divine law and order. She was also a prophetic goddess who presided over the most ancient oracles, including Delphi. She was the divine voice who first instructed mankind in the primal laws of justice and morality, such as the precepts of piety, the rules of hospitality, good governance, conduct of assembly, and pious offerings to the gods. In Greek, the word themis referred to divine law, those rules of conduct long established by custom."
);

const hyperion = new God(
  "Hyperion",
  "God of Heavenly Light",
  "HYPERION was the Titan god of heavenly light, one of the sons of Ouranos (Uranus, Heaven) and Gaia (Gaea, Earth), and the father of the lights of heaven--Eos the Dawn, Helios the Sun, and Selene the Moon. His wife was Theia, lady of the aither--the shining blue of the sky. Hyperion's name means 'watcher from above' or 'he who goes above' from the greek words hyper and iôn.",
  "https://en.wikipedia.org/wiki/Hyperion_(Titan)"
);

const theia = new God(
  "Theia",
  "Goddess of Sight",
  "THEIA was the Titan goddess of sight (thea) and the shining ether of the bright, blue sky (aithre). She was also, by extension, the goddess who endowed gold and silver with their brilliance and intrinsic value. Theia bore the Titan Hyperion three shining children--Helios the Sun, Eos the Dawn, and Selene the Moon. Her name was derived from the Greek words thea 'sight' and theiazô 'prophesy'. She was also named Aithre (Aethra) 'Blue-Sky' and Euryphaessa 'Wide-Shining'."
);

const koios = new God(
  "Koios",
  "a Titan Brother",
  "KOIOS (Coeus) was one of the elder Titans, sons of Ouranos and Gaia. He and his brothers conspired against their father, laying an ambush for him as he descended to lie with Earth. Four of the siblings were posted at the corners of the world, where they seized hold of him while Kronos castrated him. The brothers personified the great pillars in near-Eastern cosmologies holding heaven and earth apart. Koios' alternate name, Polos ('of the northern pole'), suggests he was the Titan of the pillar of the north."
);

const phoebe = new God(
  "Phoebe",
  "Goddess of Intellect",
  "PHOIBE (Phoebe) was the Titan goddess of the bright intellect. She was wife of the Titan Koios (Coeus) 'the Inquiring' and the grandmother of Apollon, Artemis and Hekate. Phoibe was the third goddess to hold the great oracle of Delphoi (Delphi) which she in turn bestowed upon her grandson Apollon. Her name was derived from the Greek words phoibos 'bright' or 'radiant', phoibazô 'to prophesy' and phoibaô 'to purify'.",
  "https://en.wikipedia.org/wiki/Phoebe_(Titaness)"
);

const krios = new God(
  "Crius",
  "a Titan Brother",
  "CRIUS was one of the elder Titans, sons of Ouranos and Gaia. Led by Kronos, the brothers conspired against their father and prepared an ambush as he descended to lie with Earth. Krios, Koios, Hyperion and Iapetus hid at the four corners of the world where they seized hold of Ouranos, while Kronos, in the centre, castrated him with a sickle. The four brothers probably represent the four cosmic pillars separating heaven and earth described in near-Eastern cosmogonies. Krios was likely the southern pillar.",
  "https://en.wikipedia.org/wiki/Crius"
);

const eurybia = new God(
  "Eurybia",
  "Goddess of Mastery of the Sea",
  "EURYBIA was the goddess of power over, and mastery of, the sea. Eurybia was the wife of the Titan Crius and the grandmother of a variety of divinities with power over the sea. These included the Anemoi (Winds), the Astra (Stars), Hekate (Lady of Witchraft), Selene (the Moon), Nike (Victory), Bia (Force), Kratos (Power), Zelos (Rivalry). Some of these also represent human mastery of the seas such as the winds for sailing, stars for navigation, and force, power and victory representing naval supremacy.",
  "https://en.wikipedia.org/wiki/Eurybia_(mythology)"
);

const metis = new God(
  "Metis",
  "Goddess of Good Counsel",
  "METIS an elder Oceanid and the Titan-goddess of good counsel, planning, cunning and wisdom. She was a counsellor of Zeus during the Titan War and hatched the plan through which Kronos was forced to regurgitate his devoured children. Zeus swallowed Metis whole when a prophecy was revealed that she was destined to bear a son greater than his father. Metis afterwards bore a daughter, Athena, within the very belly of the god and equipped her with arms and armour before she was rebirthed from the god's head.",
  "https://en.wikipedia.org/wiki/Metis_(mythology)"
);

const amphitrite = new God(
  "Amphitrite",
  "Queen of the Sea",
  "AMPHITRITE was the goddess-queen of the sea, wife of Poseidon, and eldest of the fifty Nereides. She was the female personification of the sea--the loud-moaning mother of fish, seals and dolphins. When Poseidon first sought Amphitrite's hand in marriage, she fled his advances, and hid herself away near Atlas in the Ocean stream at the far ends of the earth. The dolphin-god Delphin eventually tracked her down and persuaded her to return to wed the sea-king."
);

const theOceanids = new God(
  "The Oceanids",
  "Water Nymphs",
  "THE OCEANIDS were three thousand goddess-nymphs who presided over the sources of earth's fresh-water - from rain-clouds to subterranean springs and fountains. Their numbers included the Nephelai (Cloud-Nymphs), Aurai (Breeze-Nymphs), Naiades (Spring and Fountain Nymphs), Leimonides (Pasture Nymphs), and Anthousai (Flower Nymphs). The eldest among them were numbered among the Titanides Styx, Dione, Neda, Metis, Klymene, Eurynome, Doris, Elektra, and Pleione.",
  "https://en.wikipedia.org/wiki/Oceanids"
);

const eos = new God(
  "Eos",
  "Goddess of the Dawn",
  "EOS was the rosy-fingered goddess of the dawn. She and her siblings Helios (the Sun) and Selene (the Moon) were numbered amongst the second-generation Titan gods. Eos rose into the sky from the river Okeanos (Oceanus) at the start of each day, and with her rays of light dispersed the mists of night. She was depicted either driving a chariot drawn by winged horses or borne aloft on her own wings."
);

const helios = new God(
  "Helios",
  "God of the Sun",
  "HELIOS was the Titan god of the sun, a guardian of oaths, and the god of sight. He dwelt in a golden palace in the River Okeanos (Oceanus) at the far ends of the earth from which he emerged each dawn, crowned with the aureole of the sun, driving a chariot drawn by four winged steeds. When he reached the the land of the Hesperides in the far West he descended into a golden cup which bore him through the northern streams of Okeanos back to his rising place in the East."
);

const selene = new God(
  "Selene",
  "Goddess of the Moon",
  "SELENE was the Titan goddess of the moon. She was depicted as a woman riding sidesaddle on a horse or driving a chariot drawn by a pair of winged steeds. Her lunar sphere or crescent was either a crown set upon her head or the fold of a raised, shining cloak. She was sometimes said to drive a team of oxen and her lunar crescent was likened to a pair of bull's horns."
);

const epimethius = new God(
  "Epimetheus",
  "God of Afterthought",
  "EPIMETHEUS was the Titan god of afterthought and excuses. He and his brother Prometheus were tasked with populating the earth. However, Epimetheus depleted their gifts, leaving mankind completely helpless. As a result the Titan brother stole fire from heaven to arm them. Zeus was angered by this theft and created Pandora, the first woman. Epimetheus happily received her as his bride, but she later opened a jar entrusted her by Zeus, releasing a plague of harmful spirits to trouble mankind."
);

const prometheus = new God(
  "Prometheus",
  "God of Forethought",
  "PROMETHEUS was the Titan god of forethought and crafty counsel who was given the task of moulding mankind out of clay. His attempts to better the lives of his creation brought him into conflict with Zeus. When Zeus withheld fire, he stole it from heaven and delivered it to mortal kind hidden inside a fennel-stalk. As punishment for this rebellious act, Prometheus was arrested and bound to a stake on Mount Caucasus where an eagle was set to feed upon his ever-regenerating liver."
);

const atlas = new God(
  "Atlas",
  "God who Carried the Sky",
  "ATLAS was the Titan god who bore the sky aloft. Atlas was a leader of the Titans in their war against Zeus and after their defeat he was condemned to carry the heavens upon his shoulders. Atlas was also the god who instructed mankind in the art of astronomy, a tool which was used by sailors in navigation and farmers in measuring the seasons. These roles were often combined and Atlas becomes the god who turns the heaven on their axis, causing the stars to revolve.",
  "https://en.wikipedia.org/wiki/Atlas_(mythology)"
);

const pleione = new God(
  "Pleione",
  "Oceanid Nymph",
  "PLEIONE was an Okeanid-nymph of Mount Kyllene (Cyllene) in Arkadia, southern Greece. She was the wife of the Titan Atlas and bore him a bevy of beautiful daughters. Pleione may have been numbered amongst the Epimelides (Sheep-Nymphs) and presided over the multiplication of the flocks--for her name means 'to increase in number' and her grandson Hermes was the god of animal husbandry.",
  "https://en.wikipedia.org/wiki/Pleione_(mythology)"
);

const leto = new God(
  "Leto",
  "Mother of the Twins",
  "LETO was one of the Titanides (female Titans), a bride of Zeus, and the mother of the twin gods Apollon and Artemis. She was the goddess of motherhood and, with her children, a protectress of the young. Her name and iconography suggest she was also a goddess of modesty and womanly demure. Like her sister Asteria she may also have been a goddess of the night, or alternatively of the light of day."
);

const asteria = new God(
  "Asteria",
  "Goddess of Nighttime Divinations",
  "ASTERIA was the Titan goddess of falling stars and perhaps of nighttime divinations such as oneiromancy (by dreams) and astrology (by stars). She was the mother of Hekate (Hecate), goddess of witchcraft, by the Titan Perses. After the fall of the Titans, Zeus chased Asteria across the sky but she escaped him by transforming herself into a quail and leaping into the sea to became the island of Delos. Her sister Leto later gave birth to Apollon on the isle.",
  "https://en.wikipedia.org/wiki/Asteria_(Titaness)"
);

const perses = new God(
  "Perses",
  "God of Destruction",
  "PERSES was the Titan god of destruction. He was the father of Hekate, goddess of witchcraft, by the Titanis Asteria ('Starry One'). Perses' name means 'the Destroyer' or 'the Ravager' from the Greek words persô and perthô. Hesiod inexplicably describes him as 'preeminent among all men in wisdom.'",
  "https://en.wikipedia.org/wiki/Perses_(Titan)"
);

const pallas = new God(
  "Pallas",
  "God of Battle",
  "PALLAS was the Titan god of battle and warcraft. He was the father of Nike (Victory), Zelos (Rivalry), Kratos (Cratus, Strength) and Bia (Power) by Styx (Hatred), children who sided with Zeus during the Titan-War. Pallas' name was derived from the Greek word pallô meaning 'to brandish (a spear)'. He was vanquished by the goddess Athena who crafted her aigis (a goat-hide arm-guard) from his skin.",
  "https://en.wikipedia.org/wiki/Pallas_(Titan)"
);

const astraeus = new God(
  "Astraeus",
  "God of Astrology",
  "ASTRAEUS was the Titan god of stars and planets and of the art of astrology. By Eos he was the father of the Stars and the four seasonal Winds. The arrival of these Winds was heralded by the rising of certain constellations. Astraios also had a daughter named Astraea who was the goddess of the constellation Virgo. Astraios' name appears with those of several other Titans in the lists of Gigantes (Giants) who made war on the gods which suggests he played some role in both the Titan and Giant Wars."
);

const theMorai = new God(
  "The Moirai",
  "Goddesses of Fate",
  "THE MOIRAI were the three goddesses of fate who personified the inescapable destiny of man. They assigned to every person his or her fate or share in the scheme of things. Their name means 'Parts.' 'Shares' or 'Alottted Portions.' The individuals were Klotho (Clotho), the 'the Spinner,' who spun the thread of life, Lakhesis (Lachesis), 'the Apportioner of Lots', who measured it, and Atropos (or Aisa), 'She who cannot be turned,' who cut it short. Zeus Moiragetes, the god of fate, was their leader.",
  "https://en.wikipedia.org/wiki/Moirai"
);

const theHorai = new God(
  "The Horae",
  "Goddesses of the Seasons",
  "THE HORAE were the goddesses of the seasons and the natural portions of time. They presided over the revolutions of the heavenly constellations by which the year was measured, while their three sisters, the Moirae (Moirae) spinned out the web of fate. The Horai also guarded the gates of Olympos and rallied the stars and constellations of heaven.",
  "https://en.wikipedia.org/wiki/Horae"
);

const hecate = new God(
  "Hecate",
  "Goddess of Witchcraft",
  "HECATE was the goddess of magic, witchcraft, the night, moon, ghosts and necromancy. She was the only child of the Titanes Perses and Asteria from whom she received her power over heaven, earth, and sea. Hekate assisted Demeter in her search for Persephone, guiding her through the night with flaming torches. After the mother-daughter reunion became she Persephone's minister and companion in Haides."
);

const triton = new God(
  "Triton",
  "Fish-Tailed Sea God",
  "TRITON was a fish-tailed sea-god, the son and herald of Poseidon who stilled the waves with his conch-shell trumpet. Triton was also described as the god of the Tritonis, a large salt-lake in Libya. When the Argonauts found themselves stranded in the middle of the desert he helped them find passage from the lake back to the sea. Trtion was depicted in Greek vase painting as fish-tailed merman, sometimes bearded, sometimes youthful.",
  "https://en.wikipedia.org/wiki/Triton_(mythology)"
);

const maia = new God(
  "Maia",
  "the Nursing Mother",
  "MAIA was the eldest of the Pleiades, the seven nymphs of the constellation Pleiades. She was a shy goddess who dwelt alone in a cave near the peaks of Mount Kyllene (Cyllene) in Arkadia where she secretly gave birth to the god Hermes, her son by Zeus. She also raised the boy Arkas (Arcas) in her cave whose mother Kallisto (Callisto) had been transformed into a bear."
);

const thePleiades = new God(
  "The Pleiades",
  "the Mountain Nymphs",
  "THE PLEIADES were seven mountain-nymph daughters of the Titan Atlas. Their leader was Maia the mother of Hermes by Zeus. Five of the other Pleiades were also loved by gods becoming ancestresses of various royal families including those of Sparta and Troy. When they were pursued by the lustful giant Orion, Zeus placed them amongst the stars as the constellation Pleiades. Their name means 'Daughters of Pleione' and also 'Ladies of Plenty' from the Greek word pleiôn 'plenty'.",
  "https://en.wikipedia.org/wiki/Pleiades_(Greek_mythology)"
);

const poseidon = new God(
  "Poseidon",
  "God of the Sea",
  "POSEIDON was the Olympian god of the sea, earthquakes, floods, drought and horses. He was depicted as a mature man with a sturdy build and dark beard holding a trident (a three-pronged fisherman's spear).",
  "Olympus"
);

const hestia = new God(
  "Hestia",
  "Goddess of the Hearth",
  "HESTIA was the virgin goddess of the hearth (both private and municipal) and the home. As the goddess of the family hearth she also presided over the cooking of bread and the preparation of the family meal. Hestia was also the goddess of the sacrificial flame and received a share of every sacrifice to the gods. The cooking of the communal feast of sacrificial meat was naturally a part of her domain."
);

const hera = new God(
  "Hera",
  "Queen of the Gods",
  "HERA was the Olympian queen of the gods, and the goddess of marriage, women, the sky and the stars of heaven. She was usually depicted as a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre, and sometimes accompanied by a lion, cuckoo or hawk."
);

const hermes = new God(
  "Hermes",
  "Messenger of the Gods",
  "HERMES was the Olympian god of herds and flocks, travellers and hospitality, roads and trade, thievery and cunning, heralds and diplomacy, language and writing, athletic contests and gymnasiums, astronomy and astrology. He was the herald and personal messenger of Zeus, King of the Gods, and also the guide of the dead who led souls down into the underworld. Hermes was depicted as either a handsome and athletic, beardless youth or as an older, bearded man, with winged boots and a herald's wand."
);

const demeter = new God(
  "Demeter",
  "Goddess of Agriculture",
  "DEMETER was the Olympian goddess of agriculture, grain and bread who sustained mankind with the earth's rich bounty. She presided over the foremost of the Mystery Cults which promised its intiates the path to a blessed afterlife in the realm of Elysium. Demeter was depicted as a mature woman, often wearing a crown and bearing sheafs of wheat or a cornucopia (horn of plenty), and a torch."
);

const hades = new God(
  "Hades",
  "King of the Underworld",
  "HADES was the king of the underworld and god of the dead. He presided over funeral rites and defended the right of the dead to due burial. Haides was also the god of the hidden wealth of the earth, from the fertile soil with nourished the seed-grain, to the mined wealth of gold, silver and other metals."
);

const athena = new God(
  "Athena",
  "Goddess of Wisdom",
  "ATHENA was the Olympian goddess of wisdom and good counsel, war, the defence of towns, heroic endeavour, weaving, pottery and various other crafts. She was depicted as a stately woman armed with a shield and spear, and wearing a long robe, crested helm, and the famed aigis--a snake-trimmed cape adorned with the monstrous visage of the Gorgon Medousa (Medusa)."
);

const zeus = new God(
  "Zeus",
  "King of the Gods",
  "ZEUS was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle."
);

const persephone = new God(
  "Persephone",
  "Queen of the Underworld",
  "PERSEPHONE was the goddess queen of the underworld, wife of the god Haides (Hades). She was also the goddess of spring growth, who was worshipped alongside her mother Demeter in the Eleusinian Mysteries. This agricultural-based cult promised its initiates passage to a blessed afterlife."
);

const hephaestus = new God(
  "Hephaestus",
  "God of Blacksmiths",
  "HEPHAESTUS was the Olympian god of fire, smiths, craftsmen, metalworking, stonemasonry and sculpture. He was depicted as a bearded man holding a hammer and tongs--the tools of a smith--and sometimes riding a donkey."
);

const ares = new God(
  "Ares",
  "God of War",
  "ARES was the Olympian god of war, battlelust, courage and civil order. In ancient Greek art he was depicted as either a mature, bearded warrior armed for battle, or a nude, beardless youth with a helm and spear."
);

const hebe = new God(
  "Hebe",
  "Goddess of Youth",
  "HEBE was the goddess of youth and the cupbearer of the gods who served ambrosia at the heavenly feast. She was also the patron goddess of the young bride and an attendant of the goddess Aphrodite. Herakles (Heracles) received Hebe in marriage upon his ascension to Olympos, a wedding which reconciled the hero with Hebe's mother Hera.",
  "https://en.wikipedia.org/wiki/Hebe_(mythology)"
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

const semele = new God(
  "Semele",
  "Goddess of Female Frenzy",
  "SEMELE was the mother of Dionysos and the goddess of the Bacchic frenzy which seized female devotees of the god during the Orgies. She was a princess loved by the god Zeus. When his wife Hera learned of their affair, she tricked the girl into having Zeus swear an oath to appear before her in his full glory. The god did so and Semele was consumed by the fire of his lightning-bolts. Zeus recovered their son Dionysos from her womb and upon reaching adulthood he fetched her from the underworld to join the gods on Olympus."
);

const dionysus = new God(
  "Dionysus",
  "God of Wine",
  "DIONYSUS was the Olympian god of wine, vegetation, pleasure, festivity, madness and wild frenzy. He was depicted as either an older, bearded god or an effeminate, long-haired youth. His attributes included the thyrsos (a pine-cone tipped staff), a drinking cup and a crown of ivy. He was usually accompanied by a troop of Satyrs and Mainades (wild female devotees.)",
  "Olympus"
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
  theOceanids,
  eos,
  helios,
  selene,
  epimethius,
  prometheus,
  atlas,
  pleione,
  leto,
  asteria,
  perses,
  pallas,
  astraeus,
  theMorai,
  theHorai,
  hecate,
  triton,
  maia,
  thePleiades,
  persephone,
  ares,
  hebe,
  semele,
};
