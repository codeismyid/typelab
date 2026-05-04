import { describe, it } from 'bun:test';
import type { Undefinable } from 'lib/aliases/undefinable';
import { expectType } from 'types-testing';

describe('lib > aliases > undefinable', () => {
  describe('Undefinable', () => {
    describe('with type argument', () => {
      it('should be the same as `T | undefined` type', () => {
        expectType<Undefinable<string>>().toBe<string | undefined>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `undefined` type', () => {
        expectType<Undefinable>().toBe<undefined>();
      });
    });
  });
});
