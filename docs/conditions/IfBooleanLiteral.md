[typelab](../README.md) / [conditions](../conditions.md) / IfBooleanLiteral

```ts
type IfBooleanLiteral<T, Then, Else> = _IfNotAnyOrNever<T, boolean extends T ? Else : T extends boolean ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a boolean literal (`true` or `false`), otherwise resolves to `Else`.

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

The type to return if `T` is a boolean literal.

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

The type to return if `T` is not a boolean literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a boolean literal, `Else` otherwise.

## Example

```ts
type Yes = IfBooleanLiteral<true, 'yes', 'no'>; // 'yes'
type No = IfBooleanLiteral<boolean, 'yes', 'no'>; // 'yes'
type YesOrNo = IfBooleanLiteral<true | string, 'yes', 'no'>; // 'yes' | 'no'
```
