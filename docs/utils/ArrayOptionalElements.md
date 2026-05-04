[typelab](../README.md) / [utils](../utils.md) / ArrayOptionalElements

```ts
type ArrayOptionalElements<T> = T extends ReadonlyArray<infer Elements> ? _IfNotAnyOrNever<T, _ArrayOptionalElements<T, Elements>> : never;
```

Get the optional elements from `T` type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The `Array` type to extract optional elements from.

</td>
</tr>
</tbody>
</table>

## Returns

The elements of `T` that are optional.

## Example

```ts
// 1 | 2 | undefined
type Result1 = ArrayOptionalElements<[0, 1?, 2?]>;

// string | undefined
type Result2 = ArrayOptionalElements<(string | undefined)[]>;

// never
type Never1 = ArrayOptionalElements<[0, 1, 2]>;

// never
type Never2 = ArrayOptionalElements<any>;
```
