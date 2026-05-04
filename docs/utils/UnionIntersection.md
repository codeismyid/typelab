[typelab](../README.md) / [utils](../utils.md) / UnionIntersection

```ts
type UnionIntersection<U1, U2> = U1 extends U1 ? U2 extends U2 ? IsEqual<U1, U2> extends true ? U1 : never : never : never;
```

Get the intersection of two union types, combining only the types that exist in both unions.

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

`U1`

</td>
<td>

The first union type.

</td>
</tr>
<tr>
<td>

`U2`

</td>
<td>

The second union type.

</td>
</tr>
</tbody>
</table>

## Returns

The intersection of `U1` and `U2`.

## Example

```ts
// 'b'
type Result = UnionIntersection<'a' | 'b', 'b' | 'c'>;
```
