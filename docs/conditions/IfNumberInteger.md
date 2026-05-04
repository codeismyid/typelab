[typelab](../README.md) / [conditions](../conditions.md) / IfNumberInteger

```ts
type IfNumberInteger<T, Then, Else> = _IfNotAnyOrNever<T, T extends number ? number extends T ? Else : `${T}` extends `${infer _ extends number}.${infer __ extends number}` ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is integer number literal, otherwise resolves to `Else`.

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

The type to return if `T` is integer number literal.

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

The type to return if `T` is not integer number literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is integer number literal, `Else` otherwise.

## Example

```ts
type Yes = IfNumberInteger<11, 'yes', 'no'>; // 'yes'
type No = IfNumberInteger<11.1, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumberInteger<11 | 11.1, 'yes', 'no'>; // 'yes' | 'no'
```
