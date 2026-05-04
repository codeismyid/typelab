[typelab](../README.md) / [assertions](../assertions.md) / IsArrayWritable

```ts
type IsArrayWritable<T> = _IsTrue<IfArrayWritable<T, true, false>>;
```

Checks if a given type `T` is not readonly `Array` type.

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

`true` if `T` is not readonly `Array` type, `false` otherwise.

## Example

```ts
type Valid = IsArrayWritable<string[]>; // true
type Invalid = IsArrayWritable<readonly string[]>; // false
```
