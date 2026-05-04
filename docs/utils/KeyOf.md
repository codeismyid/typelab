[typelab](../README.md) / [utils](../utils.md) / KeyOf

```ts
type KeyOf<T> = T extends T ? keyof T : never;
```

Extracts the keys of an `object` type.

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

The `object` type.

</td>
</tr>
</tbody>
</table>

## Returns

The keys of the `object`.

## Example

```ts
// Keys is 'a' | 'b'
type Keys = KeyOf<{ a: string; b: number }>;
```
