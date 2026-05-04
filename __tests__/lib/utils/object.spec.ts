import { describe, it } from 'bun:test';
import type {
  ObjectAssign,
  ObjectMerge,
  ObjectOmitOptional,
  ObjectOmitRequired,
  ObjectOptionalKeys,
  ObjectOverwrite,
  ObjectPartial,
  ObjectPath,
  ObjectPathValue,
  ObjectPick,
  ObjectReadonly,
  ObjectRequired,
  ObjectRequiredKeys,
  ObjectToTuple,
  ObjectUnionize,
  ObjectWritable
} from 'lib/utils/object';
import { expectType } from 'types-testing';

describe('lib > utils > object', () => {
  describe('ObjectPick', () => {
    it('should return object based on `T` and `K`', () => {
      expectType<ObjectPick<{ a: string; b: string }, 'a'>>().toBe<{
        a: string;
      }>();
    });
  });

  describe('ObjectRequired', () => {
    describe('include undefined', () => {
      it('should make `T[K]` required', () => {
        expectType<
          ObjectRequired<{ a?: string; b?: string }, 'a', true>
        >().toBe<{
          a: string | undefined;
          b?: string;
        }>();
      });
    });

    describe('not include undefined', () => {
      it('should make `T[K]` required', () => {
        expectType<ObjectRequired<{ a?: string; b?: string }, 'a'>>().toBe<{
          a: string;
          b?: string;
        }>();
      });
    });
  });

  describe('ObjectPartial', () => {
    it('should make `T[K]` optional', () => {
      expectType<ObjectPartial<{ a: string; b: string }, 'a'>>().toBe<{
        a?: string;
        b: string;
      }>();
    });
  });

  describe('ObjectRequiredKeys', () => {
    it('should get required keys from `T`', () => {
      expectType<
        ObjectRequiredKeys<{ a: number; b: string | undefined; c?: boolean }>
      >().toBe<'a' | 'b'>();
    });
  });

  describe('ObjectOptionalKeys', () => {
    it('should get optional keys from `T`', () => {
      expectType<
        ObjectOptionalKeys<{ a: number; b: string | undefined; c?: boolean }>
      >().toBe<'c'>();
    });
  });

  describe('ObjectOmitRequired', () => {
    type Obj = {
      a: string | undefined;
      b?: string;
      c: { d: string; e?: string };
    };

    describe('shallow', () => {
      it('should omit required props from `T`', () => {
        expectType<ObjectOmitRequired<Obj, 'shallow'>>().toBe<{
          b?: string;
          c?: { d: string; e?: string };
        }>();
      });
    });

    describe('deep', () => {
      it('should omit required props from `T`', () => {
        expectType<ObjectOmitRequired<Obj, 'shallow'>>().toBe<{
          b?: string;
          c?: { e?: string };
        }>();
      });
    });
  });

  describe('ObjectOmitOptional', () => {
    type Obj = {
      a: string | undefined;
      b?: string;
      c: { d: string; e?: string };
    };

    describe('shallow', () => {
      it('should omit optional props from `T`', () => {
        expectType<ObjectOmitOptional<Obj, 'shallow'>>().toBe<{
          a: string | undefined;
          c: { d: string; e?: string };
        }>();
      });
    });

    describe('deep', () => {
      it('should omit optional props from `T`', () => {
        expectType<ObjectOmitOptional<Obj, 'shallow'>>().toBe<{
          a: string | undefined;
          c: { d: string };
        }>();
      });
    });
  });

  describe('ObjectReadonly', () => {
    it('should make `T[K]` readonly', () => {
      expectType<ObjectReadonly<{ a: string; b: string }, 'a'>>().toBe<{
        readonly a: string;
        b: string;
      }>();
    });
  });

  describe('ObjectWritable', () => {
    it('should make `T[K]` writable', () => {
      expectType<
        ObjectWritable<{ readonly a: string; b: string }, 'a'>
      >().toBe<{ a: string; b: string }>();
    });
  });

  describe('ObjectPath', () => {
    it('should return all of object path', () => {
      expectType<ObjectPath<{ a: { b: number }; c: string }>>().toBe<
        'a' | 'a.b' | 'c'
      >();
    });
  });

  describe('ObjectPathValue', () => {
    it('should return `T[K]` type', () => {
      expectType<
        ObjectPathValue<{ a: { b: number }; c: string }, 'a.b'>
      >().toBe<number>();
    });
  });

  describe('ObjectToTuple', () => {
    describe('include non index', () => {
      it('should convert object to tuple', () => {
        try {
          expectType<ObjectToTuple<{ a: 'a'; b: 'b'; c: 'c' }, true>>().toBe<
            ['a', 'b', 'c']
          >();
        } catch {}
      });
    });

    describe('exclude non index', () => {
      it('should convert object to tuple', () => {
        expectType<ObjectToTuple<{ 0: string; 1: number; 2: boolean }>>().toBe<
          [string, number, boolean]
        >();
      });
    });
  });

  describe('ObjectAssign', () => {
    it('should assign object based on `Target` and `Source`', () => {
      expectType<
        ObjectAssign<{ a: string; b: number }, { b: string; c: boolean }>
      >().toBe<{
        a: string;
        b: string;
        c: boolean;
      }>();
      expectType<ObjectAssign<{ a: string }, [string]>>().toBe<{
        a: string;
        0: string;
      }>();
      expectType<ObjectAssign<{ a: string }, string[]>>().toBe<{
        [x: number]: string;
        a: string;
      }>();
      expectType<ObjectAssign<[string], [number, number]>>().toBe<
        [number, number]
      >();
      expectType<ObjectAssign<string[], [number, number]>>().toBe<
        (string | number)[]
      >();
      expectType<ObjectAssign<string[], number[]>>().toBe<
        (string | number)[]
      >();
      expectType<ObjectAssign<[string], { 0: number; 1: string }>>().toBe<
        [number, string]
      >();
      expectType<ObjectAssign<ObjectAssign<[number], 'str'>>>().toBe<
        (string | number)[]
      >();
      expectType<ObjectAssign<{ a: string }, 'str'>>().toBe<{
        [x: number]: string;
        a: string;
      }>();
    });
  });

  describe('ObjectOverwrite', () => {
    type Obj1 = { a: string; b: string; c: { a: string } };
    type Obj2 = { b: number; c: { b: number }; d: number };

    describe('shallow', () => {
      it('should overwrite object based on `Target` and `Source`', () => {
        expectType<ObjectOverwrite<Obj1, Obj2, 'shallow'>>().toBe<{
          a: string;
          b: number;
          c: { b: number };
          d: number;
        }>();
      });
    });

    describe('deep', () => {
      it('should overwrite object based on `Target` and `Source`', () => {
        expectType<ObjectOverwrite<Obj1, Obj2, 'deep'>>().toBe<{
          a: string;
          b: number;
          c: { a: string; b: number };
          d: number;
        }>();
      });
    });
  });

  describe('ObjectMerge', () => {
    type Obj1 = { a: string; b: string; c: { a: string } };
    type Obj2 = { b: number; c: { a: number; b: number }; d: number };

    describe('shallow', () => {
      it('should merge object based on `Target` and `Source`', () => {
        expectType<ObjectMerge<Obj1, Obj2, 'shallow'>>().toBe<{
          a: string;
          b: string | number;
          c: { a: string } | { a: number; b: number };
          d: number;
        }>();
      });
    });

    describe('deep', () => {
      it('should merge object based on `Target` and `Source`', () => {
        expectType<ObjectMerge<Obj1, Obj2, 'deep'>>().toBe<{
          a: string;
          b: string | number;
          c: { a: string | number; b: number };
          d: number;
        }>();
      });
    });
  });

  describe('ObjectUnionize', () => {
    describe('shallow', () => {
      it('should unionize object based on `Target` and `UnionType`', () => {
        expectType<
          ObjectUnionize<{ a: string; b: { a: string } }, number, 'shallow'>
        >().toBe<{
          a: string | number;
          b: number | { a: string };
        }>();
      });
    });

    describe('deep', () => {
      it('should unionize object based on `Target` and `UnionType`', () => {
        expectType<
          ObjectUnionize<{ a: string; b: { a: string } }, number, 'deep'>
        >().toBe<{
          a: string | number;
          b: { a: string | number };
        }>();
      });
    });
  });
});
