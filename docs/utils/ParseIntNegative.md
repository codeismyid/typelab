[typelab](../README.md) / [utils](../utils.md) / ParseIntNegative

```ts
type ParseIntNegative<T> = ParseInt<T> extends infer Int ? Int extends 0 ? 0 : Int extends number ? IsNegative<Int> extends true ? Int : `-${Int}` extends `${infer Result extends number}` ? Result : never : never : never;
```

Parses a `string` or `number` type into a negative `number`.

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

The type to parse.

</td>
</tr>
</tbody>
</table>

## Returns

The parsed negative `number` type.

## Example

```ts
type Int = ParseIntNegative<'11'>; // -11
```
