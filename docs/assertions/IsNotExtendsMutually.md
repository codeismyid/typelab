[typelab](../README.md) / [assertions](../assertions.md) / IsNotExtendsMutually

```ts
type IsNotExtendsMutually<T1, T2> = _IsTrue<IfNotExtendsMutually<T1, T2, true, false>>;
```

Type that checks if type `T1` **not** extends type `T2` or type `T2` **not** extends type `T1`.

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

`true` if either conditions are true, `false` otherwise.

## Example

```ts
type NotMutual = IsNotExtendsMutually<string, ''>; // true
type Mutual = IsNotExtendsMutually<string, string>; // false
```
