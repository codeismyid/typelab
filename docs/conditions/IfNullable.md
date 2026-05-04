[typelab](../README.md) / [conditions](../conditions.md) / IfNullable

```ts
type IfNullable<T, Then, Else> = _IfNotAnyOrNeverOrUnknown<T, null extends T ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a nullable type, otherwise resolves to `Else`.

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

The type to return if `T` is nullable.

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

The type to return if `T` is not nullable. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is nullable, `Else` otherwise.

## Example

```ts
type Yes = IfNullable<string | null, 'yes', 'no'>; // 'yes'
type No = IfNullable<string, 'yes', 'no'>; // 'no'
```
