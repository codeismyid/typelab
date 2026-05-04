import { describe, it } from 'bun:test';
import type { IfPrimitive } from 'lib/conditions/if-primitive';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-primitive', () => {
  describe('IfPrimitive', () => {
    it('should return `Then` type, if type argument is primitive type', () => {
      expectType<IfPrimitive<string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not primitive type', () => {
      expectType<IfPrimitive<object, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of primitive and non primitive', () => {
      expectType<IfPrimitive<string | object, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });
});
