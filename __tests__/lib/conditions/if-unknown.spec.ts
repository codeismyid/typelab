import { describe, it } from 'bun:test';
import type { IfUnknown } from 'lib/conditions/if-unknown';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-unknown', () => {
  describe('IfUnknown', () => {
    it('should return `Then` type, if type argument is `unknown` type', () => {
      expectType<IfUnknown<unknown, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `unknown` type', () => {
      expectType<IfUnknown<string, Then, Else>>().toBe<Else>();
    });
  });
});
