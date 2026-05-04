[typelab](../README.md) / [utils](../utils.md) / ArraySkip

```ts
type ArraySkip<T, SkipLength> = T extends ReadonlyArray ? IsNumber<SkipLength> extends true ? _IfNotAnyOrNever<T, SkipLength extends number ? `${SkipLength}` extends `-${infer SkipLength extends number}` ? _ArraySkipNegative<T, SkipLength> : _ArraySkipPositive<T, SkipLength> : never> : never : never;
```

Skips the first `SkipLength` elements from an array (or tuple).

If `SkipLength` is negative, the elements are skipped starting from the end of the array/tuple.

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

The array or tuple type to skip elements from.

</td>
</tr>
<tr>
<td>

`SkipLength`

</td>
<td>

`0`

</td>
<td>

The number of elements to skip from the start or end, defaults to `0`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type Result1 = ArraySkip<[1, 2, 3, 4], 2>; // [3, 4]
type Result2 = ArraySkip<[1, 2, 3, 4], -2>; // [1, 2]
type Result3 = ArraySkip<[1, 2, 3, 4], 5>; // []
type Result4 = ArraySkip<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Never1 = ArraySkip<[1, 2, 3, 4], any>; // never
type Never2 = ArraySkip<any, 1>; // never
```
