import { describe, it } from 'bun:test';
import type { Falsy } from 'lib/aliases';
import type {
  IsBoolean,
  IsFalse,
  IsFalsy,
  IsTrue
} from 'lib/assertions/is-boolean';
import { expectType } from 'types-testing';

describe('lib > assertions > boolean', () => {
  describe('IsBoolean', () => {
    it('should return `true` type, if type argument is `boolean` type', () => {
      expectType<IsBoolean<boolean>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `boolean` type', () => {
      expectType<IsBoolean<string>>().toBe<false>();
    });
  });

  describe('IsFalse', () => {
    it('should return `true` type, if type argument is `false` type', () => {
      expectType<IsFalse<false>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `false` type', () => {
      expectType<IsFalse<boolean>>().toBe<false>();
    });
  });

  describe('IsFalsy', () => {
    it('should return `true` type, if type argument is `Falsy` type', () => {
      expectType<IsFalsy<Falsy>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `Falsy` type', () => {
      expectType<IsFalsy<0 | 1>>().toBe<false>();
    });
  });

  describe('IsTrue', () => {
    it('should return `true` type, if type argument is `true` type', () => {
      expectType<IsTrue<true>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `true` type', () => {
      expectType<IsTrue<boolean>>().toBe<false>();
    });
  });
});
