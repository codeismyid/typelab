[typelab](../README.md) / [assertions](../assertions.md) / IsExtendsEitherWay

```ts
type IsExtendsEitherWay<T1, T2> = _IsTrue<IfExtendsEitherWay<T1, T2, true, false>>;
```

Type that checks if type `T1` extends type `T2` or type `T2` extends type `T1`.

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

`true` if either conditions are true, `false` otherwise.

## Example

```ts
type Relate = IsExtendsEitherWay<string, ''>; // true
type NotRelate = IsExtendsEitherWay<string, number>; // false
```
