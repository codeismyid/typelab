[typelab](../README.md) / [utils](../utils.md) / ParseBigIntNegative

```ts
type ParseBigIntNegative<T> = ParseBigInt<T> extends infer Bigi ? Bigi extends 0n ? 0n : Bigi extends bigint ? IsNegative<Bigi> extends true ? Bigi : `-${Bigi}` extends `${infer Result extends bigint}` ? Result : never : never : never;
```

Parses a `string` or `number` type into a negative `bigint`.

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

The parsed negative `bigint` type.

## Example

```ts
type Bigi = ParseBigIntNegative<'11'>; // -11n
```
