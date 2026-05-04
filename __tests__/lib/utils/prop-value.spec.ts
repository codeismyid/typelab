import { describe, it } from 'bun:test';
import type { PropValue } from 'lib/utils/prop-value';
import { expectType } from 'types-testing';

describe('lib > utils > prop-value', () => {
  describe('PropValue', () => {
    type User = { name: string };

    describe('default BailType', () => {
      it('should return type of `T[K]`', () => {
        expectType<PropValue<User, 'name'>>().toBe<string>();
      });

      it('should return `never`', () => {
        expectType<PropValue<User, 'email'>>().toBe<never>();
      });
    });

    describe('custom BailType', () => {
      it('should return type of `T[K]`', () => {
        expectType<PropValue<User, 'name'>>().toBe<string>();
      });

      it('should return custom `BailType`', () => {
        expectType<PropValue<User, 'email', unknown>>().toBe<unknown>();
      });
    });
  });
});
