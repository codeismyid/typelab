import { describe, it } from 'bun:test';
import type { Primitive } from 'lib/aliases/primitive';
import { expectType } from 'types-testing';

describe('lib > aliases > primitive', () => {
  describe('Primitive', () => {
    it('should be the same as `boolean | string | number | bigint | symbol | null | undefined` type', () => {
      expectType<Primitive>().toBe<
        boolean | string | number | bigint | symbol | null | undefined
      >();
    });
  });
});
