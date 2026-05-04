[typelab](../README.md) / [utils](../utils.md) / Decrement

```ts
type Decrement<N> = N extends number ? number extends N ? number : N extends 0 ? -1 : `${N}` extends `-${infer WholeNumber}` ? ParseFloatNegative<_Increment<WholeNumber>> : `${N}` extends `0.${infer Fraction}` ? ParseFloat<`-0.${Fraction}`> : ParseFloat<_Decrement<`${N}`>> : N extends bigint ? bigint extends N ? bigint : N extends 0n ? -1n : `${N}` extends `-${infer WholeNumber}` ? ParseBigIntNegative<_Increment<WholeNumber>> : ParseBigInt<_Decrement<`${N}`>> : never;
```

Decrements a given `number` or `bigint` by 1.

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

`N` *extends* `number` \| `bigint`

</td>
<td>

The `number` or `bigint` to be decremented.

</td>
</tr>
</tbody>
</table>

## Returns

The decremented `number` or `bigint`.

## Example

```ts
type DecrementNumber = Decrement<5>; // 4
type DecrementBigInt = Decrement<10n>; // 9n
type DecrementNegative = Decrement<-3.14>; // -4.14
```
