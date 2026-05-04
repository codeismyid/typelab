[typelab](../README.md) / [utils](../utils.md) / ObjectOmitRequired

```ts
type ObjectOmitRequired<T, Z> = IsObjectLiteral<T> extends true ? { [K in keyof T as IsOptionalProperty<T, K> extends true ? K : never]?: _Lookup<Z, { shallow: T[K]; deep: ObjectOmitRequired<ExcludeUndefined<T[K]>> }> } : T;
```

Get the optional properties from `T` type.

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

The `object` type where optional properties will be identified.

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

A type with only the optional properties from `T`, optionally nested based on `Z`.

## Example

```ts
type Obj = { a: string | undefined; b?: string; c?: { d: string; e?: string } };

// { b?: string; c?: { d: string; e?: string; }; }
type Shallow = ObjectOmitRequired<Obj, 'shallow'>;

// { b?: string; c?: { e?: string; }; }
type Deep = ObjectOmitRequired<Obj, 'deep'>;
```
