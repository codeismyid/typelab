[typelab](../README.md) / [assertions](../assertions.md) / IsNotEqual

```ts
type IsNotEqual<T1, T2> = IfNotEqual<T1, T2, true, false>;
```

Check the type inequality between `T1` and `T2`.

[\`IsEqual\`](IsEqual.md) in reverse.

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

`true` if types `T1` is not equal to `T2`, `false` otherwise.

## Example

```ts
type NotEqual = IsNotEqual<string, ''>; // true
type Equal = IsNotEqual<string, string>; // false
```
