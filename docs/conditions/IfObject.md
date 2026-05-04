[typelab](../README.md) / [conditions](../conditions.md) / IfObject

```ts
type IfObject<T, Then, Else> = _IfNotAnyOrNever<T, T extends object ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `object`, otherwise resolves to `Else`.

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

The type to return if `T` is `object`.

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

The type to return if `T` is not `object`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `object`, `Else` otherwise.

## Example

```ts
type Yes = IfObject<object, 'yes', 'no'>; // 'yes'
type No = IfObject<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfObject<object | string, 'yes', 'no'>; // 'yes' | 'no'
```
