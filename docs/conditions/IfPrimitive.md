[typelab](../README.md) / [conditions](../conditions.md) / IfPrimitive

```ts
type IfPrimitive<T, Then, Else> = _IfNotAnyOrNever<T, T extends Primitive ? Then : Else, Else>;
```

Resolves to `Then` if the type `T` is assignable to [\`Primitive\`](../aliases/Primitive.md), otherwise resolves to `Else`.

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

The type to return if `T` is `Primitive`.

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

The type to return if `T` is not `Primitive`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T` is assignable to [\`Primitive\`](../aliases/Primitive.md), `Else` otherwise.

## Example

```ts
type Yes = IfPrimitive<string, 'yes', 'no'>; // 'yes'
type No = IfPrimitive<object, 'yes', 'no'>; // 'no'
type YesOrNo = IfPrimitive<string | object, 'yes', 'no'>; // 'yes' | 'no'
```
