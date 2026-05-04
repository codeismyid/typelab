[typelab](../README.md) / [assertions](../assertions.md) / IsUnion

```ts
type IsUnion<T> = IfUnion<T, true, false>;
```

Checks if a given type `T` is union type.

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

`true` if `T` is union type, `false` otherwise.

## Example

```ts
type Valid = IsUnion<string | number>; // true
type Invalid = IsUnion<string>; // false
```
