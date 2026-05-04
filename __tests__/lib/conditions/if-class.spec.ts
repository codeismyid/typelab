import { describe, it } from 'bun:test';
import type { Class } from 'lib/aliases';
import type { IfClass } from 'lib/conditions/if-class';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-class', () => {
  describe('IfClass', () => {
    it('should return `Then` type, if type argument is `Class` type', () => {
      class DummyClass {}
      expectType<IfClass<typeof DummyClass, Then, Else>>().toBe<Then>();
      expectType<IfClass<Class, Then, Else>>().toBe<Then>();
      expectType<IfClass<{ new (): void }, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `Class` type', () => {
      expectType<IfClass<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of class and non class', () => {
      expectType<IfClass<Class | string, Then, Else>>().toBe<Then | Else>();
    });
  });
});
