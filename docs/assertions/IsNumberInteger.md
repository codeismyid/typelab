[typelab](../README.md) / [assertions](../assertions.md) / IsNumberInteger

```ts
type IsNumberInteger<T> = _IsTrue<IfNumberInteger<T, true, false>>;
```

Checks if a given type `T` is a integer number literal type.

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

`true` if `T` is a integer number literal type, `false` otherwise.

## Example

```ts
type Valid = IsNumberInteger<11>; // true
type Invalid = IsNumberInteger<11.1>; // false
```
