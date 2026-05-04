[typelab](../README.md) / [utils](../utils.md) / ObjectOmitOptional

```ts
type ObjectOmitOptional<T, Z> = IsObjectLiteral<T> extends true ? { [K in keyof T as IsRequiredProperty<T, K> extends true ? K : never]-?: _Lookup<Z, { shallow: T[K]; deep: ObjectOmitOptional<T[K]> }> } : T;
```

Get the required properties from `T` type.

This type will lookup all nested objects (if `Z` is `'deep'`).

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

`T`

</td>
<td>

&hyphen;

</td>
<td>

The `object` type where required properties will be identified.

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

A type with only the required properties from `T`, optionally nested based on `Z`.

## Example

```ts
type Obj = { a: string | undefined; b?: string; c: { d: string, e?: string } };

// { a: string | undefined; c: { d: string; e?: string } }
type Shallow = ObjectOmitOptional<Obj, 'shallow'>;

// { a: string | undefined; c: { d: string; }}
type Deep = ObjectOmitOptional<Obj, 'deep'>;
```
