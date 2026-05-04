import { describe, it } from 'bun:test';
import type {
  IfNumber,
  IfNumberDecimal,
  IfNumberInteger,
  IfNumberLiteral
} from 'lib/conditions/if-number';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-number', () => {
  describe('IfNumber', () => {
    it('should return `Then` type, if type argument is `number` type', () => {
      expectType<IfNumber<number, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `number` type', () => {
      expectType<IfNumber<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of number and non number', () => {
      expectType<IfNumber<string | number, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfNumberLiteral', () => {
    it('should return `Then` type, if type argument is number literal type', () => {
      expectType<IfNumberLiteral<11, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not number literal type', () => {
      expectType<IfNumberLiteral<number, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of number literal and non number literal', () => {
      expectType<IfNumberLiteral<string | 11, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfNumberDecimal', () => {
    it('should return `Then` type, if type argument is decimal number literal type', () => {
      expectType<IfNumberDecimal<11.1, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not decimal number literal type', () => {
      expectType<IfNumberDecimal<11, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of decimal number literal and non decimal number literal', () => {
      expectType<IfNumberDecimal<11.1 | 11, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfNumberInteger', () => {
    it('should return `Then` type, if type argument is integer number literal type', () => {
      expectType<IfNumberInteger<11, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not integer number literal type', () => {
      expectType<IfNumberInteger<11.1, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of integer number literal and non integer number literal', () => {
      expectType<IfNumberInteger<11 | 11.1, Then, Else>>().toBe<Then | Else>();
    });
  });
});
