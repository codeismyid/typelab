import { describe, it } from 'bun:test';
import type { IsString, IsStringLiteral } from 'lib/assertions/is-string';
import { expectType } from 'types-testing';

describe('lib > assertions > is-string', () => {
  describe('IsString', () => {
    it('should return `true` type, if type argument is `string` type', () => {
      expectType<IsString<string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not `string` type', () => {
      expectType<IsString<number>>().toBe<false>();
    });
  });

  describe('IsStringLiteral', () => {
    it('should return `true` type, if type argument is string literal type', () => {
      expectType<IsStringLiteral<'str'>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not string literal type', () => {
      expectType<IsStringLiteral<string>>().toBe<false>();
    });
  });
});
