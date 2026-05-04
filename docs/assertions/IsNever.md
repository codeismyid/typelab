[typelab](../README.md) / [assertions](../assertions.md) / IsNever

```ts
type IsNever<T> = IfNever<T, true, false>;
```

Checks if a given type `T` is a `never` type.

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

`true` if `T` is a `never` type, `false` otherwise.

## Example

```ts
type Valid = IsNever<never>; // true
type Invalid = IsNever<string>; // false
```
