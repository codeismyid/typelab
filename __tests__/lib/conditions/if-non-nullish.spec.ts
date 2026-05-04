import { describe, it } from 'bun:test';
import type { IfNonNullish } from 'lib/conditions/if-non-nullish';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-non-nullish', () => {
  describe('IfNonNullish', () => {
    it('should return `Then` type, if type argument is `{}` type', () => {
      expectType<IfNonNullish<{}, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `{}` type', () => {
      expectType<IfNonNullish<null, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of `{}` and non `{}`', () => {
      expectType<IfNonNullish<{} | null, Then, Else>>().toBe<Then | Else>();
    });
  });
});
