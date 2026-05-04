import { describe, it } from 'bun:test';
import type {
  AsyncFn,
  AsyncFunction,
  Fn,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: intended
  Function,
  NewableFn,
  NewableFunction
} from 'lib/aliases/function';
import { expectType } from 'types-testing';

describe('lib > aliases > function', () => {
  describe('Function', () => {
    describe('with type argument', () => {
      it('should be the same as function type with `Params` as parameter type and `Return` as return type', () => {
        expectType<Function<[number, string], string>>().toBe<
          (param_0: number, param_1: string) => string
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as function type with `any[]` as parameter type and `any` as return type', () => {
        expectType<Function>().toBe<(...param: any[]) => any>();
      });
    });
  });

  describe('Fn', () => {
    describe('with type argument', () => {
      it('should be the same as function type with `Params` as parameter type and `Return` as return type', () => {
        expectType<Fn<[number, string], string>>().toBe<
          (param_0: number, param_1: string) => string
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as function type with `any[]` as parameter type and `any` as return type', () => {
        expectType<Fn>().toBe<(...param: any[]) => any>();
      });
    });
  });

  describe('AsyncFunction', () => {
    describe('with type argument', () => {
      it('should be the same as function type with `Params` as parameter type and `Promise<Return>` as return type', () => {
        expectType<AsyncFunction<[number, string], string>>().toBe<
          (param_0: number, param_1: string) => Promise<string>
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as function type with `any[]` as parameter type and `Promise<any>` as return type', () => {
        expectType<AsyncFunction>().toBe<(...param: any[]) => Promise<any>>();
      });
    });
  });

  describe('AsyncFn', () => {
    describe('with type argument', () => {
      it('should be the same as function type with `Params` as parameter type and `Promise<Return>` as return type', () => {
        expectType<AsyncFn<[number, string], string>>().toBe<
          (param_0: number, param_1: string) => Promise<string>
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as function type with `any[]` as parameter type and `Promise<any>` as return type', () => {
        expectType<AsyncFn>().toBe<(...param: any[]) => Promise<any>>();
      });
    });
  });

  describe('NewableFunction', () => {
    describe('with type argument', () => {
      it('should be the same as newable function type with `Params` as parameter type and `Promise<Return>` as return type', () => {
        expectType<NewableFunction<[number, string], string>>().toBe<
          new (
            param_0: number,
            param_1: string
          ) => string
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as newable function type with `any[]` as parameter type and `Promise<any>` as return type', () => {
        expectType<NewableFunction>().toBe<new (...param: any[]) => any>();
      });
    });
  });

  describe('NewableFn', () => {
    describe('with type argument', () => {
      it('should be the same as newable function type with `Params` as parameter type and `Promise<Return>` as return type', () => {
        expectType<NewableFn<[number, string], string>>().toBe<
          new (
            param_0: number,
            param_1: string
          ) => string
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as newable function type with `any[]` as parameter type and `Promise<any>` as return type', () => {
        expectType<NewableFn>().toBe<new (...param: any[]) => any>();
      });
    });
  });
});
