[typelab](../README.md) / [conditions](../conditions.md) / IfUndefinable

```ts
type IfUndefinable<T, Then, Else> = _IfNotAnyOrNeverOrUnknown<T, undefined extends T ? Then : Else>;
```

Resolves to `Then` if the type `T` is an undefinable type, otherwise resolves to `Else`.

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

The type to return if `T` is undefinable.

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

The type to return if `T` is not undefinable. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is undefinable, `Else` otherwise.

## Example

```ts
type Yes = IfUndefinable<string | undefined, 'yes', 'no'>; // 'yes'
type No = IfUndefinable<string, 'yes', 'no'>; // 'no'
```
