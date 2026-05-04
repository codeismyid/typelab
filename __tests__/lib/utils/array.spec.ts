import { describe, it } from 'bun:test';
import type {
  ArrayAssign,
  ArrayAt,
  ArrayConcat,
  ArrayElements,
  ArrayFirst,
  ArrayFlat,
  ArrayIndexes,
  ArrayLast,
  ArrayLength,
  ArrayMerge,
  ArrayOmitOptional,
  ArrayOmitRequired,
  ArrayOptionalElements,
  ArrayOptionalIndexes,
  ArrayOptionalValues,
  ArrayOverwrite,
  ArrayPartial,
  ArrayPop,
  ArrayPush,
  ArrayRequired,
  ArrayRequiredElements,
  ArrayRequiredIndexes,
  ArrayRequiredValues,
  ArrayShift,
  ArraySkip,
  ArrayTake,
  ArrayToObject,
  ArrayUnionize,
  ArrayUnshift,
  ArrayValues
} from 'lib/utils/array';
import { expectType } from 'types-testing';

describe('lib > utils > array', () => {
  describe('ArrayLength', () => {
    it('should return `number` type, if `T` is array type', () => {
      expectType<ArrayLength<string[]>>().toBe<number>();
    });

    it('should return number literal type, if `T` is tuple type', () => {
      expectType<ArrayLength<[1, 2, 3]>>().toBe<3>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayLength<any>>().toBe<never>();
    });
  });

  describe('ArrayElements', () => {
    it('should return elements type, if `T` is array type', () => {
      expectType<ArrayElements<[string, number]>>().toBe<string | number>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayElements<any>>().toBe<never>();
    });
  });

  describe('ArrayValues', () => {
    it('should return values type, if `T` is array type', () => {
      expectType<ArrayValues<[string, number]>>().toBe<string | number>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayValues<any>>().toBe<never>();
    });
  });

  describe('ArrayIndexes', () => {
    describe('include string', () => {
      it('should return indexes type, if `T` is tuple type', () => {
        expectType<ArrayIndexes<[string, number, boolean], true>>().toBe<
          0 | 1 | 2 | '0' | '1' | '2'
        >();
      });

      it('should return `number` type, if `T` is tuple type', () => {
        expectType<ArrayIndexes<string[], true>>().toBe<number>();
      });
    });

    describe('not include string', () => {
      it('should return indexes type, if `T` is tuple type', () => {
        expectType<ArrayIndexes<[string, number, boolean]>>().toBe<0 | 1 | 2>();
      });

      it('should return `number` type, if `T` is tuple type', () => {
        expectType<ArrayIndexes<string[], true>>().toBe<number>();
      });
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayIndexes<any>>().toBe<never>();
    });
  });

  describe('ArrayAt', () => {
    it('should return `T[I]` type, if `T` is array type', () => {
      expectType<ArrayAt<[string, number, boolean], 1>>().toBe<number>();
      expectType<ArrayAt<[string, number, boolean], '1'>>().toBe<number>();
    });

    it('should return `undefined` type, if `I` is not found', () => {
      expectType<ArrayAt<[string, number, boolean], 3>>().toBe<undefined>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayAt<any, 1>>().toBe<never>();
    });
  });

  describe('ArrayFirst', () => {
    it('should return all elements type, if `T` is array type', () => {
      expectType<ArrayFirst<(string | number | boolean)[]>>().toBe<
        string | number | boolean
      >();
    });

    it('should return first element type, if `T` is tuple type', () => {
      expectType<ArrayFirst<[string, number, boolean]>>().toBe<string>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayFirst<any>>().toBe<never>();
    });
  });

  describe('ArrayLast', () => {
    it('should return all elements type, if `T` is array type', () => {
      expectType<ArrayLast<(string | number | boolean)[]>>().toBe<
        string | number | boolean
      >();
    });

    it('should return last element type, if `T` is tuple type', () => {
      expectType<ArrayLast<[string, number, boolean]>>().toBe<boolean>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayLast<any>>().toBe<never>();
    });
  });

  describe('ArrayConcat', () => {
    it('should return `[...A, ...B]` type, if `A` or `B` is tuple type', () => {
      expectType<ArrayConcat<[string, number], [boolean, object]>>().toBe<
        [string, number, boolean, object]
      >();
      expectType<ArrayConcat<string[], [boolean, object]>>().toBe<
        [...string[], boolean, object]
      >();
      expectType<ArrayConcat<[string, number], object[]>>().toBe<
        [string, number, ...object[]]
      >();
      expectType<ArrayConcat<string[], number[]>>().toBe<(string | number)[]>();
      expectType<ArrayConcat<[string, number], any>>().toBe<
        [string, number, any]
      >();
    });

    it('should return `never` type, if `A` or `B` is not array type', () => {
      expectType<ArrayConcat<any, [string, number]>>().toBe<never>();
    });
  });

  describe('ArrayPush', () => {
    it('should return [...T, U] type, if `T` is writable array type', () => {
      expectType<ArrayPush<[string, number], boolean>>().toBe<
        [string, number, boolean]
      >();
    });

    it('should return `T` type, if `U` is `never` type', () => {
      expectType<ArrayPush<[string, number], never>>().toBe<[string, number]>();
    });

    it('should return `never` type, if `T` is not writable array type', () => {
      expectType<ArrayPush<readonly [string, number], string>>().toBe<never>();
      expectType<ArrayPush<any, string>>().toBe<never>();
    });
  });

  describe('ArrayPop', () => {
    it('should return popped array type, if `T` is writable tuple type', () => {
      expectType<ArrayPop<[string, number]>>().toBe<[string]>();
    });

    it('should return `T` type, if `T` is writable array type', () => {
      expectType<ArrayPop<(string | number)[]>>().toBe<(string | number)[]>();
    });

    it('should return `never` type, if `T` is not writable array type', () => {
      expectType<ArrayPop<readonly [string, number]>>().toBe<never>();
      expectType<ArrayPop<any>>().toBe<never>();
    });
  });

  describe('ArrayUnshift', () => {
    it('should return [U, ...T] type, if `T` is writable array type', () => {
      expectType<ArrayUnshift<[string, number], boolean>>().toBe<
        [boolean, string, number]
      >();
    });

    it('should return `T` type, if `U` is `never` type', () => {
      expectType<ArrayUnshift<[string, number], never>>().toBe<
        [string, number]
      >();
    });

    it('should return `never` type, if `T` is not writable array type', () => {
      expectType<
        ArrayUnshift<readonly [string, number], string>
      >().toBe<never>();
      expectType<ArrayUnshift<any, string>>().toBe<never>();
    });
  });

  describe('ArrayShift', () => {
    it('should return shifted array type, if `T` is writable tuple type', () => {
      expectType<ArrayShift<[string, number]>>().toBe<[number]>();
    });

    it('should return `T` type, if `T` is writable array type', () => {
      expectType<ArrayShift<(string | number)[]>>().toBe<(string | number)[]>();
    });

    it('should return `never` type, if `T` is not writable array type', () => {
      expectType<ArrayShift<readonly [string, number]>>().toBe<never>();
      expectType<ArrayShift<any>>().toBe<never>();
    });
  });

  describe('ArrayFlat', () => {
    it('should return flattened array type, if `T` is array type', () => {
      expectType<
        ArrayFlat<(0 | (1 | [2][])[] | [3, [4, [5, [[6 | 7]]]]])[]>
      >().toBe<(0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[]>();
    });

    it('should return flattened tuple type, if `T` is tuple type', () => {
      expectType<
        ArrayFlat<[0, (1 | [2][])[], [3, [4, [5, [[6 | 7]]]]]]>
      >().toBe<[0, 1 | 2, 3, 4, 5, 6 | 7]>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayFlat<any>>().toBe<never>();
    });
  });

  describe('ArrayTake', () => {
    it('should return array type based on `TakeLength`', () => {
      expectType<ArrayTake<[1, 2, 3, 4], 2>>().toBe<[1, 2]>();
      expectType<ArrayTake<[1, 2, 3, 4], -2>>().toBe<[3, 4]>();
    });

    it('should return empty array type, if `TakeLength` is 0', () => {
      expectType<ArrayTake<[1, 2, 3, 4], 0>>().toBe<[]>();
    });

    it('should return `T` type, if `TakeLength` is more than length of `T`', () => {
      expectType<ArrayTake<[1, 2, 3, 4], 5>>().toBe<[1, 2, 3, 4]>();
    });

    it('should return `T` type, if `TakeLength` is not provided', () => {
      expectType<ArrayTake<[1, 2, 3, 4]>>().toBe<[1, 2, 3, 4]>();
    });

    it('should return `never` type, if `TakeLength` is not number type', () => {
      expectType<ArrayTake<[1, 2, 3, 4], any>>().toBe<never>();
      expectType<ArrayTake<[1, 2, 3, 4], never>>().toBe<never>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayTake<any, 1>>().toBe<never>();
    });
  });

  describe('ArraySkip', () => {
    it('should return array type based on `SkipLength`', () => {
      expectType<ArraySkip<[1, 2, 3, 4], 2>>().toBe<[3, 4]>();
      expectType<ArraySkip<[1, 2, 3, 4], -2>>().toBe<[1, 2]>();
    });

    it('should return empty array type, if `SkipLength` is more than length of `T`', () => {
      expectType<ArraySkip<[1, 2, 3, 4], 5>>().toBe<[]>();
    });

    it('should return `T` type, if `SkipLength` is not provided', () => {
      expectType<ArraySkip<[1, 2, 3, 4]>>().toBe<[1, 2, 3, 4]>();
    });

    it('should return `never` type, if `SkipLength` is not number type', () => {
      expectType<ArraySkip<[1, 2, 3, 4], any>>().toBe<never>();
      expectType<ArraySkip<[1, 2, 3, 4], never>>().toBe<never>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArraySkip<any, 1>>().toBe<never>();
    });
  });

  describe('ArrayRequired', () => {
    describe('include undefined', () => {
      it('should return array type based on `Index`', () => {
        expectType<ArrayRequired<[string?, string?], 0 | 1, true>>().toBe<
          [string | undefined, string | undefined]
        >();
        expectType<ArrayRequired<[string?, string?], 0, true>>().toBe<
          [string | undefined, string?]
        >();
      });

      it('should return `never` type, if `Index` is not index of `T` type', () => {
        expectType<
          ArrayRequired<[string?, string?], any, true>
        >().toBe<never>();
      });

      it('should return `never` type, if `T` is not array type', () => {
        expectType<ArrayRequired<any, 1, true>>().toBe<never>();
      });
    });

    describe('not include undefined', () => {
      it('should return array type based on `Index`', () => {
        expectType<ArrayRequired<[string?, string?]>>().toBe<
          [string, string]
        >();
        expectType<ArrayRequired<[string?, string?], 0>>().toBe<
          [string, string?]
        >();
      });

      it('should return `never` type, if `Index` is not index of `T` type', () => {
        expectType<ArrayRequired<[string?, string?], any>>().toBe<never>();
      });

      it('should return `never` type, if `T` is not array type', () => {
        expectType<ArrayRequired<any, 1>>().toBe<never>();
      });
    });
  });

  describe('ArrayPartial', () => {
    it('should return array type based on `Index`', () => {
      expectType<ArrayPartial<[string, string]>>().toBe<[string?, string?]>();
      expectType<ArrayPartial<[string, string], 1>>().toBe<[string, string?]>();
    });

    it('should return `never` type, if `T` is not array type', () => {
      expectType<ArrayPartial<[string, string], any>>().toBe<never>();
      expectType<ArrayPartial<[string, string], never>>().toBe<never>();
    });

    it('should return `never` type, if `Index` is not index of `T` type', () => {
      expectType<ArrayPartial<any, 1>>().toBe<never>();
    });
  });

  describe('ArrayRequiredIndexes', () => {
    describe('`T` is tuple', () => {
      describe('include string', () => {
        it('should return union type based on `T` (required) indexes', () => {
          expectType<
            ArrayRequiredIndexes<[string, string, string?], true>
          >().toBe<0 | 1 | '0' | '1'>();
        });

        it('should return `never` if required indexes not found', () => {
          expectType<
            ArrayRequiredIndexes<[string?, string?, string?], true>
          >().toBe<never>();
        });
      });

      describe('not include string', () => {
        it('should return union type based on `T` (required) indexes', () => {
          expectType<ArrayRequiredIndexes<[string, string, string?]>>().toBe<
            0 | 1
          >();
        });

        it('should return `never` if required indexes not found', () => {
          expectType<
            ArrayRequiredIndexes<[string?, string?, string?]>
          >().toBe<never>();
        });
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `number`', () => {
        expectType<ArrayRequiredIndexes<string[]>>().toBe<number>();
      });

      it('should return `never`', () => {
        expectType<ArrayRequiredIndexes<any>>().toBe<never>();
        expectType<ArrayOptionalIndexes<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayOptionalIndexes', () => {
    describe('`T` is tuple', () => {
      describe('include string', () => {
        it('should return union type based on `T` (required) indexes', () => {
          expectType<
            ArrayOptionalIndexes<[string, string?, string?], true>
          >().toBe<1 | 2 | '1' | '2'>();
        });

        it('should return `never` if required indexes not found', () => {
          expectType<
            ArrayOptionalIndexes<[string, string, string], true>
          >().toBe<never>();
        });
      });

      describe('not include string', () => {
        it('should return union type based on `T` (required) indexes', () => {
          expectType<ArrayOptionalIndexes<[string, string?, string?]>>().toBe<
            1 | 2
          >();
        });

        it('should return `never` if required indexes not found', () => {
          expectType<
            ArrayOptionalIndexes<[string, string, string]>
          >().toBe<never>();
        });
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `number`', () => {
        expectType<
          ArrayOptionalIndexes<(string | undefined)[]>
        >().toBe<number>();
      });

      it('should return `never`', () => {
        expectType<ArrayOptionalIndexes<any>>().toBe<never>();
        expectType<ArrayOptionalIndexes<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayRequiredElements', () => {
    describe('`T` is tuple', () => {
      it('should return union type based on `T` (required) elements', () => {
        expectType<ArrayRequiredElements<[0, 1, 2?]>>().toBe<0 | 1>();
      });

      it('should return `never` if required elements not found', () => {
        expectType<ArrayRequiredElements<[0?, 1?, 2?]>>().toBe<never>();
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `T` elements', () => {
        expectType<ArrayRequiredElements<(string | undefined)[]>>().toBe<
          string | undefined
        >();
      });

      it('should return `never`', () => {
        expectType<ArrayRequiredElements<any>>().toBe<never>();
        expectType<ArrayRequiredElements<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayOptionalElements', () => {
    describe('`T` is tuple', () => {
      it('should return union type based on `T` (optional) elements', () => {
        expectType<ArrayOptionalElements<[0, 1?, 2?]>>().toBe<
          1 | 2 | undefined
        >();
      });

      it('should return `never` if optional elements not found', () => {
        expectType<ArrayOptionalElements<[0, 1, 2]>>().toBe<never>();
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `T` elements', () => {
        expectType<ArrayOptionalElements<(string | undefined)[]>>().toBe<
          string | undefined
        >();
      });

      it('should return `never`', () => {
        expectType<ArrayOptionalElements<any>>().toBe<never>();
        expectType<ArrayOptionalElements<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayRequiredValues', () => {
    describe('`T` is tuple', () => {
      it('should return union type based on `T` (required) values', () => {
        expectType<ArrayRequiredValues<[0, 1, 2?]>>().toBe<0 | 1>();
      });

      it('should return `never` if required values not found', () => {
        expectType<ArrayRequiredValues<[0?, 1?, 2?]>>().toBe<never>();
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `T` values', () => {
        expectType<ArrayRequiredValues<(string | undefined)[]>>().toBe<
          string | undefined
        >();
      });

      it('should return `never`', () => {
        expectType<ArrayRequiredValues<any>>().toBe<never>();
        expectType<ArrayRequiredValues<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayOptionalValues', () => {
    describe('`T` is tuple', () => {
      it('should return union type based on `T` (optional) values', () => {
        expectType<ArrayOptionalValues<[0, 1?, 2?]>>().toBe<
          1 | 2 | undefined
        >();
      });

      it('should return `never` if optional values not found', () => {
        expectType<ArrayOptionalValues<[0, 1, 2]>>().toBe<never>();
      });
    });

    describe('`T` is not tuple', () => {
      it('should return `T` values', () => {
        expectType<ArrayOptionalValues<(string | undefined)[]>>().toBe<
          string | undefined
        >();
      });

      it('should return `never`', () => {
        expectType<ArrayOptionalValues<any>>().toBe<never>();
        expectType<ArrayOptionalValues<never>>().toBe<never>();
      });
    });
  });

  describe('ArrayOmitRequired', () => {
    describe('omit hole', () => {
      it('should omit required elements from `T`', () => {
        expectType<
          ArrayOmitRequired<[string, string, string?, string?]>
        >().toBe<[string?, string?]>();
      });

      it('should return `never`', () => {
        expectType<ArrayOmitRequired<any>>().toBe<never>();
        expectType<ArrayOmitRequired<never>>().toBe<never>();
      });
    });

    describe('not omit hole', () => {
      it('should omit required elements from `T`', () => {
        expectType<
          ArrayOmitRequired<[string, string, string?, string?], false>
        >().toBe<[undefined?, undefined?, string?, string?]>();
      });

      it('should return `never`', () => {
        expectType<ArrayOmitRequired<any, false>>().toBe<never>();
        expectType<ArrayOmitRequired<never, false>>().toBe<never>();
      });
    });
  });

  describe('ArrayOmitOptional', () => {
    it('should omit optional elements from `T`', () => {
      expectType<ArrayOmitOptional<[string, string, string?, string?]>>().toBe<
        [string, string]
      >();
    });

    it('should return `never`', () => {
      expectType<ArrayOmitOptional<any>>().toBe<never>();
      expectType<ArrayOmitOptional<never>>().toBe<never>();
    });
  });

  describe('ArrayToObject', () => {
    it('should return object based on `T`', () => {
      expectType<ArrayToObject<[string, number]>>().toBe<{
        0: string;
        1: number;
      }>();
      expectType<ArrayToObject<string[]>>().toBe<{ [x: number]: string }>();
    });

    it('should return `never`', () => {
      expectType<ArrayToObject<any>>().toBe<never>();
      expectType<ArrayToObject<never>>().toBe<never>();
    });
  });

  describe('ArrayAssign', () => {
    it('should return array based on `Target` and `Source`', () => {
      expectType<ArrayAssign<[1, 2], [0, 1, 2]>>().toBe<[0, 1, 2]>();
      expectType<ArrayAssign<string[], number[]>>().toBe<(string | number)[]>();
      expectType<ArrayAssign<readonly [1, 2], [0, 1, 2]>>().toBe<
        readonly [1, 2]
      >();
    });
  });

  describe('ArrayOverwrite', () => {
    describe('shallow', () => {
      it('should return array based on `Target` and `Source`', () => {
        expectType<
          ArrayOverwrite<
            [string, [string, string]],
            [number, [number], number],
            'shallow'
          >
        >().toBe<[number, [number], number]>();
      });
    });

    describe('deep', () => {
      it('should return array based on `Target` and `Source`', () => {
        expectType<
          ArrayOverwrite<
            [string, [string, string]],
            [number, [number], number],
            'deep'
          >
        >().toBe<[number, [number, string], number]>();
      });
    });
  });

  describe('ArrayMerge', () => {
    describe('shallow', () => {
      it('should return array based on `Target` and `Source`', () => {
        expectType<
          ArrayMerge<
            [string, [string, string]],
            [number, [number], number],
            'shallow'
          >
        >().toBe<[string | number, [number] | [string, string], number]>();
      });
    });

    describe('deep', () => {
      it('should return array based on `Target` and `Source`', () => {
        expectType<
          ArrayMerge<
            [string, [string, string]],
            [number, [number], number],
            'deep'
          >
        >().toBe<[string | number, [string | number, string], number]>();
      });
    });
  });

  describe('ArrayUnionize', () => {
    describe('shallow', () => {
      it('should return array based on `Target` and `UnionType`', () => {
        expectType<
          ArrayUnionize<[string, [number, boolean]], number, 'shallow'>
        >().toBe<[string | number, number | [number, boolean]]>();
      });
    });

    describe('deep', () => {
      it('should return array based on `Target` and `UnionType`', () => {
        expectType<
          ArrayUnionize<[string, [number, boolean]], number, 'deep'>
        >().toBe<[string | number, [number, number | boolean]]>();
      });
    });
  });
});
