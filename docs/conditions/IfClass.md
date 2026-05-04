[typelab](../README.md) / [conditions](../conditions.md) / IfClass

```ts
type IfClass<T, Then, Else> = _IfNotAnyOrNever<T, T extends Class ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is [\`Class\`](../aliases/Class.md) type, otherwise resolves to `Else`.

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

The type to return if `T` is a `Class`.

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

The type to return if `T` is not a `Class`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is a [\`Class\`](../aliases/Class.md), `Else` otherwise.

## Example

```ts
type Yes = IfClass<Class, 'yes', 'no'>; // 'yes'
type No = IfClass<string, 'yes', 'no'>; // 'no'
type YesOrNo = IfClass<Class | string, 'yes', 'no'>; // 'yes' | 'no'
```
