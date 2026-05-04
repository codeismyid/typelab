import { describe, it } from 'bun:test';
import type {
  ObjectArrayLike,
  ObjectEmpty,
  ObjectGeneric
} from 'lib/aliases/object';
import { expectType } from 'types-testing';

describe('lib > aliases > object', () => {
  describe('ObjectGeneric', () => {
    describe('with type argument', () => {
      it('should be the same as `Record<PropertyKey, T>` type', () => {
        expectType<ObjectGeneric<number>>().toBe<Record<PropertyKey, number>>();
        expectType<ObjectGeneric<number>>().toBe<{
          [x: string]: number;
          [x: number]: number;
          [x: symbol]: number;
        }>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `Record<PropertyKey, any>` type', () => {
        expectType<ObjectGeneric>().toBe<Record<PropertyKey, any>>();
        expectType<ObjectGeneric>().toBe<{
          [x: string]: any;
          [x: number]: any;
          [x: symbol]: any;
        }>();
      });
    });
  });

  describe('ObjectEmpty', () => {
    it('should be the same as `Record<PropertyKey, never>` type', () => {
      expectType<ObjectEmpty>().toBe<Record<PropertyKey, never>>();
      expectType<ObjectEmpty>().toBe<{
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
      }>();
    });
  });

  describe('ObjectArrayLike', () => {
    describe('with type argument', () => {
      it('should be the same as `Record<number, T>` type', () => {
        expectType<ObjectArrayLike<string>>().toBe<Record<number, string>>();
        expectType<ObjectArrayLike<string>>().toBe<{
          [x: number]: string;
        }>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `Record<number, any>` type', () => {
        expectType<ObjectArrayLike>().toBe<Record<number, any>>();
        expectType<ObjectArrayLike>().toBe<{
          [x: number]: any;
        }>();
      });
    });
  });
});
