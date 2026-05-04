import { describe, it } from 'bun:test';
import type {
  FnAssign,
  FnCallbackify,
  FnMerge,
  FnOverwrite,
  FnPromisify,
  FunctionAssign,
  FunctionCallbackify,
  FunctionMerge,
  FunctionOverwrite,
  FunctionPromisify
} from 'lib/utils/function';
import { expectType } from 'types-testing';

describe('lib > utils > function', () => {
  describe('FunctionAssign', () => {
    it('should assign function based on `Target` and `Source`', () => {
      expectType<
        FunctionAssign<
          (...param: [string, string]) => { a: string; b: string },
          (...param: [number]) => { a: number }
        >
      >().toBe<
        (param_0: number, param_1: string) => { a: number; b: string }
      >();
    });
  });

  describe('FnAssign', () => {
    it('should assign function based on `Target` and `Source`', () => {
      expectType<
        FnAssign<
          (...param: [string, string]) => { a: string; b: string },
          (...param: [number]) => { a: number }
        >
      >().toBe<
        (param_0: number, param_1: string) => { a: number; b: string }
      >();
    });
  });

  describe('FunctionOverwrite', () => {
    type Obj1 = { a: string; b: { a: string } };
    type Obj2 = { a: number; b: { b: number } };

    describe('shallow', () => {
      it('should overwrite function based on `Target` and `Source`', () => {
        expectType<
          FunctionOverwrite<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'shallow'
          >
        >().toBe<
          (param_0: number, param_1: string) => { a: number; b: { b: number } }
        >();
      });
    });

    describe('shallow', () => {
      it('should overwrite function based on `Target` and `Source`', () => {
        expectType<
          FunctionOverwrite<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'deep'
          >
        >().toBe<
          (
            param_0: number,
            param_1: string
          ) => { a: number; b: { a: string; b: number } }
        >();
      });
    });
  });

  describe('FnOverwrite', () => {
    type Obj1 = { a: string; b: { a: string } };
    type Obj2 = { a: number; b: { b: number } };

    describe('shallow', () => {
      it('should overwrite function based on `Target` and `Source`', () => {
        expectType<
          FnOverwrite<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'shallow'
          >
        >().toBe<
          (param_0: number, param_1: string) => { a: number; b: { b: number } }
        >();
      });
    });

    describe('shallow', () => {
      it('should overwrite function based on `Target` and `Source`', () => {
        expectType<
          FnOverwrite<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'deep'
          >
        >().toBe<
          (
            param_0: number,
            param_1: string
          ) => { a: number; b: { a: string; b: number } }
        >();
      });
    });
  });

  describe('FunctionMerge', () => {
    type Obj1 = { a: string; b: { a: string } };
    type Obj2 = { a: number; b: { b: number } };

    describe('shallow', () => {
      it('should merge function based on `Target` and `Source`', () => {
        expectType<
          FunctionMerge<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'shallow'
          >
        >().toBe<
          (
            param_0: string | number,
            param_1: string
          ) => { a: string | number; b: { a: string } | { b: number } }
        >();
      });
    });

    describe('shallow', () => {
      it('should merge function based on `Target` and `Source`', () => {
        expectType<
          FunctionMerge<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'deep'
          >
        >().toBe<
          (
            param_0: string | number,
            param_1: string
          ) => { a: string | number; b: { a: string; b: number } }
        >();
      });
    });
  });

  describe('FnMerge', () => {
    type Obj1 = { a: string; b: { a: string } };
    type Obj2 = { a: number; b: { b: number } };

    describe('shallow', () => {
      it('should merge function based on `Target` and `Source`', () => {
        expectType<
          FnMerge<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'shallow'
          >
        >().toBe<
          (
            param_0: string | number,
            param_1: string
          ) => { a: string | number; b: { a: string } | { b: number } }
        >();
      });
    });

    describe('shallow', () => {
      it('should merge function based on `Target` and `Source`', () => {
        expectType<
          FnMerge<
            (...param: [string, string]) => Obj1,
            (...param: [number]) => Obj2,
            'deep'
          >
        >().toBe<
          (
            param_0: string | number,
            param_1: string
          ) => { a: string | number; b: { a: string; b: number } }
        >();
      });
    });
  });

  describe('FunctionPromisify', () => {
    it('should promisify function based on `T`', () => {
      expectType<
        FunctionPromisify<
          (a: string, callback: (error: Error, result: string) => void) => void
        >
      >().toBe<(a: string) => Promise<string>>();
      expectType<FunctionPromisify<(a: string) => string>>().toBe<
        (a: string) => Promise<string>
      >();
    });
  });

  describe('FnPromisify', () => {
    it('should promisify function based on `T`', () => {
      expectType<
        FnPromisify<
          (a: string, callback: (error: Error, result: string) => void) => void
        >
      >().toBe<(a: string) => Promise<string>>();
      expectType<FnPromisify<(a: string) => string>>().toBe<
        (a: string) => Promise<string>
      >();
    });
  });

  describe('FunctionCallbackify', () => {
    describe('default ErrorType', () => {
      it('should callbackify function based on `T`', () => {
        expectType<FunctionCallbackify<(a: string) => Promise<string>>>().toBe<
          (
            a: string,
            callback: (error: unknown, result: string) => void
          ) => void
        >();
      });
    });

    describe('custom ErrorType', () => {
      it('should callbackify function based on `T`', () => {
        expectType<
          FunctionCallbackify<(a: string) => Promise<string>, Error>
        >().toBe<
          (
            a: string,
            callback: (error: Error | null, result: string) => void
          ) => void
        >();
      });
    });
  });

  describe('FnCallbackify', () => {
    describe('default ErrorType', () => {
      it('should callbackify function based on `T`', () => {
        expectType<FnCallbackify<(a: string) => Promise<string>>>().toBe<
          (
            a: string,
            callback: (error: unknown, result: string) => void
          ) => void
        >();
      });
    });

    describe('custom ErrorType', () => {
      it('should callbackify function based on `T`', () => {
        expectType<FnCallbackify<(a: string) => Promise<string>, Error>>().toBe<
          (
            a: string,
            callback: (error: Error | null, result: string) => void
          ) => void
        >();
      });
    });
  });
});
