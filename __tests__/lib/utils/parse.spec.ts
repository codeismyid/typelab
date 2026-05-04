import { describe, it } from 'bun:test';
import type {
  ParseBigInt,
  ParseBigIntNegative,
  ParseBigIntPositive,
  ParseBoolean,
  ParseFloat,
  ParseFloatNegative,
  ParseFloatPositive,
  ParseInt,
  ParseIntNegative,
  ParseIntPositive,
  ParseObject,
  ParseString
} from 'lib/utils/parse';
import { expectType } from 'types-testing';

describe('lib > utils > parse', () => {
  describe('ParseInt', () => {
    it('should parse string with number format to Int', () => {
      expectType<ParseInt<'11'>>().toBe<11>();
    });
  });

  describe('ParseIntNegative', () => {
    it('should parse string with number format to negative Int', () => {
      expectType<ParseIntNegative<'11'>>().toBe<-11>();
    });
  });

  describe('ParseIntPositive', () => {
    it('should parse string with number format to positive Int', () => {
      expectType<ParseIntPositive<'-11'>>().toBe<11>();
    });
  });

  describe('ParseFloat', () => {
    it('should parse string with number format to float', () => {
      expectType<ParseFloat<'11.1'>>().toBe<11.1>();
    });
  });

  describe('ParseFloatNegative', () => {
    it('should parse string with number format to negative float', () => {
      expectType<ParseFloatNegative<'11.1'>>().toBe<-11.1>();
    });
  });

  describe('ParseFloatPositive', () => {
    it('should parse string with number format to positive float', () => {
      expectType<ParseFloatPositive<'-11.1'>>().toBe<11.1>();
    });
  });

  describe('ParseBigInt', () => {
    it('should parse string with bigint format to bigint', () => {
      expectType<ParseBigInt<'11n'>>().toBe<11n>();
    });
  });

  describe('ParseBigIntNegative', () => {
    it('should parse string with bigint format to negative bigint', () => {
      expectType<ParseBigIntNegative<'11n'>>().toBe<-11n>();
    });
  });

  describe('ParseBigIntPositive', () => {
    it('should parse string with bigint format to positive bigint', () => {
      expectType<ParseBigIntPositive<'-11n'>>().toBe<11n>();
    });
  });

  describe('ParseString', () => {
    it('should parse type to string', () => {
      expectType<ParseString<11>>().toBe<'11'>();
    });
  });

  describe('ParseBoolean', () => {
    it('should parse type to boolean', () => {
      expectType<ParseBoolean<'true'>>().toBe<true>();
      expectType<ParseBoolean<1>>().toBe<true>();
      expectType<ParseBoolean<'false'>>().toBe<false>();
      expectType<ParseBoolean<0>>().toBe<false>();
    });
  });

  describe('ParseObject', () => {
    it('should parse type to object', () => {
      expectType<ParseObject<true>>().toBe<{ valueOf: () => boolean }>();
    });
  });
});
