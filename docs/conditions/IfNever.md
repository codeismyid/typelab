[typelab](../README.md) / [conditions](../conditions.md) / IfNever

```ts
type IfNever<T, Then, Else> = [T] extends [never] ? Then : Else;
```

Resolves to `Then` if the type `T` is a `never` type, otherwise resolves to `Else`.

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

The type to return if `T` is `never`.

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

The type to return if `T` is not `never`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `never` type, `Else` otherwise.

## Example

```ts
type Yes = IfNever<never, 'yes', 'no'>; // 'yes'
type No = IfNever<string, 'yes', 'no'>; // 'no'
```
