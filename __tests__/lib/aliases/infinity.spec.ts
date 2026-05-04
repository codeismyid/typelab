import { describe, it } from 'bun:test';
import type {
  // biome-ignore lint/suspicious/noShadowRestrictedNames: intended
  Infinity,
  NegativeInfinity,
  PositiveInfinity
} from 'lib/aliases/infinity';
import { expectType } from 'types-testing';

describe('lib > aliases > infinity', () => {
  describe('Infinity', () => {
    it('should be the same as `PositiveInfinity | NegativeInfinity` type', () => {
      expectType<Infinity>().toBe<PositiveInfinity | NegativeInfinity>();
    });
  });

  describe('PositiveInfinity', () => {
    it('should be the same as `Infinity` type', () => {
      expectType<PositiveInfinity>().toBe<PositiveInfinity>();
    });
  });

  describe('NegativeInfinity', () => {
    it('should be the same as `-Infinity` type', () => {
      expectType<NegativeInfinity>().toBe<NegativeInfinity>();
    });
  });
});
