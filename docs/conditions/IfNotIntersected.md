[typelab](../README.md) / [conditions](../conditions.md) / IfNotIntersected

```ts
type IfNotIntersected<T1, T2, Then, Else> = T1 & T2 extends never ? Then : Else;
```

Resolves to `Then` if `T1` is not intersected with `T2`, otherwise resolves to `Else`.

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

`T1`

</td>
<td>

&hyphen;

</td>
<td>

The first type to compare.

</td>
</tr>
<tr>
<td>

`T2`

</td>
<td>

&hyphen;

</td>
<td>

The second type to compare.

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

The type to return if `T1` is not intersected with type `T2`.

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

The type to return if `T1` is intersected with type `T2`. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T1` & `T2` is `never`, `Else` otherwise.

## Example

```ts
type Yes = IfNotIntersected<'c', 'a' | 'b', 'yes', 'no'>; // 'yes'
type No = IfNotIntersected<'a' | 'c', 'a' | 'b', 'yes', 'no'>; // 'no'
```
