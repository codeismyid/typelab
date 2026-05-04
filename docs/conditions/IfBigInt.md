[typelab](../README.md) / [conditions](../conditions.md) / IfBigInt

```ts
type IfBigInt<T, Then, Else> = _IfNotAnyOrNever<T, T extends bigint ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a `bigint`, otherwise resolves to `Else`.

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

The type to return if `T` is a `bigint`.

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

The type to return if `T` is not a `bigint`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a `bigint`, `Else` otherwise.

## Example

```ts
type Yes = IfBigInt<bigint, 'yes', 'no'>; // 'yes'
type No = IfBigInt<number, 'yes', 'no'>; // 'no'
type YesOrNo = IfBigInt<bigint | number, 'yes', 'no'>; // 'yes' | 'no'
```
