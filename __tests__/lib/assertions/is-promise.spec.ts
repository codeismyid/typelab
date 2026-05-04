import { describe, it } from 'bun:test';
import type { IsAsync, IsPromise } from 'lib/assertions/is-promise';
import { expectType } from 'types-testing';

describe('lib > assertions > is-promise', () => {
  describe('IsPromise', () => {
    it('should return `true` type, if type argument is `Promise` type', () => {
      expectType<IsPromise<Promise<string>>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `Promise` type', () => {
      expectType<IsPromise<string>>().toBe<false>();
    });
  });

  describe('IsAsync', () => {
    it('should return `true` type, if type argument is `Promise` type', () => {
      expectType<IsAsync<Promise<string>>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `Promise` type', () => {
      expectType<IsAsync<string>>().toBe<false>();
    });
  });
});
