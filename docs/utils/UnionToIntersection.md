[typelab](../README.md) / [utils](../utils.md) / UnionToIntersection

```ts
type UnionToIntersection<T> = T extends T ? Fn<[T]> : never extends Fn<[infer Result]> ? Result : never;
```

Converts a union type to an intersection type.

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

The union type to convert.

</td>
</tr>
</tbody>
</table>

## Returns

The intersection of the types in the union.

## Example

```ts
// { a: number } & { b: string }
type Intersect = UnionToIntersection<{ a: number } | { b: string }>;
```
