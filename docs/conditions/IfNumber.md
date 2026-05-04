[typelab](../README.md) / [conditions](../conditions.md) / IfNumber

```ts
type IfNumber<T, Then, Else> = _IfNotAnyOrNever<T, T extends number ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `number`, otherwise resolves to `Else`.

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

The type to return if `T` is `number`.

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

The type to return if `T` is not `number`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `number`, `Else` otherwise.

## Example

```ts
type Yes = IfNumber<number, 'yes', 'no'>; // 'yes'
type No = IfNumber<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfNumber<string | number, 'yes', 'no'>; // 'yes' | 'no'
```
