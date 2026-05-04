[typelab](../README.md) / [assertions](../assertions.md) / IsNotExtends

```ts
type IsNotExtends<T1, T2> = _IsTrue<IfNotExtends<T1, T2, true, false>>;
```

Type that checks if type `T1` **not** extends type `T2`.

[\`IsExtends\`](IsExtends.md) in reverse.

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

`true` if `T1` is **not** assignable to `T2`, `false` otherwise.

## Example

```ts
type NotExtends = IsNotExtends<string, ''>; // true
type Extends = IsNotExtends<'', string>; // false
```
