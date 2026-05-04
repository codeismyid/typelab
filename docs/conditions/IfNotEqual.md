[typelab](../README.md) / [conditions](../conditions.md) / IfNotEqual

```ts
type IfNotEqual<T1, T2, Then, Else> = IsAny<T1> extends true ? IsAny<T2> extends true ? Else : Then : IsAny<T2> extends true ? IsAny<T1> extends true ? Else : Then : [T1, T2] extends [T2, T1] ? Else : Then;
```

Resolves to `Then` if `T1` and `T2` are not equal, otherwise resolves to `Else`.

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

The type to return if `T1` and `T2` are not equal.

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

The type to return if `T1` and `T2` are equal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T1` and `T2` are equal, `Else` otherwise.

## Example

```ts
type Yes = IfNotEqual<string, number, 'yes', 'no'>; // 'yes'
type No = IfNotEqual<string, string, 'yes', 'no'>; // 'no'
```
