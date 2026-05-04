import { describe, it } from 'bun:test';
import type { IfNegative } from 'lib/conditions/if-negative';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-negative', () => {
  describe('IfNegative', () => {
    it('should return `Then` type, if type argument is negative', () => {
      expectType<
        IfNegative<-11 | -11n | '-11' | '-11n', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not negative', () => {
      expectType<IfNegative<11, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of negative and non negative', () => {
      expectType<IfNegative<-11 | 11, Then, Else>>().toBe<Then | Else>();
    });
  });
});
