[typelab](../README.md) / [assertions](../assertions.md) / IsNullish

```ts
type IsNullish<T> = IsAny<T> extends true ? false : IsNever<T> extends true ? false : IsUnknown<T> extends true ? false : [undefined] extends [T] ? true : [null] extends [T] ? true : false;
```

Checks if a given type `T` has `null` | `undefined` type.

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

`true` if `T` has `null` | `undefined` type, `false` otherwise.

## Example

```ts
type Valid1 = IsNullish<string | null>; // true
type Valid2 = IsNullish<string | undefined>; // true
type Invalid = IsNullish<string>; // false
```
