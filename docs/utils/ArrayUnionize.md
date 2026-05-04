[typelab](../README.md) / [utils](../utils.md) / ArrayUnionize

```ts
type ArrayUnionize<Target, UnionType, Z> = IsArray<Target> extends true ? _ArrayUnionize<Target, UnionType, Z> : never;
```

Unions the elements of an `Array` with a specified `UnionType`, creating a new `Array` where each element
is either the original element or the `UnionType`.

This type will unionize all nested `Array` types (if `Z` is `'deep'`).

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

`Target` *extends* [`ReadonlyArray`](../aliases/ReadonlyArray.md)

</td>
<td>

&hyphen;

</td>
<td>

The `Array` to be unionized.

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

The type to union with each element of the `Target`.

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
// [string | number, number | [number, boolean]]
type Shallow = ArrayUnionize<[string, [number, boolean]], number, 'shallow'>;

// [string | number, [number, number | boolean]]
type Deep = ArrayUnionize<[string, [number, boolean]], number, 'deep'>;
```
