import { describe, it } from 'bun:test';
import type { Nullable } from 'lib/aliases/nullable';
import { expectType } from 'types-testing';

describe('lib > aliases > nullable', () => {
  describe('Nullable', () => {
    describe('with type argument', () => {
      it('should be the same as `T | null` type', () => {
        expectType<Nullable<string>>().toBe<string | null>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `null` type', () => {
        expectType<Nullable>().toBe<null>();
      });
    });
  });
});
