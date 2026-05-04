import { describe, it } from 'bun:test';
import type { IfAsync, IfPromise } from 'lib/conditions/if-promise';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-promise', () => {
  describe('IfPromise', () => {
    it('should return `Then` type, if type argument is `Promise` type', () => {
      expectType<IfPromise<Promise<string>, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `Promise` type', () => {
      expectType<IfPromise<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of promise and non promise', () => {
      expectType<IfPromise<Promise<string> | string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfAsync', () => {
    it('should return `Then` type, if type argument is `Promise` type', () => {
      expectType<IfAsync<Promise<string>, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `Promise` type', () => {
      expectType<IfAsync<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of promise and non promise', () => {
      expectType<IfAsync<Promise<string> | string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });
});
