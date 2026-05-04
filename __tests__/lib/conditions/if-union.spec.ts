import { describe, it } from 'bun:test';
import type { IfUnion } from 'lib/conditions/if-union';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-union', () => {
  describe('IfUnion', () => {
    it('should return `Then` type, if type argument is union type', () => {
      expectType<IfUnion<string | number, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not union type', () => {
      expectType<IfUnion<string, Then, Else>>().toBe<Else>();
    });
  });
});
