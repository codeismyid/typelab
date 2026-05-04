import { describe, it } from 'bun:test';
import type { Any, Anything } from 'lib/aliases/any';
import { expectType } from 'types-testing';

describe('lib > aliases > any', () => {
  describe('Any', () => {
    it('should be the same as `any` type', () => {
      expectType<Any>().toBe<any>();
    });
  });

  describe('Anything', () => {
    it('should be the same as `any` type', () => {
      expectType<Anything>().toBe<any>();
    });
  });
});
