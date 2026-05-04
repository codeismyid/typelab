[typelab](../README.md) / [assertions](../assertions.md) / IsUndefined

```ts
type IsUndefined<T> = _IsTrue<IfUndefined<T, true, false>>;
```

Checks if a given type `T` is `undefined`.

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

`true` if `T` is `undefined`, `false` otherwise.

## Example

```ts
type Valid = IsUndefined<undefined>; // true
type Invalid = IsUndefined<string>; // false
```
