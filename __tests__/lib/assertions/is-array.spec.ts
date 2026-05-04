import { describe, it } from 'bun:test';
import type {
  IsArray,
  IsArrayReadonly,
  IsArrayWritable,
  IsTuple,
  IsTupleReadonly,
  IsTupleWritable
} from 'lib/assertions/is-array';
import { expectType } from 'types-testing';

describe('lib > assertions > is-array', () => {
  describe('IsArray', () => {
    it('should return `true` type, if type argument is array type', () => {
      expectType<IsArray<string[]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not array type', () => {
      expectType<IsArray<string>>().toBe<false>();
    });
  });

  describe('IsArrayReadonly', () => {
    it('should return `true` type, if type argument is readonly array type', () => {
      expectType<IsArrayReadonly<readonly string[]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not readonly array type', () => {
      expectType<IsArrayReadonly<string[]>>().toBe<false>();
    });
  });

  describe('IsArrayWritable', () => {
    it('should return `true` type, if type argument is writable array type', () => {
      expectType<IsArrayWritable<string[]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not writable array type', () => {
      expectType<IsArrayWritable<readonly string[]>>().toBe<false>();
    });
  });

  describe('IsTuple', () => {
    it('should return `true` type, if type argument is tuple type', () => {
      expectType<IsTuple<[string]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not tuple type', () => {
      expectType<IsTuple<string[]>>().toBe<false>();
    });
  });

  describe('IsTupleReadonly', () => {
    it('should return `true` type, if type argument is readonly tuple type', () => {
      expectType<IsTupleReadonly<readonly [string]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not readonly tuple type', () => {
      expectType<IsTupleReadonly<[string]>>().toBe<false>();
      expectType<IsTupleReadonly<readonly string[]>>().toBe<false>();
    });
  });

  describe('IsTupleWritable', () => {
    it('should return `true` type, if type argument is writable tuple type', () => {
      expectType<IsTupleWritable<[string]>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not writable tuple type', () => {
      expectType<IsTupleWritable<readonly [string]>>().toBe<false>();
      expectType<IsTupleWritable<string[]>>().toBe<false>();
    });
  });
});
