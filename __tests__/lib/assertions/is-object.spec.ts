import { describe, it } from 'bun:test';
import type {
  IsObject,
  IsObjectArrayLike,
  IsObjectEmpty,
  IsObjectLiteral
} from 'lib/assertions/is-object';
import { expectType } from 'types-testing';

describe('lib > assertions > is-object', () => {
  describe('IsObject', () => {
    it('should return `true` type, if type argument is `object` type', () => {
      expectType<IsObject<object>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `object` type', () => {
      expectType<IsObject<string>>().toBe<false>();
    });
  });

  describe('IsObjectLiteral', () => {
    it('should return `true` type, if type argument is object literal type', () => {
      expectType<IsObjectLiteral<{ a: number; b: string }>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not object literal type', () => {
      expectType<IsObjectLiteral<string[]>>().toBe<false>();
    });
  });

  describe('IsObjectEmpty', () => {
    it('should return `true` type, if type argument is object empty type', () => {
      expectType<IsObjectEmpty<{ [x: string]: never }>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not object empty type', () => {
      expectType<IsObjectEmpty<{ a: string }>>().toBe<false>();
    });
  });

  describe('IsObjectArrayLike', () => {
    it('should return `true` type, if type argument is array-like object type', () => {
      expectType<IsObjectArrayLike<{ 0: number; 1: number }>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not array-like object type', () => {
      expectType<IsObjectArrayLike<{ 0: number; a: number }>>().toBe<false>();
    });
  });
});
