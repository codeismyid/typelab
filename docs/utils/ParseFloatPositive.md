[typelab](../README.md) / [utils](../utils.md) / ParseFloatPositive

```ts
type ParseFloatPositive<T> = ParseFloat<T> extends infer Float ? Float extends 0 ? 0 : Float extends number ? IsPositive<Float> extends true ? Float : `${Float}` extends `-${infer Result extends number}` ? Result : never : never : never;
```

Parses a `string` or `number` type into a positive `number`.

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

The parsed positive `number` type.

## Example

```ts
type Float = ParseFloatPositive<'-11.1'>; // 11.1
```
