import { describe, it } from 'bun:test';
import type { IfEqual, IfNotEqual } from 'lib/conditions/if-equal';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-equal', () => {
  describe('IfEqual', () => {
    it('should return `Then` type, if `T1` and `T2` is equal', () => {
      expectType<IfEqual<string, string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` and `T2` is not equal', () => {
      expectType<IfEqual<string, number, Then, Else>>().toBe<Else>();
      expectType<IfEqual<string, any, Then, Else>>().toBe<Else>();
    });
  });

  describe('IfNotEqual', () => {
    it('should return `Then` type, if `T1` and `T2` is not equal', () => {
      expectType<IfNotEqual<string, number, Then, Else>>().toBe<Then>();
      expectType<IfNotEqual<string, any, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` and `T2` is equal', () => {
      expectType<IfNotEqual<string, string, Then, Else>>().toBe<Else>();
    });
  });
});
