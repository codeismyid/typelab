import { describe, it } from 'bun:test';
import type { NonNullish } from 'lib/aliases/non-nullish';
import { expectType } from 'types-testing';

describe('lib > aliases > non-nullish', () => {
  describe('NonNullish', () => {
    it('should be the same as `{}` type', () => {
      expectType<NonNullish>().toBe<{}>();
    });
  });
});
