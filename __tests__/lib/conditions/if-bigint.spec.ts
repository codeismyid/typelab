import { describe, it } from 'bun:test';
import type { IfBigInt, IfBigIntLiteral } from 'lib/conditions/if-bigint';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-bigint', () => {
  describe('IfBigInt', () => {
    it('should return `Then` type, if type argument is `bigint` type', () => {
      expectType<IfBigInt<bigint, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `bigint` type', () => {
      expectType<IfBigInt<number, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of bigint and non bigint', () => {
      expectType<IfBigInt<bigint | number, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfBigIntLiteral', () => {
    it('should return `Then` type, if type argument is big int literal type', () => {
      expectType<IfBigIntLiteral<11n, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not big int literal type', () => {
      expectType<IfBigIntLiteral<bigint, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of bigint literal and non bigint literal', () => {
      expectType<IfBigIntLiteral<11n | 11, Then, Else>>().toBe<Then | Else>();
    });
  });
});
