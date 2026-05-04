[typelab](../README.md) / [conditions](../conditions.md) / IfArray

```ts
type IfArray<T, Then, Else> = _IfNotAnyOrNever<T, T extends ReadonlyArray ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is an array (readonly or writable), otherwise resolves to `Else`.

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

The type to return if `T` is an array.

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

The type to return if `T` is not an array. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is an array, `Else` otherwise.

## Example

```ts
type Yes = IfArray<string[], 'yes', 'no'>; // 'yes'
type No = IfArray<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfArray<string[] | string, 'yes', 'no'>; // 'yes' | 'no'
```
