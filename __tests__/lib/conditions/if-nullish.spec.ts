import { describe, it } from 'bun:test';
import type { IfNullish } from 'lib/conditions/if-nullish';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-nullish', () => {
  describe('IfNullish', () => {
    it('should return `Then` type, if type argument contains `null | undefined` type', () => {
      expectType<
        IfNullish<string | null | undefined, Then, Else>
      >().toBe<Then>();
      expectType<IfNullish<string | null, Then, Else>>().toBe<Then>();
      expectType<IfNullish<string | undefined, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument not contains `null | undefined` type', () => {
      expectType<IfNullish<string, Then, Else>>().toBe<Else>();
    });
  });
});
