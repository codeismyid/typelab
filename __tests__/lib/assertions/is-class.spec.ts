import { describe, it } from 'bun:test';
import type { Class } from 'lib/aliases';
import type { IsClass } from 'lib/assertions/is-class';
import { expectType } from 'types-testing';

describe('lib > assertions > is-class', () => {
  describe('IsClass', () => {
    it('should return `true` type, if type argument is `Class` type', () => {
      class DummyClass {}
      expectType<IsClass<typeof DummyClass>>().toBe<true>();
      expectType<IsClass<Class>>().toBe<true>();
      expectType<IsClass<{ new (): void }>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `Class` type', () => {
      expectType<IsClass<string>>().toBe<false>();
    });
  });
});
