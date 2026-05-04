[typelab](../README.md) / [utils](../utils.md) / ObjectOptionalKeys

```ts
type ObjectOptionalKeys<T> = T extends T ? IsObjectLiteral<T> extends true ? keyof { [K in keyof T as IsOptionalProperty<T, K> extends true ? K : never]-?: true } : never : never;
```

Get the optional keys from `T` type.

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

The `object` type to extract optional keys from.

</td>
</tr>
</tbody>
</table>

## Returns

The keys of `T` that are optional.

## Example

```ts
type Obj = { a: number; b: string | undefined; c?: boolean };
type OptionalKeys = ObjectOptionalKeys<Obj>; // "c"
```
