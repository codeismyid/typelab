[typelab](../README.md) / [conditions](../conditions.md) / IfFalse

```ts
type IfFalse<T, Then, Else> = _IfNotAnyOrNever<T, T extends false ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is exactly `false`, otherwise resolves to `Else`.

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

The type to return if `T` is `false`.

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

The type to return if `T` is not `false`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `false`, `Else` otherwise.

## Example

```ts
type Yes = IfFalse<false, 'yes', 'no'>; // 'yes'
type No = IfFalse<true, 'yes', 'no'>; // 'no'
type YesOrNo = IfFalse<boolean, 'yes', 'no'>; // 'yes' | 'no'
```
