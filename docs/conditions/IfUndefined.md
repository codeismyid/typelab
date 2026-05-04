[typelab](../README.md) / [conditions](../conditions.md) / IfUndefined

```ts
type IfUndefined<T, Then, Else> = _IfNotAnyOrNever<T, T extends undefined ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `undefined`, otherwise resolves to `Else`.

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

The type to return if `T` is `undefined`.

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

The type to return if `T` is not `undefined`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `undefined`, `Else` otherwise.

## Example

```ts
type Yes = IfUndefined<undefined, 'yes', 'no'>; // 'yes'
type No = IfUndefined<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfUndefined<string | undefined, 'yes', 'no'>; // 'yes' | 'no'
```
