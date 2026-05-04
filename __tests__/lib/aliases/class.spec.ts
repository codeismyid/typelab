import { describe, it } from 'bun:test';
import type { Class } from 'lib/aliases/class';
import { expectType } from 'types-testing';

describe('lib > aliases > class', () => {
  describe('Class', () => {
    describe('with type argument', () => {
      it('should be the same as object with `Params` as constructor parameter type and `Instance` as prototype type', () => {
        expectType<
          Class<[id: number, name: string], { id: number; name: string }>
        >().toBe<{
          new (
            ...param: [id: number, name: string]
          ): { id: number; name: string };
          prototype: { id: number; name: string };
        }>();
      });
    });

    describe('without type argument', () => {
      it('should be the same as object with `any[]` as constructor parameter type and `any` as prototype type', () => {
        expectType<Class>().toBe<{
          new (...param: any[]): any;
          prototype: any;
        }>();
      });
    });
  });
});
