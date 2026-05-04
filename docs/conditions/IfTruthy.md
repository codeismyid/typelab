[typelab](../README.md) / [conditions](../conditions.md) / IfTruthy

```ts
type IfTruthy<T, Then, Else> = _IfNotAnyOrNever<T, T extends Falsy ? Else : Then, Else>;
```

Resolves to `Then` if the type `T` is not [\`Falsy\`](../aliases/Falsy.md) type, otherwise resolves to `Else`.

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

The type to return if `T` is not falsy type.

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

The type to return if `T` is a falsy type. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is not [\`Falsy\`](../aliases/Falsy.md) type, `Else` otherwise.

## Example

```ts
type Yes = IfTruthy<1, 'yes', 'no'>; // 'yes'
type No = IfTruthy<0, 'yes', 'no'>; // 'no'
type YesOrNo = IfTruthy<0 | 1, 'yes', 'no'>; // 'yes' | 'no'
```
