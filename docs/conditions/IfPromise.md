[typelab](../README.md) / [conditions](../conditions.md) / IfPromise

```ts
type IfPromise<T, Then, Else> = _IfNotAnyOrNever<T, T extends Promise<any> ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `Promise`, otherwise resolves to `Else`.

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

The type to return if `T` is `Promise`.

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

The type to return if `T` is not `Promise`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `Promise`, `Else` otherwise.

## Example

```ts
type Yes = IfPromise<Promise<string>, 'yes', 'no'>; // 'yes'
type No = IfPromise<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfPromise<Promise<string> | string, 'yes', 'no'>; // 'yes' | 'no'
```
