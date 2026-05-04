import { describe, it } from 'bun:test';
import type {
  ExtractArray,
  ExtractParams,
  ExtractPromise,
  ExtractReturn
} from 'lib/utils/extract';
import { expectType } from 'types-testing';

describe('lib > utils > extract', () => {
  describe('ExtractArray', () => {
    it('should extract values from array `T`', () => {
      expectType<ExtractArray<number[]>>().toBe<number>();
    });

    it('should return `never`', () => {
      // @ts-expect-error
      expectType<ExtractArray<Promise<number>>>().toBe<never>();
    });
  });

  describe('ExtractPromise', () => {
    it('should extract value from promise `T`', () => {
      expectType<ExtractPromise<Promise<number>>>().toBe<number>();
    });

    it('should return `never`', () => {
      // @ts-expect-error
      expectType<ExtractPromise<number>>().toBe<never>();
    });
  });

  describe('ExtractParams', () => {
    it('should extract params from function `T`', () => {
      expectType<ExtractParams<(a: string, b: number) => void>>().toBe<
        [a: string, b: number]
      >();
      expectType<
        ExtractParams<new (a: string, b: number) => { a: string; b: string }>
      >().toBe<[a: string, b: number]>();
      class MyClass {
        constructor(
          public a: string,
          public b: number
        ) {}
      }
      expectType<ExtractParams<typeof MyClass>>().toBe<
        [a: string, b: number]
      >();
    });
  });

  describe('ExtractReturn', () => {
    it('should extract return value from function `T`', () => {
      expectType<
        ExtractReturn<(a: string, b: number) => string>
      >().toBe<string>();
      expectType<
        ExtractReturn<new (a: string, b: number) => { a: string; b: string }>
      >().toBe<{
        a: string;
        b: string;
      }>();
    });
  });
});
