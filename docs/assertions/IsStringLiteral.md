[typelab](../README.md) / [assertions](../assertions.md) / IsStringLiteral

```ts
type IsStringLiteral<T> = _IsTrue<IfStringLiteral<T, true, false>>;
```

Checks if a given type `T` is a `String Literal` type.

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

`true` if `T` is a `String Literal` type, `false` otherwise.

## Example

```ts
type Valid = IsStringLiteral<'str'>; // true
type Invalid = IsStringLiteral<string>; // false
```
