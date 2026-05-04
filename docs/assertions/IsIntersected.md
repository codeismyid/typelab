[typelab](../README.md) / [assertions](../assertions.md) / IsIntersected

```ts
type IsIntersected<T1, T2> = IfIntersected<T1, T2, true, false>;
```

Checks if type `T1` is intersected with type `T2`.

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

`T1`

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

The second type to compare.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T1` & `T2` is not `never`, `false` otherwise.

## Example

```ts
type Intersected = IsIntersected<'a' | 'c', 'a' | 'b'>; // true
type NotIntersected = IsIntersected<'c', 'a' | 'b'>; // false
```
