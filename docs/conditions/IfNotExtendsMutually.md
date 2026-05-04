[typelab](../README.md) / [conditions](../conditions.md) / IfNotExtendsMutually

```ts
type IfNotExtendsMutually<T1, T2, Then, Else> = T1 extends T2 ? T2 extends T1 ? Else : Then : Then;
```

Resolves to `Then` if `T1` is not assignable to `T2` or `T2` is not assignable to `T1`, otherwise resolves to `Else`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T1`

</td>
<td>

&hyphen;

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

&hyphen;

</td>
<td>

The second type to compare.

</td>
</tr>
<tr>
<td>

`Then`

</td>
<td>

&hyphen;

</td>
<td>

The type to return if `T1` and `T2` are not assignable to each other.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

`never`

</td>
<td>

The type to return if `T1` and `T2` are assignable to each other. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T1` and `T2` are not assignable to each other, `Else` otherwise.

## Example

```ts
type Yes = IfNotExtendsMutually<'', string, 'yes', 'no'>; // 'yes'
type No = IfNotExtendsMutually<string, string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNotExtendsMutually<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```
