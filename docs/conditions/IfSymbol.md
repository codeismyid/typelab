[typelab](../README.md) / [conditions](../conditions.md) / IfSymbol

```ts
type IfSymbol<T, Then, Else> = _IfNotAnyOrNever<T, T extends symbol ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `symbol`, otherwise resolves to `Else`.

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

The type to return if `T` is `symbol`.

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

The type to return if `T` is not `symbol`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `symbol`, `Else` otherwise.

## Example

```ts
type Yes = IfSymbol<symbol, 'yes', 'no'>; // 'yes'
type No = IfSymbol<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfSymbol<symbol | string, 'yes', 'no'>; // 'yes' | 'no'
```
