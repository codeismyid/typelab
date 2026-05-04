[typelab](../README.md) / [utils](../utils.md) / ParseBoolean

```ts
type ParseBoolean<T> = T extends boolean ? T : T extends 0 | 0 | 0n | 0n | "" | null | undefined | Void ? false : T extends 1 ? true : T extends `${infer U extends boolean}` ? U : never;
```

Converts a type to a `boolean`.

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

The `boolean` representation of the type.

## Example

```ts
type True1 = ParseBoolean<'true'>; // true
type True2 = ParseBoolean<1>; // true
type False1 = ParseBoolean<'false'>; // false
type False2 = ParseBoolean<0>; // false
```
