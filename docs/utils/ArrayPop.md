[typelab](../README.md) / [utils](../utils.md) / ArrayPop

```ts
type ArrayPop<T> = T extends WritableArray ? _IfNotAnyOrNever<T, T extends [...(infer U), Any?] ? U : T> : never;
```

Removes the last element from an `Writable Array` type.
If the `Array` is a `Tuple`, the result will be a new `Tuple` without the last element.
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

The `Array` type to pop from.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Array` type with the last element removed.

## Example

```ts
type Popped = ArrayPop<[string, number]>; // [string]
type Same = ArrayPop<(string | number)[]>; // (string | number)[]
type Never1 = ArrayPop<readonly [string, number]>; // never
type Never2 = ArrayPop<any>; // never
```
