[typelab](../README.md) / [assertions](../assertions.md) / IsNumber

```ts
type IsNumber<T> = _IsTrue<IfNumber<T, true, false>>;
```

Checks if a given type `T` is a `number` type.

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

`true` if `T` is a `number`, `false` otherwise.

## Example

```ts
type Valid = IsNumber<number>; // true
type Invalid = IsNumber<string>; // false
```
