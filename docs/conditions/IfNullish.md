[typelab](../README.md) / [conditions](../conditions.md) / IfNullish

```ts
type IfNullish<T, Then, Else> = _IfNotAnyOrNeverOrUnknown<T, undefined extends T ? Then : null extends T ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a nullish type, otherwise resolves to `Else`.

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

The type to return if `T` is nullish.

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

The type to return if `T` is not nullish. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is nullish, `Else` otherwise.

## Example

```ts
type Yes = IfNullish<string | null | undefined, 'yes', 'no'>; // 'yes'
type No = IfNullish<string, 'yes', 'no'>; // 'no'
```
