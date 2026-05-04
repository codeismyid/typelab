[typelab](../README.md) / [assertions](../assertions.md) / IsNullable

```ts
type IsNullable<T> = IsAny<T> extends true ? false : IsNever<T> extends true ? false : IsUnknown<T> extends true ? false : [null] extends [T] ? true : false;
```

Checks if a given type `T` has `null` type.

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

`true` if `T` has `null` type, `false` otherwise.

## Example

```ts
type Valid = IsNullable<string | null>; // true
type Invalid = IsNullable<string>; // false
```
