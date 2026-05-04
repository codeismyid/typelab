[typelab](../README.md) / [conditions](../conditions.md) / IfPropertyKey

```ts
type IfPropertyKey<T, Then, Else> = _IfNotAnyOrNever<T, T extends PropertyKey ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is [\`PropertyKey\`](#), otherwise resolves to `Else`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

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

The type to return if `T` is `PropertyKey`.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

The type to return if `T` is not `PropertyKey`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is [\`PropertyKey\`](#), `Else` otherwise.

## Example

```ts
type Yes = IfPropertyKey<string, 'yes', 'no'>; // 'yes'
type No = IfPropertyKey<boolean, 'yes', 'no'>; // 'no'
type YesOrNo = IfPropertyKey<string | boolean, 'yes', 'no'>; // 'yes' | 'no'
```
