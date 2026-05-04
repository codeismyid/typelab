[typelab](../README.md) / [conditions](../conditions.md) / IfUnion

```ts
type IfUnion<T, Then, Else> = _IfNotAnyOrNever<T, _IfUnion<T, Then, Else>, Else>;
```

Resolves to `Then` if the type `T` is union, otherwise resolves to `Else`.

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

The type to return if `T` is union.

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

The type to return if `T` is not union. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is union, `Else` otherwise.

## Example

```ts
type Yes = IfUnion<string | number, 'yes', 'no'>; // 'yes'
type No = IfUnion<string, 'yes', 'no'>; // 'no'
```
