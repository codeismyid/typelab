[typelab](../README.md) / [utils](../utils.md) / ArrayLength

```ts
type ArrayLength<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, T["length"]> : never;
```

Extracts the `length` of an `Array` type.

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

The target `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

The length of type `T`.

## Example

```ts
type Length = ArrayLength<[1, 2, 3]>; // 3
type Length2 = ArrayLength<string[]>; // number
type Never = ArrayLength<any>; // never
```
