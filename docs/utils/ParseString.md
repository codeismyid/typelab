[typelab](../README.md) / [utils](../utils.md) / ParseString

```ts
type ParseString<T> = T extends string ? T : T extends string | number | boolean | null | undefined ? `${T}` : T extends bigint ? `${T}n` : never;
```

Converts a type to a `string`.

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

The type to convert.

</td>
</tr>
</tbody>
</table>

## Returns

The `string` representation of the type.

## Example

```ts
type Stringified = ParseString<11>; // '11'
```
