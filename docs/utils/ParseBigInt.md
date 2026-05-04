[typelab](../README.md) / [utils](../utils.md) / ParseBigInt

```ts
type ParseBigInt<T> = T extends bigint ? T : T extends "-0" | "-0n" ? 0 : T extends `${infer U extends bigint}` ? U : T extends `${infer U extends bigint}n` ? U : T extends number ? ParseBigInt<`${T}`> : never;
```

Parses a `string` or `number` type into a `bigint`.

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

The parsed `bigint` type.

## Example

```ts
type Bigi = ParseBigInt<'11n'>; // 11n
```
