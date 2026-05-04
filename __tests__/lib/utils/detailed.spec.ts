import { describe, it } from 'bun:test';
import type { Detailed } from 'lib/utils/detailed';
import { expectType } from 'types-testing';

describe('lib > utils > detailed', () => {
  describe('Detailed', () => {
    it('should return the same as `T`', () => {
      type ComplexObj = Required<{ b?: string } & { c?: string }> & {
        d: string;
      };
      type Obj = { a: string; nested: ComplexObj };
      type Detail = Detailed<Obj>;
      expectType<Detail>().toBe<Obj>();
    });
  });
});
