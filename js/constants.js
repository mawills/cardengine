var
	// game constants
	STARTING_HAND_SIZE = 7,
	STARTING_LIFE_TOTAL = 20,

	// player ids
	P1 = 0,
	P2 = 1,
	NO_PLAYER = 2,

	// phases
	PREGAME_PHASE   = 0,
	BEGINNING_PHASE = "Beginning Phase",
	MAIN_PHASE_1    = "pre-combat Main Phase",
	COMBAT_PHASE    = "Combat Phase",
	MAIN_PHASE_2    = "Main Phase",
	ENDING_PHASE    = "Ending Phase",

	// steps
	UNTAP_STEP  = 0,
	UPKEEP_STEP = 1,
	DRAW_STEP   = 2,
	BEGINNING_OF_COMBAT_STEP = 3,
	DECLARE_ATTACKERS_STEP   = 4,
	DECLARE_BLOCKERS_STEP    = 5,
	COMBAT_DAMAGE_STEP       = 6,
	END_OF_COMBAT_STEP       = 7,
	END_STEP     = 8,
	CLEANUP_STEP = 9,

	// card attribute names
	LAYOUT_ATTRIBUTE         = "l",
	MANA_COST_ATTRIBUTE      = "m",
	COLORS_ATTRIBUTE         = "C",
	SUPERTYPES_ATTRIBUTE     = "S",
	TYPES_ATTRIBUTE          = "t",
	SUBTYPES_ATTRIBUTE       = "s",
	ORACLE_TEXT_ATTRIBUTE    = "x",
	POWER_ATTRIBUTE          = "P",
	TOUGHNESS_ATTRIBUTE      = "T",
	COLOR_IDENTITY_ATTRIBUTE = "i",

	// supertypes
	SUPERTYPES = {
		B:"Basic",
		L:"Legendary",
		S:"Snow",
		W:"World"
	},

	// types
	TYPES = {
		A:"Artifact",
		C:"Creature",
		E:"Enchantment",
		I:"Instant",
		L:"Land",
		P:"Planeswalker",
		S:"Sorcery",
		T:"Tribal"
	},

	// layouts
	NORMAL_LAYOUT       = "N",
	SPLIT_LAYOUT        = "s",
	FLIP_LAYOUT         = "f",
	DOUBLE_FACED_LAYOUT = "d",
	TOKEN_LAYOUT        = "t",
varend;