[typelab](../README.md) / [conditions](../conditions.md) / IfAny

```ts
type IfAny<T, Then, Else> = false extends T & true ? Then : Else;
```

Resolves to `Then` if the type `T` is an `any` type, otherwise resolves to `Else`.

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

The type to return if `T` is `any`.

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

The type to return if `T` is not `any`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is an `any` type, `Else` otherwise.

## Example

```ts
type Yes = IfAny<any, 'yes', 'no'>; // 'yes'
type No = IfAny<string, 'yes', 'no'>; // 'no'
```
