[typelab](../README.md) / [utils](../utils.md) / ParseFloat

```ts
type ParseFloat<T> = T extends number ? T : T extends "-0" | "-0n" ? 0 : T extends `${infer Prefix extends "-" | ""}.${infer U extends number}` ? ParseFloat<`${Prefix}0.${U}`> : T extends `${infer U extends number}` ? number extends U ? T extends `${infer U extends number}.${number | ""}` ? U : never : U : T extends `${infer U extends bigint}n` ? `${U}` extends `${infer V extends number}` ? V : never : T extends bigint ? ParseFloat<`${T}`> : never;
```

Parses a `string` or `number` type into a `number`.

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

The parsed `number` type.

## Example

```ts
type Float = ParseFloat<'11.1'>; // 11.1
```
