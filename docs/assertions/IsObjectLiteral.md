[typelab](../README.md) / [assertions](../assertions.md) / IsObjectLiteral

```ts
type IsObjectLiteral<T> = _IsTrue<IfObjectLiteral<T, true, false>>;
```

Checks if a given type `T` is an `ObjectLiteral` type.

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

`true` if `T` is an `ObjectLiteral` type, `false` otherwise.

## Example

```ts
type Valid = IsObjectLiteral<{ a: number; b: string }>; // true
type Invalid = IsObjectLiteral<string[]>; // false
```
