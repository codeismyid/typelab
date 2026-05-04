[typelab](../README.md) / [utils](../utils.md) / ParseBigIntPositive

```ts
type ParseBigIntPositive<T> = ParseBigInt<T> extends infer Bigi ? Bigi extends 0n ? 0n : Bigi extends bigint ? IsPositive<Bigi> extends true ? Bigi : `${Bigi}` extends `-${infer Result extends bigint}` ? Result : never : never : never;
```

Parses a `string` or `number` type into a positive `bigint`.

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

The parsed positive `bigint` type.

## Example

```ts
type Bigi = ParseBigIntPositive<'-11'>; // 11n
```
