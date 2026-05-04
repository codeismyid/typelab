[typelab](../README.md) / [conditions](../conditions.md) / IfStringNumberLike

```ts
type IfStringNumberLike<T, Then, Else> = IfStringLiteral<T, T extends `${infer _ extends number}` ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is number-like string literal, otherwise resolves to `Else`.

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

The type to return if `T` is number-like string literal.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

The type to return if `T` is not number-like string literal. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is number-like string literal, `Else` otherwise.

## Example

```ts
type Yes = IfStringNumberLike<'11', 'yes', 'no'>; // 'yes'
type No = IfStringNumberLike<'hello', 'yes', 'no'>; // 'no'
type YesOrNo = IfStringNumberLike<'11' | 'hello', 'yes', 'no'>; // 'yes' | 'no'
```
