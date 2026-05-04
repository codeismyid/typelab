[typelab](../README.md) / [assertions](../assertions.md) / IsEqual

```ts
type IsEqual<T1, T2> = IfEqual<T1, T2, true, false>;
```

Check the type equality between `T1` and `T2`.

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

`true` if types `T1` is equal to `T2`, `false` otherwise.

## Example

```ts
type Equal = IsEqual<string, string>; // true
type NotEqual = IsEqual<string, ''>; // false
```
