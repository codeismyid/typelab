[typelab](../README.md) / [assertions](../assertions.md) / IsExtends

```ts
type IsExtends<T1, T2> = _IsTrue<IfExtends<T1, T2, true, false>>;
```

Type that checks if type `T1` extends type `T2`.

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

`true` if `T1` is assignable to `T2` (i.e., `T1 extends T2`), `false` otherwise.

## Example

```ts
type Extends = IsExtends<'', string>; // true
type NotExtends = IsExtends<string, ''>; // false
```
