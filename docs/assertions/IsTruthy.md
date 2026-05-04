[typelab](../README.md) / [assertions](../assertions.md) / IsTruthy

```ts
type IsTruthy<T> = _IsTrue<IfTruthy<T, true, false>>;
```

Checks if a given type `T` is not [\`Falsy\`](../aliases/Falsy.md) or `never`.

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

`true` if `T` is not [\`Falsy\`](../aliases/Falsy.md) or never, `false` otherwise.

## Example

```ts
type Valid = IsTruthy<0 | 1>; // true
type Invalid = IsTruthy<0 | 1>; // false
```
