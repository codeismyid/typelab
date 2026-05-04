[typelab](../README.md) / [utils](../utils.md) / ArrayUnshift

```ts
type ArrayUnshift<T, U> = T extends WritableArray ? _IfNotAnyOrNever<T, IfNever<U, T, [U, ...T]>> : never;
```

Adds a new element to the beginning of an `Writable Array` type.

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

The `Array` type to unshift into.

</td>
</tr>
<tr>
<td>

`U`

</td>
<td>

The element type to add to the front of the `Array`.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Array` type with the element `U` added to the front.

## Example

```ts
// [boolean, string, number]
type Unshifted = ArrayUnshift<[string, number], boolean>;

// [string, number]
type Same = ArrayUnshift<[string, number], never>;

// never
type Never1 = ArrayPush<readonly [string, number], string>;

// never
type Never2 = ArrayPush<any, string>;
```
