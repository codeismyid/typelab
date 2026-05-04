[typelab](../README.md) / [conditions](../conditions.md) / IfNonNullish

```ts
type IfNonNullish<T, Then, Else> = _IfNotAny<T, IfNever<keyof T, T extends {
} ? Then : Else, Else>, Else>;
```

Resolves to `Then` if the type `T` is a `{}` type, otherwise resolves to `Else`.

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

The type to return if `T` is `{}`.

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

The type to return if `T` is not `{}`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `{}`, `Else` otherwise.

## Example

```ts
type Yes = IfNonNullish<{}, 'yes', 'no'>; // 'yes'
type No = IfNonNullish<null, 'yes', 'no'>; // 'no'
type YesOrNo = IfNonNullish<{} | null, 'yes', 'no'>; // 'yes' | 'no'
```
