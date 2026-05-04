[typelab](../README.md) / [assertions](../assertions.md) / IsArrayReadonly

```ts
type IsArrayReadonly<T> = _IsTrue<IfArrayReadonly<T, true, false>>;
```

Checks if a given type `T` is readonly `Array` type.

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

`true` if `T` is readonly `Array` type, `false` otherwise.

## Example

```ts
type Valid = IsArrayReadonly<readonly string[]>; // true
type Invalid = IsArrayReadonly<string[]>; // false
```
