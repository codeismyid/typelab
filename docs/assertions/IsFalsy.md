[typelab](../README.md) / [assertions](../assertions.md) / IsFalsy

```ts
type IsFalsy<T> = _IsTrue<IfFalsy<T, true, false>>;
```

Checks if a given type `T` is [\`Falsy\`](../aliases/Falsy.md).

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

The type to be checked.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T` is [\`Falsy\`](../aliases/Falsy.md), `false` otherwise.

## Example

```ts
type Valid = IsFalsy<false | '' | 0 | 0n | null | undefined | void>; // true
type Invalid = IsFalsy<0 | 1>; // false
```
