[typelab](../README.md) / [utils](../utils.md) / ArrayRequired

```ts
type ArrayRequired<T, Index, IncludeUndefined> = T extends ReadonlyArray<infer Element> ? _IfNotAnyOrNever<T, _IfNotAnyOrNever<Index, _ArrayRequired<T, Index, Element, IncludeUndefined>>> : never;
```

Extended TypeScript [\`Required\`](#) to handle `Array`.

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
<tr>
<td>

`IncludeUndefined` *extends* `boolean`

</td>
<td>

`false`

</td>
<td>

Include undefined type from `T[Index]`, defaults to `false`.

</td>
</tr>
</tbody>
</table>

## Returns

An `Array` type with the specified `K` set as required.

## Example

```ts
type Result1 = ArrayRequired<[string?, string?]>; // [string, string]
type Result2 = ArrayRequired<[string?, string?], 0>; // [string, string?]
type Result3 = ArrayRequired<[string?, string?], 0, true>; // [string | undefined, string?]
type Never1 = ArrayRequired<[string?, string?], any>; // never
type Never2 = ArrayRequired<any, 1>; // never
```
