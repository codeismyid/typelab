[typelab](../README.md) / [conditions](../conditions.md) / IfBigIntLiteral

```ts
type IfBigIntLiteral<T, Then, Else> = _IfNotAnyOrNever<T, T extends bigint ? bigint extends T ? Else : Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a `bigint` but not a `bigint` literal, otherwise resolves to `Else`.

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

The type to return if `T` is a `bigint` literal.

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

The type to return if `T` is a `bigint` literal or not a `bigint`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a `bigint` but not a `bigint` literal, `Else` otherwise.

## Example

```ts
type Yes = IfBigIntLiteral<11n, 'yes', 'no'>; // 'yes'
type No = IfBigIntLiteral<bigint, 'yes', 'no'>; // 'no'
type YesOrNo = IfBigIntLiteral<11n | 11, 'yes', 'no'>; // 'yes' | 'no'
```
