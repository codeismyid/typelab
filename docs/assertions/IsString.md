[typelab](../README.md) / [assertions](../assertions.md) / IsString

```ts
type IsString<T> = _IsTrue<IfString<T, true, false>>;
```

Checks if a given type `T` is a `string`.

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

`true` if `T` is a `string`, `false` otherwise.

## Example

```ts
type Valid = IsString<string>; // true
type Invalid = IsString<number>; // false
```
