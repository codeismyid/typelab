import { describe, it } from 'bun:test';
import type { IfOptionalProperty } from 'lib/conditions/if-optional';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-optional', () => {
  describe('IfOptionalProperty', () => {
    it('should return `Then` type, if property from object is optional', () => {
      expectType<
        IfOptionalProperty<{ a?: string }, 'a', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if property from object is not optional', () => {
      expectType<
        IfOptionalProperty<{ a: string }, 'a', Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if contains optional and non optional', () => {
      expectType<
        IfOptionalProperty<{ a?: string } | { a: string }, 'a', Then, Else>
      >().toBe<Then | Else>();
    });

    it('should return `never` type, if property key does not exist', () => {
      expectType<
        IfOptionalProperty<{ a?: string }, 'b', Then, Else>
      >().toBe<never>();
    });
  });
});
