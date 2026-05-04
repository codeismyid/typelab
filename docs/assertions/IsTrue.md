[typelab](../README.md) / [assertions](../assertions.md) / IsTrue

```ts
type IsTrue<T> = _IsTrue<IfTrue<T, true, false>>;
```

Checks if a given type `T` is the literal `true`.

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

`true` if `T` is the literal `true`, `false` otherwise.

## Example

```ts
type Valid = IsTrue<true>;    // true
type Invalid = IsTrue<boolean>; // false
```
