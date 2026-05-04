import { describe, it } from 'bun:test';
import type { IfVoid } from 'lib/conditions/if-void';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-void', () => {
  describe('IfVoid', () => {
    it('should return `Then` type, if type argument is `void` type', () => {
      expectType<IfVoid<void, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `void` type', () => {
      expectType<IfVoid<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of void and non void', () => {
      expectType<IfVoid<string | void, Then, Else>>().toBe<Then | Else>();
    });
  });
});
