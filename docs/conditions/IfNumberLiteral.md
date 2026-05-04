[typelab](../README.md) / [conditions](../conditions.md) / IfNumberLiteral

```ts
type IfNumberLiteral<T, Then, Else> = _IfNotAnyOrNever<T, T extends number ? number extends T ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is number literal, otherwise resolves to `Else`.

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

The type to return if `T` is number literal.

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

The type to return if `T` is not number literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is number literal, `Else` otherwise.

## Example

```ts
type Yes = IfNumberLiteral<11, 'yes', 'no'>; // 'yes'
type No = IfNumberLiteral<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberLiteral<string | 11, 'yes', 'no'>; // 'yes' | 'no'
```
