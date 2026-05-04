[typelab](../README.md) / [utils](../utils.md) / ArrayPush

```ts
type ArrayPush<T, U> = T extends WritableArray ? _IfNotAnyOrNever<T, IfNever<U, T, [...T, U]>> : never;
```

Adds a new element to the end of a `Writable Array` type.

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

The `Array` type to push into.

</td>
</tr>
<tr>
<td>

`U`

</td>
<td>

The element type to add to the `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Array` type with the element `U` added to the end.

## Example

```ts
type Pushed = ArrayPush<[string, number], boolean>; // [string, number, boolean]
type Same = ArrayPush<[string, number], never>; // [string, number]
type Never1 = ArrayPush<readonly [string, number], string> // never
type Never2 = ArrayPush<any, string> // never
```
