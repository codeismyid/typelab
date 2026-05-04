import { describe, it } from 'bun:test';
import type { IfNull } from 'lib/conditions/if-null';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-null', () => {
  describe('IfNull', () => {
    it('should return `Then` type, if type argument is `null` type', () => {
      expectType<IfNull<null, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `null` type', () => {
      expectType<IfNull<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of null and non null', () => {
      expectType<IfNull<string | null, Then, Else>>().toBe<Then | Else>();
    });
  });
});
