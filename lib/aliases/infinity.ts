/**
 * Represents positive infinity in TypeScript as a constant value.
 *
 * **Not a real type for javascript built-in `Infinity` or `Number.POSITIVE_INFINITY`**.
 */
export type PositiveInfinity = 1.79e309;

/**
 * Represents negative infinity in TypeScript as a constant value.
 *
 * **Not a real type for javascript built-in `-Infinity` or `Number.NEGATIVE_INFINITY`**.
 */
export type NegativeInfinity = -1.79e309;

/**
 * Represents positive or negative infinity in TypeScript as a constant value.
 *
 * **Not a real type for javascript built-in `Infinity` or `Number.POSITIVE_INFINITY`**.
 *
 * **Not a real type for javascript built-in `-Infinity` or `Number.NEGATIVE_INFINITY`**.
 */
export type Infinity = PositiveInfinity | NegativeInfinity;
