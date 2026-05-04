[typelab](../README.md) / [utils](../utils.md) / ObjectMerge

```ts
type ObjectMerge<Target, Source, Z> = IsNever<Source> extends true ? Target : IsNonNullish<Source> extends true ? Target : IsObjectEmpty<Source> extends true ? Target : IsEqual<Source, Target> extends true ? Source : [IsObjectLiteral<Target>, IsObjectLiteral<Source>] extends [true, true] ? ObjectPartial<{ [K in keyof Target | keyof Source]: K extends keyof Target & keyof Source ? _Lookup<Z, { shallow: (...) | (...); deep: ObjectMerge<(...), (...)> }> : K extends keyof Target ? Target[K] : K extends keyof (...) ? (...)[(...)] : never }, ObjectOptionalKeys<Source | Target>> : Target | Source;
```

Merges properties of `Target` and `Source`.

This type will merge all nested `object` types (if `Z` is `'deep'`).

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Target`

</td>
<td>

&hyphen;

</td>
<td>

The first `object` type.

</td>
</tr>
<tr>
<td>

`Source`

</td>
<td>

`never`

</td>
<td>

The second `object` type to merge into the first.

</td>
</tr>
<tr>
<td>

`Z` *extends* `_LookupType`

</td>
<td>

`"shallow"`

</td>
<td>

Defines the lookup type, which can be `'deep'` or `'shallow'`, defaults to `'shallow'`.

</td>
</tr>
</tbody>
</table>

## Returns

A new `object` type that merges the properties of both `Target` and `Source`.

## Example

```ts
type Obj1 = { a: string; b: string; c: { a: string; } };
type Obj2 = { b: number; c: { a: number; b: number }; d: number };

// { a: string; b: string | number; c: { a: string; } | { a: number; b: number }; d: number }
type Shallow = ObjectMerge<Obj1, Obj2, 'shallow'>;

// { a: string; b: string | number; c: { a: string | number; b: number; }; d: number }
type Deep = ObjectMerge<Obj1, Obj2, 'deep'>;
```
