export const RESULTS = Object.freeze({
  UNAVAILABLE: 'unavailable',
  BLOCKED: 'blocked',
  DENIED: 'denied',
  GRANTED: 'granted',
  LIMITED: 'limited',
  WHENINUSE: 'whenInUse',
  AlWAYS: 'always',
} as const);

export type ResultMap = typeof RESULTS;
