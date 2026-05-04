[typelab](../README.md) / [assertions](../assertions.md) / IsBoolean

```ts
type IsBoolean<T> = _IsTrue<IfBoolean<T, true, false>>;
```

Checks if a given type `T` is a `boolean`.

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

`true` if `T` is a `boolean`, `false` otherwise.

## Example

```ts
type Valid = IsBoolean<boolean>; // true
type Invalid = IsBoolean<string>; // false
```
