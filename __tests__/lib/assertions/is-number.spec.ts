import { describe, it } from 'bun:test';
import type {
  IsNumber,
  IsNumberDecimal,
  IsNumberInteger,
  IsNumberLiteral
} from 'lib/assertions/is-number';
import { expectType } from 'types-testing';

describe('lib > assertions > is-number', () => {
  describe('IsNumber', () => {
    it('should return `true` type, if type argument is `number` type', () => {
      expectType<IsNumber<number>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `number` type', () => {
      expectType<IsNumber<string>>().toBe<false>();
    });
  });

  describe('IsNumberLiteral', () => {
    it('should return `true` type, if type argument is number literal type', () => {
      expectType<IsNumberLiteral<11>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not number literal type', () => {
      expectType<IsNumberLiteral<number>>().toBe<false>();
    });
  });

  describe('IsNumberDecimal', () => {
    it('should return `true` type, if type argument is decimal number literal type', () => {
      expectType<IsNumberDecimal<11.1>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not decimal number literal type', () => {
      expectType<IsNumberDecimal<11>>().toBe<false>();
    });
  });

  describe('IsNumberInteger', () => {
    it('should return `true` type, if type argument is integer number literal type', () => {
      expectType<IsNumberInteger<11>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not integer number literal type', () => {
      expectType<IsNumberInteger<11.1>>().toBe<false>();
    });
  });
});
