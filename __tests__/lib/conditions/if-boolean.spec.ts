import { describe, it } from 'bun:test';
import type {
  IfBoolean,
  IfFalse,
  IfFalsy,
  IfTrue,
  IfTruthy
} from 'lib/conditions/if-boolean';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-boolean', () => {
  describe('IfBoolean', () => {
    it('should return `Then` type, if type argument is `boolean` type', () => {
      expectType<IfBoolean<boolean, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `boolean` type', () => {
      expectType<IfBoolean<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of boolean and non boolean', () => {
      expectType<IfBoolean<boolean | string, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfFalse', () => {
    it('should return `Then` type, if type argument is `false` type', () => {
      expectType<IfFalse<false, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `false` type', () => {
      expectType<IfFalse<true, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of false and non false', () => {
      expectType<IfFalse<boolean, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfFalsy', () => {
    it('should return `Then` type, if type argument is `Falsy` type', () => {
      expectType<IfFalsy<0, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `Falsy` type', () => {
      expectType<IfFalsy<1, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of falsy and non falsy', () => {
      expectType<IfFalsy<0 | 1, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfTrue', () => {
    it('should return `Then` type, if type argument is `true` type', () => {
      expectType<IfTrue<true, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `true` type', () => {
      expectType<IfTrue<false, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of true and non true', () => {
      expectType<IfTrue<boolean, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfTruthy', () => {
    it('should return `Then` type, if type argument is `Truthy` type', () => {
      expectType<IfTruthy<1, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `Truthy` type', () => {
      expectType<IfTruthy<0, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of truthy and non truthy', () => {
      expectType<IfTruthy<0 | 1, Then, Else>>().toBe<Then | Else>();
    });
  });
});
