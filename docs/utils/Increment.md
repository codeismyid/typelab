[typelab](../README.md) / [utils](../utils.md) / Increment

```ts
type Increment<N> = N extends number ? number extends N ? number : `${N}` extends `-${infer WholeNumber}` ? WholeNumber extends `0.${infer Fraction}` ? ParseFloat<`0.${Fraction}`> : ParseFloatNegative<_Decrement<WholeNumber>> : ParseFloat<_Increment<`${N}`>> : N extends bigint ? bigint extends N ? bigint : `${N}` extends `-${infer WholeNumber}` ? ParseBigIntNegative<_Decrement<WholeNumber>> : ParseBigInt<_Increment<`${N}`>> : never;
```

Increments a given `number` or `bigint` by 1.

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

The `number` or `bigint` to be incremented.

</td>
</tr>
</tbody>
</table>

## Returns

The incremented `number` or `bigint`.

## Example

```ts
type IncrementNumber = Increment<5>; // 6
type IncrementBigInt = Increment<10n>; // 11n
type IncrementNegative = Increment<-3.14>; // -2.14
```
