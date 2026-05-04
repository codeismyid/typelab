[typelab](../README.md) / [assertions](../assertions.md) / IsArray

```ts
type IsArray<T> = _IsTrue<IfArray<T, true, false>>;
```

Checks if a given type `T` is an `Array` type.

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

`true` if `T` is an `Array` type, `false` otherwise.

## Example

```ts
type Valid = IsArray<string[]>; // true
type Invalid = IsArray<string>; // false
```
