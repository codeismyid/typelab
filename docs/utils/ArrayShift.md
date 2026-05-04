[typelab](../README.md) / [utils](../utils.md) / ArrayShift

```ts
type ArrayShift<T> = T extends WritableArray ? _IfNotAnyOrNever<T, T extends [Any?, ...(infer U)] ? U : T> : never;
```

Removes the first element from an `Writable Array` type.
If the `Array` is a `Tuple`, the result will be a new `Tuple` without the first element.
If the `Array` is not a `Tuple`, the result will be the original `Array` type.

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

The `Array` type to shift from.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Array` type with the first element removed.

## Example

```ts
type Shifted = ArrayShift<[string, number]>; // [number]
type Same = ArrayShift<(string | number)[]>; // (string | number)[]
type Never1 = ArrayShift<readonly [string, number]>; // never
type Never2 = ArrayShift<any>; // never
```
