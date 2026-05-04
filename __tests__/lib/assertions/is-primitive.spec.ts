import { describe, it } from 'bun:test';
import type { IsPrimitive } from 'lib/assertions/is-primitive';
import { expectType } from 'types-testing';

describe('lib > assertions > is-primitive', () => {
  describe('IsPrimitive', () => {
    it('should return `true` type, if type argument is primitive type', () => {
      expectType<IsPrimitive<string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not primitive type', () => {
      expectType<IsPrimitive<[]>>().toBe<false>();
    });
  });
});
