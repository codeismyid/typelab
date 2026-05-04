[typelab](../README.md) / [utils](../utils.md) / ArrayTake

```ts
type ArrayTake<T, TakeLength> = T extends ReadonlyArray ? IsNumber<TakeLength> extends true ? _IfNotAnyOrNever<T, TakeLength extends number ? `${TakeLength}` extends `-${infer TakeLength extends number}` ? _ArrayTakeNegative<T, TakeLength> : _ArrayTakePositive<T, TakeLength> : never> : never : never;
```

Takes the first `TakeLength` elements from an array (or tuple).

If `TakeLength` is negative, the elements are taken starting from the end of the array/tuple.

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

The array or tuple type to take elements from.

</td>
</tr>
<tr>
<td>

`TakeLength`

</td>
<td>

[`PropValue`](PropValue.md)\<`T`, `"length"`\>

</td>
<td>

The number of elements to take from the start or end, defaults to `T['length']`

</td>
</tr>
</tbody>
</table>

## Example

```ts
type Result1 = ArrayTake<[1, 2, 3, 4], 2>; // [1, 2]
type Result2 = ArrayTake<[1, 2, 3, 4], -2>; // [3, 4]
type Result3 = ArrayTake<[1, 2, 3, 4], 5>; // [1, 2, 3, 4]
type Result4 = ArrayTake<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Never1 = ArrayTake<[1, 2, 3, 4], any>; // never
type Never2 = ArrayTake<[1, 2, 3, 4], never>; // never
type Never3 = ArrayTake<any, 1>; // never
```
