import { describe, it } from 'bun:test';
import type { IfNever } from 'lib/conditions/if-never';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-never', () => {
  describe('IfNever', () => {
    it('should return `Then` type, if type argument is `never` type', () => {
      expectType<IfNever<never, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `never` type', () => {
      expectType<IfNever<string, Then, Else>>().toBe<Else>();
    });
  });
});
