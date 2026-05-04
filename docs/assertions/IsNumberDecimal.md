[typelab](../README.md) / [assertions](../assertions.md) / IsNumberDecimal

```ts
type IsNumberDecimal<T> = _IsTrue<IfNumberDecimal<T, true, false>>;
```

Checks if a given type `T` is a decimal number literal type.

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

`true` if `T` is a decimal number literal type, `false` otherwise.

## Example

```ts
type Valid = IsNumberDecimal<11.1>; // true
type Invalid = IsNumberDecimal<11>; // false
```
