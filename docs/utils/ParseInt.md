[typelab](../README.md) / [utils](../utils.md) / ParseInt

```ts
type ParseInt<T> = T extends number ? `${T}` extends `${infer Int extends number}.${number}` ? Int : T : T extends "-0" | "-0n" | `${"-" | ""}.${number}` ? 0 : T extends `${infer U extends number}` ? number extends U ? T extends `${infer U extends number}.${number | ""}` ? U : never : `${U}` extends `${infer Int extends number}.${number}` ? Int : U : T extends `${infer U extends bigint}n` ? `${U}` extends `${infer V extends number}` ? V : never : T extends bigint ? ParseInt<`${T}`> : never;
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
type Int = ParseInt<'11'>; // 11
```
