[typelab](../README.md) / [conditions](../conditions.md) / IfString

```ts
type IfString<T, Then, Else> = _IfNotAnyOrNever<T, T extends string ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `string`, otherwise resolves to `Else`.

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

The type to return if `T` is `string`.

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

The type to return if `T` is not `string`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `string`, `Else` otherwise.

## Example

```ts
type Yes = IfString<string, 'yes', 'no'>; // 'yes'
type No = IfString<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfString<string | number, 'yes', 'no'>; // 'yes' | 'no'
```
