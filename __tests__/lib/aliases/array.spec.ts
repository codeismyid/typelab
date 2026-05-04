import { describe, it } from 'bun:test';
import type {
  Arr,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: intended
  Array,
  List,
  ReadonlyArr,
  ReadonlyArray,
  ReadonlyList,
  ReadonlyTuple,
  Tuple,
  WritableArr,
  WritableArray,
  WritableList,
  WritableTuple
} from 'lib/aliases/array';
import { expectType } from 'types-testing';

describe('lib > aliases > array', () => {
  describe('Array', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<Array<string>>().toBe<string[]>();
        expectType<Array<string | number>>().toBe<(string | number)[]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<Array>().toBe<any[]>();
      });
    });
  });

  describe('Arr', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<Arr<string>>().toBe<string[]>();
        expectType<Arr<string | number>>().toBe<(string | number)[]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<Arr>().toBe<any[]>();
      });
    });
  });

  describe('List', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<List<string>>().toBe<string[]>();
        expectType<List<string | number>>().toBe<(string | number)[]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<List>().toBe<any[]>();
      });
    });
  });

  describe('WritableArray', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<WritableArray<string>>().toBe<string[]>();
        expectType<WritableArray<string | number>>().toBe<
          (string | number)[]
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<WritableArray>().toBe<any[]>();
      });
    });
  });

  describe('WritableArr', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<WritableArr<string>>().toBe<string[]>();
        expectType<WritableArr<string | number>>().toBe<(string | number)[]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<WritableArr>().toBe<any[]>();
      });
    });
  });

  describe('WritableList', () => {
    describe('with type argument', () => {
      it('should be the same as `T[]` type', () => {
        expectType<WritableList<string>>().toBe<string[]>();
        expectType<WritableList<string | number>>().toBe<(string | number)[]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `any[]` type', () => {
        expectType<WritableList>().toBe<any[]>();
      });
    });
  });

  describe('ReadonlyArray', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly T[]` type', () => {
        expectType<ReadonlyArray<string>>().toBe<readonly string[]>();
        expectType<ReadonlyArray<string | number>>().toBe<
          readonly (string | number)[]
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<ReadonlyArray>().toBe<readonly any[]>();
      });
    });
  });

  describe('ReadonlyArr', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly T[]` type', () => {
        expectType<ReadonlyArr<string>>().toBe<readonly string[]>();
        expectType<ReadonlyArr<string | number>>().toBe<
          readonly (string | number)[]
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<ReadonlyArr>().toBe<readonly any[]>();
      });
    });
  });

  describe('ReadonlyList', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly T[]` type', () => {
        expectType<ReadonlyList<string>>().toBe<readonly string[]>();
        expectType<ReadonlyList<string | number>>().toBe<
          readonly (string | number)[]
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<ReadonlyList>().toBe<readonly any[]>();
      });
    });
  });

  describe('Tuple', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly [...T]` type', () => {
        expectType<Tuple<[string, number]>>().toBe<[string, number]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<Tuple>().toBe<any[]>();
      });
    });
  });

  describe('WritableTuple', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly [...T]` type', () => {
        expectType<WritableTuple<[string, number]>>().toBe<[string, number]>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<WritableTuple>().toBe<any[]>();
      });
    });
  });

  describe('ReadonlyTuple', () => {
    describe('with type argument', () => {
      it('should be the same as `readonly [...T]` type', () => {
        expectType<ReadonlyTuple<[string, number]>>().toBe<
          readonly [string, number]
        >();
      });
    });

    describe('without type argument', () => {
      it('should be the same as `readonly any[]` type', () => {
        expectType<ReadonlyTuple>().toBe<readonly any[]>();
      });
    });
  });
});
