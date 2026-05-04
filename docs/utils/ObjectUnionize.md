[typelab](../README.md) / [utils](../utils.md) / ObjectUnionize

```ts
type ObjectUnionize<Target, UnionType, Z> = IsObjectLiteral<Target> extends true ? { [K in keyof Target]: _Lookup<Z, { shallow: Target[K] | UnionType; deep: _ObjectUnionizeDeep<Target[K], UnionType> }> } : never;
```

Unions the properties of an `object` with a specified `UnionType`, creating a new `object` where each property
is either the original value or the `UnionType`.

This type will unionize all nested `object` types (if `Z` is `'deep'`).

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

The `object` to be unionized.

</td>
</tr>
<tr>
<td>

`UnionType`

</td>
<td>

&hyphen;

</td>
<td>

The type to union with each property of the `Target`.

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

## Example

```ts
// { a: string | number; b: number | { a: string; }; }
type Shallow = ObjectUnionize<{ a: string; b: { a: string } }, number, 'shallow'>;

// { a: string | number; b: { a: string | number; }; }
type Deep = ObjectUnionize<{ a: string; b: { a: string } }, number, 'deep'>;
```
