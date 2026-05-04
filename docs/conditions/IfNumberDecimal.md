[typelab](../README.md) / [conditions](../conditions.md) / IfNumberDecimal

```ts
type IfNumberDecimal<T, Then, Else> = _IfNotAnyOrNever<T, T extends number ? number extends T ? Else : `${T}` extends `${infer _ extends number}.${infer __ extends number}` ? Then : Else : Else, Else>;
```

Resolves to `Then` if the type `T` is decimal number literal, otherwise resolves to `Else`.

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

The type to return if `T` is decimal number literal.

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

The type to return if `T` is not decimal number literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is decimal number literal, `Else` otherwise.

## Example

```ts
type Yes = IfNumberDecimal<11.1, 'yes', 'no'>; // 'yes'
type No = IfNumberDecimal<11, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberDecimal<11.1 | 11, 'yes', 'no'>; // 'yes' | 'no'
```
