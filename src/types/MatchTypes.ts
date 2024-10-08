enum MatchType {
  CUSTOM = 0,
  ONE_V_ONE_SUPREMACY = 1,
  TWO_V_TWO_SUPREMACY = 2,
  THREE_V_THREE_SUPREMACY = 3,
  FOUR_V_FOUR_SUPREMACY = 4,
  ONE_V_ONE_DEATHMATCH = 5,
  TWO_V_TWO_DEATHMATCH = 6,
  THREE_V_THREE_DEATHMATCH = 7,
  FOUR_V_FOUR_DEATHMATCH = 8,
  ONE_V_ONE_CONQUEST = 9,
  TWO_V_TWO_CONQUEST = 10,
  THREE_V_THREE_CONQUEST = 11,
  FOUR_V_FOUR_CONQUEST = 12,
  ONE_V_ONE_LIGHTNING = 13,
  TWO_V_TWO_LIGHTNING = 14,
  THREE_V_THREE_LIGHTNING = 15,
  FOUR_V_FOUR_LIGHTNING = 16,
  ONE_V_ONE_TREATY_20MIN = 17,
  TWO_V_TWO_TREATY_20MIN = 18,
  THREE_V_THREE_TREATY_20MIN = 19,
  FOUR_V_FOUR_TREATY_20MIN = 20,
  ONE_V_ONE_TREATY_40MIN = 21,
  TWO_V_TWO_TREATY_40MIN = 22,
  THREE_V_THREE_TREATY_40MIN = 23,
  FOUR_V_FOUR_TREATY_40MIN = 24,
  MATCHMAKING = 25,
  MATCHMAKING_QUICKMATCH = 27,
  ONE_V_ONE_SUPREMACY_QUICKMATCH = 28,
  TWO_V_TWO_SUPREMACY_QUICKMATCH = 29,
  THREE_V_THREE_SUPREMACY_QUICKMATCH = 30,
  FOUR_V_FOUR_SUPREMACY_QUICKMATCH = 31,
  ONE_V_ONE_DEATHMATCH_QUICKMATCH = 32,
  TWO_V_TWO_DEATHMATCH_QUICKMATCH = 33,
  THREE_V_THREE_DEATHMATCH_QUICKMATCH = 34,
  FOUR_V_FOUR_DEATHMATCH_QUICKMATCH = 35,
  ONE_V_ONE_LIGHTNING_QUICKMATCH = 36,
  TWO_V_TWO_LIGHTNING_QUICKMATCH = 37,
  THREE_V_THREE_LIGHTNING_QUICKMATCH = 38,
  FOUR_V_FOUR_LIGHTNING_QUICKMATCH = 39,
}

// Create a mapping from number to name
const MatchTypeNames: { [key: number]: string } = {
  [MatchType.CUSTOM]: 'CUSTOM',
  [MatchType.ONE_V_ONE_SUPREMACY]: '1V1_SUPREMACY',
  [MatchType.TWO_V_TWO_SUPREMACY]: '2V2_SUPREMACY',
  [MatchType.THREE_V_THREE_SUPREMACY]: '3V3_SUPREMACY',
  [MatchType.FOUR_V_FOUR_SUPREMACY]: '4V4_SUPREMACY',
  [MatchType.ONE_V_ONE_DEATHMATCH]: '1V1_DEATHMATCH',
  [MatchType.TWO_V_TWO_DEATHMATCH]: '2V2_DEATHMATCH',
  [MatchType.THREE_V_THREE_DEATHMATCH]: '3V3_DEATHMATCH',
  [MatchType.FOUR_V_FOUR_DEATHMATCH]: '4V4_DEATHMATCH',
  [MatchType.ONE_V_ONE_CONQUEST]: '1V1_CONQUEST',
  [MatchType.TWO_V_TWO_CONQUEST]: '2V2_CONQUEST',
  [MatchType.THREE_V_THREE_CONQUEST]: '3V3_CONQUEST',
  [MatchType.FOUR_V_FOUR_CONQUEST]: '4V4_CONQUEST',
  [MatchType.ONE_V_ONE_LIGHTNING]: '1V1_LIGHTNING',
  [MatchType.TWO_V_TWO_LIGHTNING]: '2V2_LIGHTNING',
  [MatchType.THREE_V_THREE_LIGHTNING]: '3V3_LIGHTNING',
  [MatchType.FOUR_V_FOUR_LIGHTNING]: '4V4_LIGHTNING',
  [MatchType.ONE_V_ONE_TREATY_20MIN]: '1V1_TREATY_20MIN',
  [MatchType.TWO_V_TWO_TREATY_20MIN]: '2V2_TREATY_20MIN',
  [MatchType.THREE_V_THREE_TREATY_20MIN]: '3V3_TREATY_20MIN',
  [MatchType.FOUR_V_FOUR_TREATY_20MIN]: '4V4_TREATY_20MIN',
  [MatchType.ONE_V_ONE_TREATY_40MIN]: '1V1_TREATY_40MIN',
  [MatchType.TWO_V_TWO_TREATY_40MIN]: '2V2_TREATY_40MIN',
  [MatchType.THREE_V_THREE_TREATY_40MIN]: '3V3_TREATY_40MIN',
  [MatchType.FOUR_V_FOUR_TREATY_40MIN]: '4V4_TREATY_40MIN',
  [MatchType.MATCHMAKING]: 'MATCHMAKING',
  [MatchType.MATCHMAKING_QUICKMATCH]: 'MATCHMAKING_QUICKMATCH',
  [MatchType.ONE_V_ONE_SUPREMACY_QUICKMATCH]: '1V1_SUPREMACY_QUICKMATCH',
  [MatchType.TWO_V_TWO_SUPREMACY_QUICKMATCH]: '2V2_SUPREMACY_QUICKMATCH',
  [MatchType.THREE_V_THREE_SUPREMACY_QUICKMATCH]: '3V3_SUPREMACY_QUICKMATCH',
  [MatchType.FOUR_V_FOUR_SUPREMACY_QUICKMATCH]: '4V4_SUPREMACY_QUICKMATCH',
  [MatchType.ONE_V_ONE_DEATHMATCH_QUICKMATCH]: '1V1_DEATHMATCH_QUICKMATCH',
  [MatchType.TWO_V_TWO_DEATHMATCH_QUICKMATCH]: '2V2_DEATHMATCH_QUICKMATCH',
  [MatchType.THREE_V_THREE_DEATHMATCH_QUICKMATCH]: '3V3_DEATHMATCH_QUICKMATCH',
  [MatchType.FOUR_V_FOUR_DEATHMATCH_QUICKMATCH]: '4V4_DEATHMATCH_QUICKMATCH',
  [MatchType.ONE_V_ONE_LIGHTNING_QUICKMATCH]: '1V1_LIGHTNING_QUICKMATCH',
  [MatchType.TWO_V_TWO_LIGHTNING_QUICKMATCH]: '2V2_LIGHTNING_QUICKMATCH',
  [MatchType.THREE_V_THREE_LIGHTNING_QUICKMATCH]: '3V3_LIGHTNING_QUICKMATCH',
  [MatchType.FOUR_V_FOUR_LIGHTNING_QUICKMATCH]: '4V4_LIGHTNING_QUICKMATCH',
};

// Function to get name by id
export function getGameModeByMatchTypeId(id: number): string | undefined {
  return MatchTypeNames[id];
}
