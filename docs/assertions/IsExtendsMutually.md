[typelab](../README.md) / [assertions](../assertions.md) / IsExtendsMutually

```ts
type IsExtendsMutually<T1, T2> = _IsTrue<IfExtendsMutually<T1, T2, true, false>>;
```

Type that checks if type `T1` extends type `T2` and type `T2` extends type `T1`.

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

`T1`

</td>
<td>

The first type to compare.

</td>
</tr>
<tr>
<td>

`T2`

</td>
<td>

The second type to compare.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if both conditions are true, `false` otherwise.

## Example

```ts
type Mutual = IsExtendsMutually<string, any>; // true
type NotMutual = IsExtendsMutually<string, ''>; // false
```
