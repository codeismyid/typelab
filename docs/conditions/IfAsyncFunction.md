[typelab](../README.md) / [conditions](../conditions.md) / IfAsyncFunction

```ts
type IfAsyncFunction<T, Then, Else> = _IfNotAnyOrNever<T, T extends AsyncFn ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is an async function, otherwise resolves to `Else`.

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

The type to return if `T` is async function.

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

The type to return if `T` is not async function. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is async function, `Else` otherwise.

## Example

```ts
type Yes = IfAsyncFunction<() => Promise<void>, 'yes', 'no'>; // 'yes'
type No = IfAsyncFunction<() => void, 'yes', 'no'>; // 'no'
type YesOrNo = IfAsyncFunction<(() => Promise<void>) | (() => void), 'yes', 'no'>; // 'yes' | 'no'
```
