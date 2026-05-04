[typelab](../README.md) / [conditions](../conditions.md) / IfVoid

```ts
type IfVoid<T, Then, Else> = _IfNotAnyOrNever<T, T extends undefined ? Else : T extends void ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is `void`, otherwise resolves to `Else`.

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

The type to return if `T` is `void`.

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

The type to return if `T` is not `void`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is `void`, `Else` otherwise.

## Example

```ts
type Yes = IfVoid<void, 'yes', 'no'>; // 'yes'
type No = IfVoid<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfVoid<string | void, 'yes', 'no'>; // 'yes' | 'no'
```
