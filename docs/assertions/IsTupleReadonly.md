[typelab](../README.md) / [assertions](../assertions.md) / IsTupleReadonly

```ts
type IsTupleReadonly<T> = _IsTrue<IfTupleReadonly<T, true, false>>;
```

Checks if a given type `T` is readonly `Tuple` type.

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

`true` if `T` is readonly `Tuple` type, `false` otherwise.

## Example

```ts
type Valid = IsTupleReadonly<readonly [string]>; // true
type Invalid1 = IsTupleReadonly<[string]>; // false
type Invalid2 = IsTupleReadonly<readonly string[]>; // false
```
