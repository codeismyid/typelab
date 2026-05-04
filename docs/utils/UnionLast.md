[typelab](../README.md) / [utils](../utils.md) / UnionLast

```ts
type UnionLast<T> = UnionToIntersection<T extends T ? Fn<[], T> : never> extends Fn<[], infer Result> ? Result : never;
```

Extracts the last type from a union type.

⚠️ **Does not guarantee correct order**.

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

`T`

</td>
<td>

The union type.

</td>
</tr>
</tbody>
</table>

## Returns

The last type in the union.

## Example

```ts
// 'c'
type Last = UnionLast<'a' | 'b' | 'c'>;
```
