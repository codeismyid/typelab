[typelab](../README.md) / [utils](../utils.md) / ObjectOverwrite

```ts
type ObjectOverwrite<Target, Source, Z> = IsNever<Source> extends true ? Target : IsNonNullish<Source> extends true ? Target : IsEqual<Source, Target> extends true ? Source : _ObjectOverwrite<Target, Source, Z>;
```

Overwrite properties of `Target` with properties of `Source`.

This type will overwrite all nested `object` types (if `Z` is `'deep'`).

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

The `object` to be overwritten.

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

The `object` to be assigned to the target.

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

A new `object` type that overwrites and combines the properties of both `Target` and `Source`.

## Example

```ts
type Obj1 = { a: string; b: string; c: { a: string } };
type Obj2 = { b: number; c: { b: number }; d: number };

// { a: string; b: number; c: { b: number; }; d: number }
type Shallow = ObjectOverwrite<Obj1, Obj2, 'shallow'>;

// { a: string; b: number; c: { a: string; b: number; }; d: number }
type Deep = ObjectOverwrite<Obj1, Obj2, 'deep'>;
```
