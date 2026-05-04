import { describe, it } from 'bun:test';
import type {
  IfAsyncFn,
  IfAsyncFunction,
  IfFn,
  IfFunction,
  IfNewableFn,
  IfNewableFunction
} from 'lib/conditions/if-function';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-function', () => {
  describe('IfFunction', () => {
    it('should return `Then` type, if type argument is function type', () => {
      expectType<IfFunction<() => void, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not function type', () => {
      expectType<IfFunction<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of function and non function', () => {
      expectType<IfFunction<(() => void) | string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfFn', () => {
    it('should return `Then` type, if type argument is function type', () => {
      expectType<IfFn<() => string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not function type', () => {
      expectType<IfFn<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of function and non function', () => {
      expectType<IfFn<(() => void) | string, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfAsyncFunction', () => {
    it('should return `Then` type, if type argument is async function type', () => {
      expectType<
        IfAsyncFunction<() => Promise<string>, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not async function type', () => {
      expectType<IfAsyncFunction<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of async function and non async function', () => {
      expectType<
        IfAsyncFunction<(() => Promise<void>) | (() => void), Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfAsyncFn', () => {
    it('should return `Then` type, if type argument is async function type', () => {
      expectType<IfAsyncFn<() => Promise<string>, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not async function type', () => {
      expectType<IfAsyncFn<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of async function and non async function', () => {
      expectType<
        IfAsyncFn<(() => Promise<void>) | (() => void), Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfNewableFunction', () => {
    it('should return `Then` type, if type argument is async function type', () => {
      expectType<
        IfNewableFunction<new () => string, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not async function type', () => {
      expectType<IfNewableFunction<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of newable function and non newable function', () => {
      expectType<
        IfNewableFunction<(new () => void) | (() => void), Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfNewableFn', () => {
    it('should return `Then` type, if type argument is async function type', () => {
      expectType<IfNewableFn<new () => string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not async function type', () => {
      expectType<IfNewableFn<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of newable function and non newable function', () => {
      expectType<
        IfNewableFn<(new () => void) | (() => void), Then, Else>
      >().toBe<Then | Else>();
    });
  });
});
