import { describe, it } from 'bun:test';
import type {
  ExcludeNull,
  ExcludeNullish,
  ExcludeUndefined
} from 'lib/utils/exclude';
import { expectType } from 'types-testing';

describe('lib > utils > exclude', () => {
  describe('ExcludeNullish', () => {
    it('should exclude nullish from `T`', () => {
      expectType<ExcludeNullish<string | null | undefined>>().toBe<string>();
    });
  });

  describe('ExcludeNull', () => {
    it('should exclude `null` from `T`', () => {
      expectType<ExcludeNull<string | null>>().toBe<string>();
    });
  });

  describe('ExcludeUndefined', () => {
    it('should exclude `undefined` from `T`', () => {
      expectType<ExcludeUndefined<string | undefined>>().toBe<string>();
    });
  });
});
