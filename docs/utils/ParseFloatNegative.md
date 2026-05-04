[typelab](../README.md) / [utils](../utils.md) / ParseFloatNegative

```ts
type ParseFloatNegative<T> = ParseFloat<T> extends infer Float ? Float extends 0 ? 0 : Float extends number ? IsNegative<Float> extends true ? Float : `-${Float}` extends `${infer Result extends number}` ? Result : never : never : never;
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
type Float = ParseFloatNegative<'11.1'>; // -11.1
```
