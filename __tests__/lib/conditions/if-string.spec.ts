import { describe, it } from 'bun:test';
import type {
  IfString,
  IfStringLiteral,
  IfStringNumberLike
} from 'lib/conditions/if-string';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-string', () => {
  describe('IfString', () => {
    it('should return `Then` type, if type argument is `string` type', () => {
      expectType<IfString<string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `string` type', () => {
      expectType<IfString<number, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of string and non string', () => {
      expectType<IfString<string | number, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfStringLiteral', () => {
    it('should return `Then` type, if type argument is string literal type', () => {
      expectType<IfStringLiteral<'', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not string literal type', () => {
      expectType<IfStringLiteral<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of string literal and non string literal', () => {
      expectType<IfStringLiteral<'' | number, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfStringNumberLike', () => {
    it('should return `Then` type, if type argument is number-like string literal type', () => {
      expectType<IfStringNumberLike<'11', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not number-like string literal type', () => {
      expectType<IfStringNumberLike<'hello', Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of number-like string literal and non number-like string literal', () => {
      expectType<IfStringNumberLike<'11' | 'hello', Then, Else>>().toBe<
        Then | Else
      >();
    });
  });
});
