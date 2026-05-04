import { describe, it } from 'bun:test';
import type { Falsy } from 'lib/aliases/falsy';
import { expectType } from 'types-testing';

describe('lib > aliases > falsy', () => {
  describe('Falsy', () => {
    it("should be the same as `false | '' | 0 | 0n | null | undefined | void` type", () => {
      expectType<Falsy>().toBe<false | '' | 0 | 0n | null | undefined | void>();
    });
  });
});
