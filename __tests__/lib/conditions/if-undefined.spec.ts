import { describe, it } from 'bun:test';
import type { IfUndefined } from 'lib/conditions/if-undefined';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-undefined', () => {
  describe('IfUndefined', () => {
    it('should return `Then` type, if type argument is `undefined` type', () => {
      expectType<IfUndefined<undefined, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `undefined` type', () => {
      expectType<IfUndefined<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of undefined and non undefined', () => {
      expectType<IfUndefined<string | undefined, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });
});
