import { describe, it } from 'bun:test';
import type {
  IfAssignable,
  IfAssignableEitherWay,
  IfAssignableMutually,
  IfExtends,
  IfExtendsEitherWay,
  IfExtendsMutually,
  IfNotAssignable,
  IfNotAssignableEitherWay,
  IfNotAssignableMutually,
  IfNotExtends,
  IfNotExtendsEitherWay,
  IfNotExtendsMutually
} from 'lib/conditions/if-extends';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-extends', () => {
  describe('IfExtends', () => {
    it('should return `Then` type, if `T1` extends `T2`', () => {
      expectType<IfExtends<'', string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2`', () => {
      expectType<IfExtends<string, '', Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2`', () => {
      expectType<IfExtends<string | number, string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfNotExtends', () => {
    it('should return `Then` type, if `T1` not extends `T2`', () => {
      expectType<IfNotExtends<string, '', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2`', () => {
      expectType<IfNotExtends<'', string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2`', () => {
      expectType<IfNotExtends<string | number, string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfAssignable', () => {
    it('should return `Then` type, if `T1` extends `T2`', () => {
      expectType<IfAssignable<'', string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2`', () => {
      expectType<IfAssignable<string, '', Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2`', () => {
      expectType<IfAssignable<string | number, string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfNotAssignable', () => {
    it('should return `Then` type, if `T1` not extends `T2`', () => {
      expectType<IfNotAssignable<string, '', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2`', () => {
      expectType<IfNotAssignable<'', string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2`', () => {
      expectType<IfNotAssignable<string | number, string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfExtendsMutually', () => {
    it('should return `Then` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<IfExtendsMutually<string, string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IfExtendsMutually<'', string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` and `T2` are mutually extends / not extends', () => {
      expectType<IfExtendsMutually<string | number, string, Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfNotExtendsMutually', () => {
    it('should return `Then` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IfNotExtendsMutually<'', string, Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<
        IfNotExtendsMutually<string, string, Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` and `T2` are mutually extends / not extends', () => {
      expectType<
        IfNotExtendsMutually<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfAssignableMutually', () => {
    it('should return `Then` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<
        IfAssignableMutually<string, string, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<IfAssignableMutually<string, '', Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` and `T2` are mutually extends / not extends', () => {
      expectType<
        IfAssignableMutually<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfNotAssignableMutually', () => {
    it('should return `Then` type, if `T1` not extends `T2` or `T2` not extends `T1`', () => {
      expectType<
        IfNotAssignableMutually<string, '', Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2` and `T2` extends `T1`', () => {
      expectType<
        IfNotAssignableMutually<string, string, Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` and `T2` are mutually extends / not extends', () => {
      expectType<
        IfNotAssignableMutually<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfExtendsEitherWay', () => {
    it('should return `Then` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IfExtendsEitherWay<string, '', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<IfExtendsEitherWay<string, number, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2` (vice versa)', () => {
      expectType<
        IfExtendsEitherWay<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfNotExtendsEitherWay', () => {
    it('should return `Then` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<
        IfNotExtendsEitherWay<string, number, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IfNotExtendsEitherWay<string, '', Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2` (vice versa)', () => {
      expectType<
        IfNotExtendsEitherWay<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfAssignableEitherWay', () => {
    it('should return `Then` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<IfAssignableEitherWay<string, '', Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<
        IfAssignableEitherWay<string, number, Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2` (vice versa)', () => {
      expectType<
        IfAssignableEitherWay<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfNotAssignableEitherWay', () => {
    it('should return `Then` type, if `T1` not extends `T2` and `T2` not extends `T1`', () => {
      expectType<
        IfNotAssignableEitherWay<string, number, Then, Else>
      >().toBe<Then>();
    });

    it('should return `Else` type, if `T1` extends `T2` or `T2` extends `T1`', () => {
      expectType<
        IfNotAssignableEitherWay<string, '', Then, Else>
      >().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if `T1` extends / not extends `T2` (vice versa)', () => {
      expectType<
        IfNotAssignableEitherWay<string | number, string, Then, Else>
      >().toBe<Then | Else>();
    });
  });
});
