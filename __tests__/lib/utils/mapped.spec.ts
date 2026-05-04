import { describe, it } from 'bun:test';
import type { Mapped } from 'lib/utils/mapped';
import { expectType } from 'types-testing';

describe('lib > utils > mapped', () => {
  describe('Mapped', () => {
    it('should return the same as `T`', () => {
      type Obj = Required<{ b?: string } & { c?: string }> & { d: string };
      expectType<Mapped<Obj>>().toBe<Obj>();
    });
  });
});
