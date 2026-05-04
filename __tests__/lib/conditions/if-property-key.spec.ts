import { describe, it } from 'bun:test';
import type { IfPropertyKey } from 'lib/conditions/if-property-key';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-property-key', () => {
  describe('IfPropertyKey', () => {
    it('should return `Then` type, if type argument is `PropertyKey` type', () => {
      expectType<IfPropertyKey<string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `PropertyKey` type', () => {
      expectType<IfPropertyKey<boolean, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of property key and non property key', () => {
      expectType<IfPropertyKey<string | boolean, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });
});
