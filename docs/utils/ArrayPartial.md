[typelab](../README.md) / [utils](../utils.md) / ArrayPartial

```ts
type ArrayPartial<T, Index> = T extends ReadonlyArray<infer Element> ? _IfNotAnyOrNever<T, _IfNotAnyOrNever<Index, _ArrayPartial<T, Index, Element>>> : never;
```

Extended TypeScript [\`Partial\`](#) to handle `Array`.

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

The original `Array` type.

</td>
</tr>
<tr>
<td>

`Index`

</td>
<td>

[`ArrayIndexes`](ArrayIndexes.md)\<`T`, `true`\>

</td>
<td>

The index of `T` that should be required.

</td>
</tr>
</tbody>
</table>

## Returns

An `Array` type with the specified `Index` set as required.

## Example

```ts
type Result1 = ArrayPartial<[string, string]>; // [string?, string?]
type Result2 = ArrayPartial<[string, string], 1>; // [string, string?]
type Never1 = ArrayPartial<[string, string], any>; // never
type Never2 = ArrayPartial<any, 1>; // never
```
