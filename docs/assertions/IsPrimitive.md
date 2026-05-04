[typelab](../README.md) / [assertions](../assertions.md) / IsPrimitive

```ts
type IsPrimitive<T> = _IsTrue<IfPrimitive<T, true, false>>;
```

Checks if a given type `T` is a `Primitive` type.

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

`true` if `T` is a `Primitive` type, `false` otherwise.

## Example

```ts
type Valid = IsPrimitive<string>; // true
type Invalid = IsPrimitive<object>; // false
```
