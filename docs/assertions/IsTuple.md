[typelab](../README.md) / [assertions](../assertions.md) / IsTuple

```ts
type IsTuple<T> = _IsTrue<IfTuple<T, true, false>>;
```

Checks if a given type `T` is a `Tuple` type.

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

`true` if `T` is a `Tuple` type, `false` otherwise.

## Example

```ts
type Valid = IsTuple<[string]>; // true
type Invalid = IsTuple<string[]>; // false
```
