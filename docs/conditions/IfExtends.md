[typelab](../README.md) / [conditions](../conditions.md) / IfExtends

```ts
type IfExtends<T1, T2, Then, Else> = T1 extends T2 ? Then : Else;
```

Resolves to `Then` if `T1` is assignable to `T2`, otherwise resolves to `Else`.

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

The type to return if `T1` is assignable to `T2`.

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

The type to return if `T1` is not assignable to `T2`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T1` is assignable to `T2`, `Else` otherwise.

## Example

```ts
type Yes = IfExtends<'', string, 'yes', 'no'>; // 'yes'
type No = IfExtends<string, '', 'yes', 'no'>; // 'no'
type YesOrNo = IfExtends<string | number, string, 'yes', 'no'>; // 'yes' | 'no'
```
