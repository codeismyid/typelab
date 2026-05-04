[typelab](../README.md) / [assertions](../assertions.md) / IsAny

```ts
type IsAny<T> = IfAny<T, true, false>;
```

Checks if a given type `T` is an `any` type.

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

`true` if `T` is an `any` type, `false` otherwise.

## Example

```ts
type Valid = IsAny<any>; // true
type Invalid = IsAny<string>; // false
```
