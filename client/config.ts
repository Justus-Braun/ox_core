export * from '../common/config';

export const DEATH_SYSTEM = GetConvarInt('ox:deathSystem', 1) === 1;
export const CHARACTER_SELECT = GetConvarInt('ox:characterSelect', 1) === 1;
export const SPAWN_LOCATION = JSON.parse(GetConvar('ox:spawnLocation', '[-258.211, -293.077, 21.6132, 206.0]'));
export const HOSPITAL_BLIPS = GetConvarInt('ox:hospitalBlips', 1) === 1;
export const EXTERNAL_CHARACTER_SELECT = GetConvarInt('ox:externalCharacterSelect', 0) === 1;
