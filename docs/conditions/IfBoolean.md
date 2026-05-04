[typelab](../README.md) / [conditions](../conditions.md) / IfBoolean

```ts
type IfBoolean<T, Then, Else> = _IfNotAnyOrNever<T, T extends boolean ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a `boolean`, otherwise resolves to `Else`.

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

The type to return if `T` is a `boolean`.

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

The type to return if `T` is not a `boolean`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a `boolean`, `Else` otherwise.

## Example

```ts
type Yes = IfBoolean<boolean, 'yes', 'no'>; // 'yes'
type No = IfBoolean<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfBoolean<boolean | string, 'yes', 'no'>; // 'yes' | 'no'
```
