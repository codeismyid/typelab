[typelab](../README.md) / [conditions](../conditions.md) / IfStringLiteral

```ts
type IfStringLiteral<T, Then, Else> = _IfNotAnyOrNever<T, T extends string ? string extends T ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is string literal, otherwise resolves to `Else`.

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

`T`

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

The type to return if `T` is string literal.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

The type to return if `T` is not string literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is string literal, `Else` otherwise.

## Example

```ts
type Yes = IfStringLiteral<'', 'yes', 'no'>; // 'yes'
type No = IfStringLiteral<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfStringLiteral<'' | number, 'yes', 'no'>; // 'yes' | 'no'
```
