[typelab](../README.md) / [conditions](../conditions.md) / IfFunction

```ts
type IfFunction<T, Then, Else> = _IfNotAnyOrNever<T, T extends Fn ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is a function, otherwise resolves to `Else`.

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

The type to return if `T` is function.

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

The type to return if `T` is not function. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is function, `Else` otherwise.

## Example

```ts
type Yes = IfFunction<() => void, 'yes', 'no'>; // 'yes'
type No = IfFunction<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfFunction<(() => void) | string, 'yes', 'no'>; // 'yes' | 'no'
```
