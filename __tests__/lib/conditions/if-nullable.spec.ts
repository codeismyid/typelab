import { describe, it } from 'bun:test';
import type { IfNullable } from 'lib/conditions/if-nullable';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-nullable', () => {
  describe('IfNullable', () => {
    it('should return `Then` type, if type argument contains `null` type', () => {
      expectType<IfNullable<string | null, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument not contains `null` type', () => {
      expectType<IfNullable<string, Then, Else>>().toBe<Else>();
    });
  });
});
