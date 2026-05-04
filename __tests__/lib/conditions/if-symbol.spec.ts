import { describe, it } from 'bun:test';
import type { IfSymbol } from 'lib/conditions/if-symbol';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-symbol', () => {
  describe('IfSymbol', () => {
    it('should return `Then` type, if type argument is `symbol` type', () => {
      expectType<IfSymbol<symbol, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not `symbol` type', () => {
      expectType<IfSymbol<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of symbol and non symbol', () => {
      expectType<IfSymbol<symbol | string, Then, Else>>().toBe<Then | Else>();
    });
  });
});
