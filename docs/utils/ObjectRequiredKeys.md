[typelab](../README.md) / [utils](../utils.md) / ObjectRequiredKeys

```ts
type ObjectRequiredKeys<T> = T extends T ? IsObjectLiteral<T> extends true ? keyof { [K in keyof T as IsRequiredProperty<T, K> extends true ? K : never]-?: true } : never : never;
```

Get the required keys from `T` type.

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

The `object` type to extract required keys from.

</td>
</tr>
</tbody>
</table>

## Returns

The keys of `T` that are required.

## Example

```ts
type Obj = { a: number; b: string | undefined; c?: boolean };
type RequiredKeys = ObjectRequiredKeys<Obj>; // "a" | "b"
```
