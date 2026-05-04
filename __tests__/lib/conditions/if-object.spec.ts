import { describe, it } from 'bun:test';
import type {
  IfObject,
  IfObjectArrayLike,
  IfObjectEmpty,
  IfObjectLiteral
} from 'lib/conditions/if-object';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-object', () => {
  describe('IfObject', () => {
    it('should return `Then` type, if type argument is `object` type', () => {
      expectType<IfObject<object, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `object` type', () => {
      expectType<IfObject<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of object and non object', () => {
      expectType<IfObject<object | string, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfObjectLiteral', () => {
    it('should return `Then` type, if type argument is object literal type', () => {
      expectType<
        IfObjectLiteral<{ a: number; b: string }, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not object literal type', () => {
      expectType<IfObjectLiteral<string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of object literal and non object literal', () => {
      expectType<IfObjectLiteral<{ a: 1 } | object, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfObjectEmpty', () => {
    it('should return `Then` type, if type argument is object empty type', () => {
      expectType<
        IfObjectEmpty<{ [x: string]: never }, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not object empty type', () => {
      expectType<IfObjectEmpty<{ a: 1 }, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of object empty and non object empty', () => {
      expectType<
        IfObjectEmpty<{ [x: string]: never } | { a: 1 }, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfObjectArrayLike', () => {
    it('should return `Then` type, if type argument is array-like object type', () => {
      expectType<
        IfObjectArrayLike<{ 0: number; 1: number }, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not array-like object type', () => {
      expectType<
        IfObjectArrayLike<{ 0: number; a: number }, Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of array-like object and non array-like object', () => {
      expectType<
        IfObjectArrayLike<
          { 0: number; 1: number } | { 0: number; id: number },
          Then,
          Else
        >
      >().toBe<Then | Else>();
    });
  });
});
