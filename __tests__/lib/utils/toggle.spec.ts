import { describe, it } from 'bun:test';
import type { Toggle } from 'lib/utils/toggle';
import { expectType } from 'types-testing';

describe('lib > utils > toggle', () => {
  describe('Toggle', () => {
    it('should toggle boolean of `T`', () => {
      expectType<Toggle<true>>().toBe<false>();
      expectType<Toggle<false>>().toBe<true>();
    });
  });
});
