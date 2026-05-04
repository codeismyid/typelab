import { describe, it } from 'bun:test';
import type { Nullish } from 'lib/aliases/nullish';
import { expectType } from 'types-testing';

describe('lib > aliases > nullish', () => {
  describe('Nullish', () => {
    describe('with type argument', () => {
      it('should be the same as `T | null | undefined` type', () => {
        expectType<Nullish<string>>().toBe<string | null | undefined>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `null | undefined` type', () => {
        expectType<Nullish>().toBe<null | undefined>();
      });
    });
  });
});
