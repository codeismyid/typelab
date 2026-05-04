import { describe, it } from 'bun:test';
import type { IfPositive } from 'lib/conditions/if-positive';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-positive', () => {
  describe('IfPositive', () => {
    it('should return `Then` type, if type argument is positive', () => {
      expectType<
        IfPositive<11 | 11n | '11' | '11n', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not positive', () => {
      expectType<IfPositive<-11, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of positive and non positive', () => {
      expectType<IfPositive<11 | -11, Then, Else>>().toBe<Then | Else>();
    });
  });
});
