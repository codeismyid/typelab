[typelab](../README.md) / [conditions](../conditions.md) / IfUnknown

```ts
type IfUnknown<T, Then, Else> = _IfNotAny<T, unknown extends T ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is an `unknown` type, otherwise resolves to `Else`.

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

The type to return if `T` is `unknown`.

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

The type to return if `T` is not `unknown`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is an `unknown` type, `Else` otherwise.

## Example

```ts
type Yes = IfUnknown<unknown, 'yes', 'no'>; // 'yes'
type No = IfUnknown<string, 'yes', 'no'>; // 'no'
```
