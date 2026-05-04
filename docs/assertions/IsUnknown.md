[typelab](../README.md) / [assertions](../assertions.md) / IsUnknown

```ts
type IsUnknown<T> = IsAny<T> extends true ? false : [unknown] extends [T] ? true : false;
```

Checks if a given type `T` is an `unknown` type.

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

`true` if `T` is an `unknown` type, `false` otherwise.

## Example

```ts
type Valid = IsUnknown<unknown>; // true
type Invalid = IsUnknown<string>; // false
```
