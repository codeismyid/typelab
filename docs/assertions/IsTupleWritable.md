[typelab](../README.md) / [assertions](../assertions.md) / IsTupleWritable

```ts
type IsTupleWritable<T> = _IsTrue<IfTupleWritable<T, true, false>>;
```

Checks if a given type `T` is not readonly `Tuple` type.

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

`true` if `T` is not readonly `Tuple` type, `false` otherwise.

## Example

```ts
type Valid = IsTupleWritable<[string]>; // true
type Invalid1 = IsTupleWritable<readonly [string]>; // false
type Invalid2 = IsTupleWritable<string[]>; // false
```
