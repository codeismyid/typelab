[typelab](../README.md) / [conditions](../conditions.md) / IfNewableFunction

```ts
type IfNewableFunction<T, Then, Else> = _IfNotAnyOrNever<T, T extends NewableFn ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a newable function, otherwise resolves to `Else`.

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

The type to return if `T` is newable function.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

The type to return if `T` is not newable function. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is newable function, `Else` otherwise.

## Example

```ts
type Yes = IfNewableFunction<new () => void, 'yes', 'no'>; // 'yes'
type No = IfNewableFunction<() => void, 'yes', 'no'>; // 'no'
type YesOrNo = IfNewableFunction<(new () => void) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
```
