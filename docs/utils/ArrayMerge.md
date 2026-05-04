[typelab](../README.md) / [utils](../utils.md) / ArrayMerge

```ts
type ArrayMerge<Target, Source, Z> = IsArray<Target | Source> extends true ? _ArrayMerge<Target, Source, Z> : never;
```

Merges elements of `Target` with elements of `Source`.

This type will merge all nested `Array` types (if `Z` is `'deep'`).

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

The `Array` to be overwritten.

</td>
</tr>
<tr>
<td>

`Source` *extends* [`ReadonlyArray`](../aliases/ReadonlyArray.md)

</td>
<td>

\[\]

</td>
<td>

The `Array` to be assigned to the `Target`.

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

A new `Array` type that merges `Target` elements with `Source` elements.

## Example

```ts
type Arr1 = [string, [string, string]];
type Arr2 = [number, [number], number];

// [string | number, [number] | [string, string], number]
type Shallow = ArrayMerge<Arr1, Arr2, 'shallow'>;

// [string | number, [string | number, string], number]
type Deep = ArrayMerge<Arr1, Arr2, 'deep'>;
```
