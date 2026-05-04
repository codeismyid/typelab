[typelab](../README.md) / [assertions](../assertions.md) / IsObject

```ts
type IsObject<T> = _IsTrue<IfObject<T, true, false>>;
```

Checks if a given type `T` is an `object` type.

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

`true` if `T` is an `object` type, `false` otherwise.

## Example

```ts
type Valid = IsObject<[]>; // true
type Invalid = IsObject<string>; // false
```
