import { describe, it } from 'bun:test';
import type {
  IsAssignable,
  IsAssignableEitherWay,
  IsAssignableMutually,
  IsExtends,
  IsExtendsEitherWay,
  IsExtendsMutually,
  IsNotAssignable,
  IsNotAssignableEitherWay,
  IsNotAssignableMutually,
  IsNotExtends,
  IsNotExtendsEitherWay,
  IsNotExtendsMutually
} from 'lib/assertions/is-extends';
import { expectType } from 'types-testing';

describe('lib > assertions > is-extends', () => {
  describe('IsExtends', () => {
    it('should return `true` type, if `T1` extends `T2`', () => {
      expectType<IsExtends<'', string>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2`', () => {
      expectType<IsExtends<string, ''>>().toBe<false>();
    });
  });

  describe('IsNotExtends', () => {
    it('should return `true` type, if `T1` not extends `T2`', () => {
      expectType<IsNotExtends<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2`', () => {
      expectType<IsNotExtends<'', string>>().toBe<false>();
    });
  });

  describe('IsAssignable', () => {
    it('should return `true` type, if `T1` extends `T2`', () => {
      expectType<IsAssignable<'', string>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2`', () => {
      expectType<IsAssignable<string, ''>>().toBe<false>();
    });
  });

  describe('IsNotAssignable', () => {
    it('should return `true` type, if `T1` not extends `T2`', () => {
      expectType<IsNotAssignable<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2`', () => {
      expectType<IsNotAssignable<'', string>>().toBe<false>();
    });
  });

  describe('IsExtendsMutually', () => {
    it('should return `true` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<IsExtendsMutually<string, string>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IsExtendsMutually<string, ''>>().toBe<false>();
    });
  });

  describe('IsNotExtendsMutually', () => {
    it('should return `true` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IsNotExtendsMutually<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<IsNotExtendsMutually<string, string>>().toBe<false>();
    });
  });

  describe('IsAssignableMutually', () => {
    it('should return `true` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<IsAssignableMutually<string, string>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IsAssignableMutually<string, ''>>().toBe<false>();
    });
  });

  describe('IsNotAssignableMutually', () => {
    it('should return `true` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IsNotAssignableMutually<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<IsNotAssignableMutually<string, string>>().toBe<false>();
    });
  });

  describe('IsExtendsEitherWay', () => {
    it('should return `true` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IsExtendsEitherWay<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<IsExtendsEitherWay<string, number>>().toBe<false>();
    });
  });

  describe('IsNotExtendsEitherWay', () => {
    it('should return `true` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<IsNotExtendsEitherWay<string, number>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IsNotExtendsEitherWay<string, ''>>().toBe<false>();
    });
  });

  describe('IsAssignableEitherWay', () => {
    it('should return `true` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IsAssignableEitherWay<string, ''>>().toBe<true>();
    });

    it('should return `false` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<IsAssignableEitherWay<string, number>>().toBe<false>();
    });
  });

  describe('IsNotAssignableEitherWay', () => {
    it('should return `true` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<IsNotAssignableEitherWay<string, number>>().toBe<true>();
    });

    it('should return `false` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IsNotAssignableEitherWay<string, ''>>().toBe<false>();
    });
  });
});
