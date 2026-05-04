import { describe, it } from 'bun:test';
import type { IfAny } from 'lib/conditions/if-any';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-any', () => {
  describe('IfAny', () => {
    it('should return `Then` type, if type argument is `any` type', () => {
      expectType<IfAny<any, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `any` type', () => {
      expectType<IfAny<string, Then, Else>>().toBe<Else>();
    });
  });
});
