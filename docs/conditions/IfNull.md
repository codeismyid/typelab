[typelab](../README.md) / [conditions](../conditions.md) / IfNull

```ts
type IfNull<T, Then, Else> = _IfNotAnyOrNever<T, T extends null ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `null`, otherwise resolves to `Else`.

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

`T`

</td>
<td>

&hyphen;

</td>
<td>

The type to be checked.

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

The type to return if `T` is `null`.

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

The type to return if `T` is not `null`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `null`, `Else` otherwise.

## Example

```ts
type Yes = IfNull<null, 'yes', 'no'>; // 'yes'
type No = IfNull<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNull<string | null, 'yes', 'no'>; // 'yes' | 'no'
```
