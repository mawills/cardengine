var
	TYPE_DASH = decodeURIComponent(escape("\xE2\x80\x94")),

	// game constants
	STARTING_HAND_SIZE = 7,
	STARTING_LIFE_TOTAL = 20,

	// player ids
	P1 = 0,
	P2 = 1,

	// priorities
	NO_PRIORITY = 0,
	P1_PRIORITY = 1,
	P2_PRIORITY = 2,

	// phases
	PREGAME_PHASE   = 0,
	BEGINNING_PHASE = 1,
	MAIN_PHASE_1    = 2,
	COMBAT_PHASE    = 3,
	MAIN_PHASE_2    = 4,
	ENDING_PHASE    = 5,

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