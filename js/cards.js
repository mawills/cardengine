var cards = {
	aridmesa: {
		"layout": "normal",
		"name": "Arid Mesa",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Arid Mesa: Search your library for a Mountain or Plains card and put it onto the battlefield. Then shuffle your library.",
	},
	bloodcrypt: {
		"layout": "normal",
		"name": "Blood Crypt",
		"type": "Land — Swamp Mountain",
		"types": [
			"Land"
		],
		"subtypes": [
			"Swamp",
			"Mountain"
		],
		"text": "({T}: Add {B} or {R} to your mana pool.)\nAs Blood Crypt enters the battlefield, you may pay 2 life. If you don't, Blood Crypt enters the battlefield tapped.",
		"colorIdentity": [
			"B",
			"R"
		]
	},
	bloodstainedmire: {
		"layout": "normal",
		"name": "Bloodstained Mire",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Bloodstained Mire: Search your library for a Swamp or Mountain card and put it onto the battlefield. Then shuffle your library.",
	},
	godlessshrine: {
		"layout": "normal",
		"name": "Godless Shrine",
		"type": "Land — Plains Swamp",
		"types": [
			"Land"
		],
		"subtypes": [
			"Plains",
			"Swamp"
		],
		"text": "({T}: Add {W} or {B} to your mana pool.)\nAs Godless Shrine enters the battlefield, you may pay 2 life. If you don't, Godless Shrine enters the battlefield tapped.",
		"colorIdentity": [
			"W",
			"B"
		]
	},
	overgrowntomb: {
		"layout": "normal",
		"name": "Overgrown Tomb",
		"type": "Land — Swamp Forest",
		"types": [
			"Land"
		],
		"subtypes": [
			"Swamp",
			"Forest"
		],
		"text": "({T}: Add {B} or {G} to your mana pool.)\nAs Overgrown Tomb enters the battlefield, you may pay 2 life. If you don't, Overgrown Tomb enters the battlefield tapped.",
		"imageName": "overgrown tomb",
		"colorIdentity": [
			"B",
			"G"
		]
	},
	sacredfoundry: {
		"layout": "normal",
		"name": "Sacred Foundry",
		"type": "Land — Mountain Plains",
		"types": [
			"Land"
		],
		"subtypes": [
			"Mountain",
			"Plains"
		],
		"text": "({T}: Add {R} or {W} to your mana pool.)\nAs Sacred Foundry enters the battlefield, you may pay 2 life. If you don't, Sacred Foundry enters the battlefield tapped.",
		"mciNumber": "14",
		"imageName": "sacred foundry",
		"colorIdentity": [
			"W",
			"R"
		]
	},
	stompingground: {
		"layout": "normal",
		"name": "Stomping Ground",
		"type": "Land — Mountain Forest",
		"types": [
			"Land"
		],
		"subtypes": [
			"Mountain",
			"Forest"
		],
		"text": "({T}: Add {R} or {G} to your mana pool.)\nAs Stomping Ground enters the battlefield, you may pay 2 life. If you don't, Stomping Ground enters the battlefield tapped.",
		"mciNumber": "9",
		"imageName": "stomping ground",
		"colorIdentity": [
			"R",
			"G"
		]
	},
	verdantcatacombs: {
		"layout": "normal",
		"name": "Verdant Catacombs",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Verdant Catacombs: Search your library for a Swamp or Forest card and put it onto the battlefield. Then shuffle your library.",
		"mciNumber": "23",
		"imageName": "verdant catacombs"
	},
	windsweptheath: {
		"layout": "normal",
		"name": "Windswept Heath",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Windswept Heath: Search your library for a Forest or Plains card and put it onto the battlefield. Then shuffle your library.",
		"mciNumber": "20",
		"imageName": "windswept heath"
	},
	woodedfoothills: {
		"layout": "normal",
		"name": "Wooded Foothills",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Wooded Foothills: Search your library for a Mountain or Forest card and put it onto the battlefield. Then shuffle your library.",
		"mciNumber": "19",
		"imageName": "wooded foothills"
	},
	deathsshadow: {
		"layout": "normal",
		"name": "Death's Shadow",
		"manaCost": "{B}",
		"cmc": 1,
		"colors": [
			"Black"
		],
		"type": "Creature — Avatar",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Avatar"
		],
		"text": "Death's Shadow gets -X/-X, where X is your life total.",
		"power": "13",
		"toughness": "13",
		"imageName": "death's shadow",
		"colorIdentity": [
			"B"
		]
	},
	monasteryswiftspear: {
		"layout": "normal",
		"name": "Monastery Swiftspear",
		"manaCost": "{R}",
		"cmc": 1,
		"colors": [
			"Red"
		],
		"type": "Creature — Human Monk",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Human",
			"Monk"
		],
		"text": "Haste\nProwess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)",
		"mciNumber": "118",
		"power": "1",
		"toughness": "2",
		"imageName": "monastery swiftspear",
		"colorIdentity": [
			"R"
		]
	},
	steppelynx: {
		"layout": "normal",
		"name": "Steppe Lynx",
		"manaCost": "{W}",
		"cmc": 1,
		"colors": [
			"White"
		],
		"type": "Creature — Cat",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Cat"
		],
		"text": "Landfall — Whenever a land enters the battlefield under your control, Steppe Lynx gets +2/+2 until end of turn.",
		"mciNumber": "36",
		"power": "0",
		"toughness": "1",
		"imageName": "steppe lynx",
		"colorIdentity": [
			"W"
		]
	},
	streetwraith: {
		"layout": "normal",
		"name": "Street Wraith",
		"manaCost": "{3}{B}{B}",
		"cmc": 5,
		"colors": [
			"Black"
		],
		"type": "Creature — Wraith",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Wraith"
		],
		"text": "Swampwalk (This creature can't be blocked as long as defending player controls a Swamp.)\nCycling—Pay 2 life. (Pay 2 life, Discard this card: Draw a card.)",
		"mciNumber": "99",
		"power": "3",
		"toughness": "4",
		"imageName": "street wraith",
		"colorIdentity": [
			"B"
		]
	},
	tarmogoyf: {
		"layout": "normal",
		"name": "Tarmogoyf",
		"manaCost": "{1}{G}",
		"cmc": 2,
		"colors": [
			"Green"
		],
		"type": "Creature — Lhurgoyf",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Lhurgoyf"
		],
		"text": "Tarmogoyf's power is equal to the number of card types among cards in all graveyards and its toughness is equal to that number plus 1.",
		"mciNumber": "165",
		"power": "*",
		"toughness": "1+*",
		"imageName": "tarmogoyf",
		"colorIdentity": [
			"G"
		]
	},
	wildnacatl: {
		"layout": "normal",
		"name": "Wild Nacatl",
		"manaCost": "{G}",
		"cmc": 1,
		"colors": [
			"Green"
		],
		"type": "Creature — Cat Warrior",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Cat",
			"Warrior"
		],
		"text": "Wild Nacatl gets +1/+1 as long as you control a Mountain.\nWild Nacatl gets +1/+1 as long as you control a Plains.",
		"mciNumber": "4",
		"power": "1",
		"toughness": "1",
		"imageName": "wild nacatl",
		"colorIdentity": [
			"G"
		]
	},
	becomeimmense: {
		"layout": "normal",
		"name": "Become Immense",
		"manaCost": "{5}{G}",
		"cmc": 6,
		"colors": [
			"Green"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Delve (Each card you exile from your graveyard while casting this spell pays for {1}.)\nTarget creature gets +6/+6 until end of turn.",
		"mciNumber": "130",
		"imageName": "become immense",
		"colorIdentity": [
			"G"
		]
	},
	gitaxianprobe: {
		"layout": "normal",
		"name": "Gitaxian Probe",
		"manaCost": "{U/P}",
		"cmc": 1,
		"colors": [
			"Blue"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "({U/P} can be paid with either {U} or 2 life.)\nLook at target player's hand.\nDraw a card.",
		"mciNumber": "35",
		"imageName": "gitaxian probe",
		"colorIdentity": [
			"U"
		]
	},
	lightningbolt: {
		"layout": "normal",
		"name": "Lightning Bolt",
		"manaCost": "{R}",
		"cmc": 1,
		"colors": [
			"Red"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Lightning Bolt deals 3 damage to target creature or player.",
		"mciNumber": "122",
		"imageName": "lightning bolt",
		"colorIdentity": [
			"R"
		]
	},
	mutagenicgrowth: {
		"layout": "normal",
		"name": "Mutagenic Growth",
		"manaCost": "{G/P}",
		"cmc": 1,
		"colors": [
			"Green"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "({G/P} can be paid with either {G} or 2 life.)\nTarget creature gets +2/+2 until end of turn.",
		"mciNumber": "149",
		"imageName": "mutagenic growth",
		"colorIdentity": [
			"G"
		]
	},
	temurbattlerage: {
		"layout": "normal",
		"name": "Temur Battle Rage",
		"manaCost": "{1}{R}",
		"cmc": 2,
		"colors": [
			"Red"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Target creature gains double strike until end of turn. (It deals both first-strike and regular combat damage.)\nFerocious — That creature also gains trample until end of turn if you control a creature with power 4 or greater.",
		"mciNumber": "116",
		"imageName": "temur battle rage",
		"colorIdentity": [
			"R"
		]
	},
	thoughtseize: {
		"layout": "normal",
		"name": "Thoughtseize",
		"manaCost": "{B}",
		"cmc": 1,
		"colors": [
			"Black"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Target player reveals his or her hand. You choose a nonland card from it. That player discards that card. You lose 2 life.",
		"mciNumber": "107",
		"imageName": "thoughtseize",
		"colorIdentity": [
			"B"
		]
	},
	mishrasbauble: {
		"layout": "normal",
		"name": "Mishra's Bauble",
		"manaCost": "{0}",
		"cmc": 0,
		"type": "Artifact",
		"types": [
			"Artifact"
		],
		"text": "{T}, Sacrifice Mishra's Bauble: Look at the top card of target player's library. Draw a card at the beginning of the next turn's upkeep.",
		"imageName": "mishra's bauble"
	},
	breedingpool: {
		"layout": "normal",
		"name": "Breeding Pool",
		"type": "Land — Forest Island",
		"types": [
			"Land"
		],
		"subtypes": [
			"Forest",
			"Island"
		],
		"text": "({T}: Add {G} or {U} to your mana pool.)\nAs Breeding Pool enters the battlefield, you may pay 2 life. If you don't, Breeding Pool enters the battlefield tapped.",
		"mciNumber": "15",
		"imageName": "breeding pool",
		"colorIdentity": [
			"U",
			"G"
		]
	},
	cinderglade: {
		"layout": "normal",
		"name": "Cinder Glade",
		"type": "Land — Mountain Forest",
		"types": [
			"Land"
		],
		"subtypes": [
			"Mountain",
			"Forest"
		],
		"text": "({T}: Add {R} or {G} to your mana pool.)\nCinder Glade enters the battlefield tapped unless you control two or more basic lands.",
		"mciNumber": "4",
		"imageName": "cinder glade",
		"colorIdentity": [
			"R",
			"G"
		]
	},
	forest: {
		"layout": "normal",
		"name": "Forest",
		"type": "Basic Land — Forest",
		"supertypes": [
			"Basic"
		],
		"types": [
			"Land"
		],
		"subtypes": [
			"Forest"
		],
		"imageName": "forest",
		"colorIdentity": [
			"G"
		]
	},
	hallowedfountain: {
		"layout": "normal",
		"name": "Hallowed Fountain",
		"type": "Land — Plains Island",
		"types": [
			"Land"
		],
		"subtypes": [
			"Plains",
			"Island"
		],
		"text": "({T}: Add {W} or {U} to your mana pool.)\nAs Hallowed Fountain enters the battlefield, you may pay 2 life. If you don't, Hallowed Fountain enters the battlefield tapped.",
		"mciNumber": "6",
		"imageName": "hallowed fountain",
		"colorIdentity": [
			"W",
			"U"
		]
	},
	island: {
		"layout": "normal",
		"name": "Island",
		"type": "Basic Land — Island",
		"supertypes": [
			"Basic"
		],
		"types": [
			"Land"
		],
		"subtypes": [
			"Island"
		],
		"imageName": "island",
		"colorIdentity": [
			"U"
		]
	},
	mistyrainforest: {
		"layout": "normal",
		"name": "Misty Rainforest",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "{T}, Pay 1 life, Sacrifice Misty Rainforest: Search your library for a Forest or Island card and put it onto the battlefield. Then shuffle your library.",
		"mciNumber": "25",
		"imageName": "misty rainforest"
	},
	mountain: {
		"layout": "normal",
		"name": "Mountain",
		"type": "Basic Land — Mountain",
		"supertypes": [
			"Basic"
		],
		"types": [
			"Land"
		],
		"subtypes": [
			"Mountain"
		],
		"imageName": "mountain",
		"colorIdentity": [
			"R"
		]
	},
	plains: {
		"layout": "normal",
		"name": "Plains",
		"type": "Basic Land — Plains",
		"supertypes": [
			"Basic"
		],
		"types": [
			"Land"
		],
		"subtypes": [
			"Plains"
		],
		"imageName": "plains",
		"colorIdentity": [
			"W"
		]
	},
	steamvents: {
		"layout": "normal",
		"name": "Steam Vents",
		"type": "Land — Island Mountain",
		"types": [
			"Land"
		],
		"subtypes": [
			"Island",
			"Mountain"
		],
		"text": "({T}: Add {U} or {R} to your mana pool.)\nAs Steam Vents enters the battlefield, you may pay 2 life. If you don't, Steam Vents enters the battlefield tapped.",
		"mciNumber": "12",
		"imageName": "steam vents",
		"colorIdentity": [
			"U",
			"R"
		]
	},
	templegarden: {
		"layout": "normal",
		"name": "Temple Garden",
		"type": "Land — Forest Plains",
		"types": [
			"Land"
		],
		"subtypes": [
			"Forest",
			"Plains"
		],
		"text": "({T}: Add {G} or {W} to your mana pool.)\nAs Temple Garden enters the battlefield, you may pay 2 life. If you don't, Temple Garden enters the battlefield tapped.",
		"mciNumber": "10",
		"imageName": "temple garden",
		"colorIdentity": [
			"W",
			"G"
		]
	},
	valakutthemoltenpinnacle: {
		"layout": "normal",
		"name": "Valakut, the Molten Pinnacle",
		"type": "Land",
		"types": [
			"Land"
		],
		"text": "Valakut, the Molten Pinnacle enters the battlefield tapped.\nWhenever a Mountain enters the battlefield under your control, if you control at least five other Mountains, you may have Valakut, the Molten Pinnacle deal 3 damage to target creature or player.\n{T}: Add {R} to your mana pool.",
		"mciNumber": "228",
		"imageName": "valakut, the molten pinnacle",
		"colorIdentity": [
			"R"
		]
	},
	sakuratribeelder: {
		"layout": "normal",
		"name": "Sakura-Tribe Elder",
		"manaCost": "{1}{G}",
		"cmc": 2,
		"colors": [
			"Green"
		],
		"type": "Creature — Snake Shaman",
		"types": [
			"Creature"
		],
		"subtypes": [
			"Snake",
			"Shaman"
		],
		"text": "Sacrifice Sakura-Tribe Elder: Search your library for a basic land card, put that card onto the battlefield tapped, then shuffle your library.",
		"mciNumber": "200",
		"power": "1",
		"toughness": "1",
		"imageName": "sakura-tribe elder",
		"colorIdentity": [
			"G"
		]
	},
	angerofthegods: {
		"layout": "normal",
		"name": "Anger of the Gods",
		"manaCost": "{1}{R}{R}",
		"cmc": 3,
		"colors": [
			"Red"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Anger of the Gods deals 3 damage to each creature. If a creature dealt damage this way would die this turn, exile it instead.",
		"mciNumber": "112",
		"imageName": "anger of the gods",
		"colorIdentity": [
			"R"
		]
	},
	bringtolight: {
		"layout": "normal",
		"name": "Bring to Light",
		"manaCost": "{3}{G}{U}",
		"cmc": 5,
		"colors": [
			"Blue",
			"Green"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Converge — Search your library for a creature, instant, or sorcery card with converted mana cost less than or equal to the number of colors of mana spent to cast Bring to Light, exile that card, then shuffle your library. You may cast that card without paying its mana cost.",
		"mciNumber": "209",
		"imageName": "bring to light",
		"colorIdentity": [
			"U",
			"G"
		]
	},
	crypticcommand: {
		"layout": "normal",
		"name": "Cryptic Command",
		"manaCost": "{1}{U}{U}{U}",
		"cmc": 4,
		"colors": [
			"Blue"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Choose two —\n• Counter target spell.\n• Return target permanent to its owner's hand.\n• Tap all creatures your opponents control.\n• Draw a card.",
		"mciNumber": "43",
		"imageName": "cryptic command",
		"colorIdentity": [
			"U"
		]
	},
	electrolyze: {
		"layout": "normal",
		"name": "Electrolyze",
		"manaCost": "{1}{U}{R}",
		"cmc": 3,
		"colors": [
			"Blue",
			"Red"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Electrolyze deals 2 damage divided as you choose among one or two target creatures and/or players.\nDraw a card.",
		"mciNumber": "174",
		"imageName": "electrolyze",
		"colorIdentity": [
			"U",
			"R"
		]
	},
	farseek: {
		"layout": "normal",
		"name": "Farseek",
		"manaCost": "{1}{G}",
		"cmc": 2,
		"colors": [
			"Green"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Search your library for a Plains, Island, Swamp, or Mountain card and put it onto the battlefield tapped. Then shuffle your library.",
		"mciNumber": "170",
		"imageName": "farseek",
		"colorIdentity": [
			"G"
		]
	},
	huntingwilds: {
		"layout": "normal",
		"name": "Hunting Wilds",
		"manaCost": "{3}{G}",
		"cmc": 4,
		"colors": [
			"Green"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Kicker {3}{G} (You may pay an additional {3}{G} as you cast this spell.)\nSearch your library for up to two Forest cards and put them onto the battlefield tapped. Then shuffle your library.\nIf Hunting Wilds was kicked, untap all Forests put onto the battlefield this way. They become 3/3 green creatures with haste that are still lands.",
		"mciNumber": "130",
		"imageName": "hunting wilds",
		"colorIdentity": [
			"G"
		]
	},
	izzetcharm: {
		"layout": "normal",
		"name": "Izzet Charm",
		"manaCost": "{U}{R}",
		"cmc": 2,
		"colors": [
			"Blue",
			"Red"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Choose one —\n• Counter target noncreature spell unless its controller pays {2}.\n• Izzet Charm deals 2 damage to target creature.\n• Draw two cards, then discard two cards.",
		"mciNumber": "172",
		"imageName": "izzet charm",
		"colorIdentity": [
			"U",
			"R"
		]
	},
	remand: {
		"layout": "normal",
		"name": "Remand",
		"manaCost": "{1}{U}",
		"cmc": 2,
		"colors": [
			"Blue"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Counter target spell. If that spell is countered this way, put it into its owner's hand instead of into that player's graveyard.\nDraw a card.",
		"mciNumber": "55",
		"imageName": "remand",
		"colorIdentity": [
			"U"
		]
	},
	scapeshift: {
		"layout": "normal",
		"name": "Scapeshift",
		"manaCost": "{2}{G}{G}",
		"cmc": 4,
		"colors": [
			"Green"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Sacrifice any number of lands. Search your library for up to that many land cards, put them onto the battlefield tapped, then shuffle your library.",
		"imageName": "scapeshift",
		"colorIdentity": [
			"G"
		]
	},
	searchfortomorrow: {
		"layout": "normal",
		"name": "Search for Tomorrow",
		"manaCost": "{2}{G}",
		"cmc": 3,
		"colors": [
			"Green"
		],
		"type": "Sorcery",
		"types": [
			"Sorcery"
		],
		"text": "Search your library for a basic land card and put it onto the battlefield. Then shuffle your library.\nSuspend 2—{G} (Rather than cast this card from your hand, you may pay {G} and exile it with two time counters on it. At the beginning of your upkeep, remove a time counter. When the last is removed, cast it without paying its mana cost.)",
		"imageName": "search for tomorrow",
		"colorIdentity": [
			"G"
		]
	},
	worldlycounsel: {
		"layout": "normal",
		"name": "Worldly Counsel",
		"manaCost": "{1}{U}",
		"cmc": 2,
		"colors": [
			"Blue"
		],
		"type": "Instant",
		"types": [
			"Instant"
		],
		"text": "Domain — Look at the top X cards of your library, where X is the number of basic land types among lands you control. Put one of those cards into your hand and the rest on the bottom of your library in any order.",
		"imageName": "worldly counsel",
		"colorIdentity": [
			"U"
		]
	},
	engineeredexplosives: {
		"layout": "normal",
		"name": "Engineered Explosives",
		"manaCost": "{X}",
		"cmc": 0,
		"type": "Artifact",
		"types": [
			"Artifact"
		],
		"text": "Sunburst (This enters the battlefield with a charge counter on it for each color of mana spent to cast it.)\n{2}, Sacrifice Engineered Explosives: Destroy each nonland permanent with converted mana cost equal to the number of charge counters on Engineered Explosives.",
		"imageName": "engineered explosives"
	}
};