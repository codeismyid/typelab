import { describe, it } from 'bun:test';
import type {
  IsAsyncFn,
  IsAsyncFunction,
  IsFn,
  IsFunction,
  IsNewableFn,
  IsNewableFunction
} from 'lib/assertions/is-function';
import { expectType } from 'types-testing';

describe('lib > assertions > is-function', () => {
  describe('IsFunction', () => {
    it('should return `true` type, if type argument is function type', () => {
      expectType<IsFunction<() => string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not function type', () => {
      expectType<IsFunction<string>>().toBe<false>();
    });
  });

  describe('IsFn', () => {
    it('should return `true` type, if type argument is function type', () => {
      expectType<IsFn<() => string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not function type', () => {
      expectType<IsFn<string>>().toBe<false>();
    });
  });

  describe('IsAsyncFunction', () => {
    it('should return `true` type, if type argument is async function type', () => {
      expectType<IsAsyncFunction<() => Promise<string>>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not async function type', () => {
      expectType<IsAsyncFunction<string>>().toBe<false>();
    });
  });

  describe('IsAsyncFn', () => {
    it('should return `true` type, if type argument is async function type', () => {
      expectType<IsAsyncFn<() => Promise<string>>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not async function type', () => {
      expectType<IsAsyncFn<string>>().toBe<false>();
    });
  });

  describe('IsNewableFunction', () => {
    it('should return `true` type, if type argument is async function type', () => {
      expectType<IsNewableFunction<new () => string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not async function type', () => {
      expectType<IsNewableFunction<string>>().toBe<false>();
    });
  });

  describe('IsNewableFn', () => {
    it('should return `true` type, if type argument is async function type', () => {
      expectType<IsNewableFn<new () => string>>().toBe<true>();
    });

    it('should return `false` type, if type argument is not async function type', () => {
      expectType<IsNewableFn<string>>().toBe<false>();
    });
  });
});
