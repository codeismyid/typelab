import { describe, it } from 'bun:test';
import type { IfUndefinable } from 'lib/conditions/if-undefinable';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-undefinable', () => {
  describe('IfUndefinable', () => {
    it('should return `Then` type, if type argument contains `undefined` type', () => {
      expectType<IfUndefinable<string | undefined, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument not contains `undefined` type', () => {
      expectType<IfUndefinable<string, Then, Else>>().toBe<Else>();
    });
  });
});
