[typelab](../README.md) / [utils](../utils.md) / ArrayRequiredElements

```ts
type ArrayRequiredElements<T> = T extends ReadonlyArray<infer Elements> ? _IfNotAnyOrNever<T, _ArrayRequiredElements<T, Elements>> : never;
```

Get the required elements from `T` type.

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

The `Array` type to extract required elements from.

</td>
</tr>
</tbody>
</table>

## Returns

The elements of `T` that are required.

## Example

```ts
// 0 | 1
type Result1 = ArrayRequiredElements<[0, 1, 2?]>;

// string | undefined
type Result2 = ArrayRequiredElements<(string | undefined)[]>;

// never
type Never1 = ArrayRequiredElements<[0?, 1?, 2?]>;

// never
type Never2 = ArrayRequiredElements<any>;
```
