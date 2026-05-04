import { describe, it } from 'bun:test';
import type { IfRequiredProperty } from 'lib/conditions/if-required';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-required', () => {
  describe('IfRequiredProperty', () => {
    it('should return `Then` type, if property from object is required', () => {
      expectType<
        IfRequiredProperty<{ a: string }, 'a', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if property from object is not required', () => {
      expectType<
        IfRequiredProperty<{ a?: string }, 'a', Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if contains required and non required', () => {
      expectType<
        IfRequiredProperty<{ a: string } | { a?: string }, 'a', Then, Else>
      >().toBe<Then | Else>();
    });

    it('should return `never` type, if property key does not exist', () => {
      expectType<
        IfRequiredProperty<{ a?: string }, 'b', Then, Else>
      >().toBe<never>();
    });
  });
});
