import { describe, it } from 'bun:test';
import type {
  IfArray,
  IfArrayReadonly,
  IfArrayWritable,
  IfTuple,
  IfTupleReadonly,
  IfTupleWritable
} from 'lib/conditions/if-array';
import { expectType } from 'types-testing';
import type { Else, Then } from './_';

describe('lib > conditions > if-array', () => {
  describe('IfArray', () => {
    it('should return `Then` type, if type argument is array type', () => {
      expectType<IfArray<string[], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not array type', () => {
      expectType<IfArray<string, Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of array and non array', () => {
      expectType<IfArray<string[] | string, Then, Else>>().toBe<Then | Else>();
    });
  });

  describe('IfArrayReadonly', () => {
    it('should return `Then` type, if type argument is readonly array type', () => {
      expectType<IfArrayReadonly<readonly string[], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not readonly array type', () => {
      expectType<IfArrayReadonly<string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of readonly array and non readonly array', () => {
      expectType<
        IfArrayReadonly<readonly string[] | string[], Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfArrayWritable', () => {
    it('should return `Then` type, if type argument is writable array type', () => {
      expectType<IfArrayWritable<string[], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not writable array type', () => {
      expectType<IfArrayWritable<readonly string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of writable array and non writable array', () => {
      expectType<
        IfArrayWritable<readonly string[] | string[], Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfTuple', () => {
    it('should return `Then` type, if type argument is tuple type', () => {
      expectType<IfTuple<[string], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not tuple type', () => {
      expectType<IfTuple<string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of tuple and non tuple', () => {
      expectType<IfTuple<[string] | string[], Then, Else>>().toBe<
        Then | Else
      >();
    });
  });

  describe('IfTupleReadonly', () => {
    it('should return `Then` type, if type argument is readonly tuple type', () => {
      expectType<IfTupleReadonly<readonly [string], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not readonly tuple type', () => {
      expectType<IfTupleReadonly<[string], Then, Else>>().toBe<Else>();
      expectType<IfTupleReadonly<readonly string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of readonly tuple and non readonly tuple', () => {
      expectType<
        IfTupleReadonly<readonly [string] | [string], Then, Else>
      >().toBe<Then | Else>();
    });
  });

  describe('IfTupleWritable', () => {
    it('should return `Then` type, if type argument is writable tuple type', () => {
      expectType<IfTupleWritable<[string], Then, Else>>().toBe<Then>();
    });

    it('should return `Else` type, if type argument is not writable tuple type', () => {
      expectType<IfTupleWritable<readonly [string], Then, Else>>().toBe<Else>();
      expectType<IfTupleWritable<string[], Then, Else>>().toBe<Else>();
    });

    it('should return `Then` | `Else` type, if type argument is union of writable tuple and non writable tuple', () => {
      expectType<
        IfTupleWritable<readonly [string] | [string], Then, Else>
      >().toBe<Then | Else>();
    });
  });
});
