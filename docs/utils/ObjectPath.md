[typelab](../README.md) / [utils](../utils.md) / ObjectPath

```ts
type ObjectPath<T> = IsObjectLiteral<T> extends true ? { [K in keyof T]-?: K extends Exclude<PropertyKey, symbol> ? `${K}` | `${K}.${ObjectPath<T[K]>}` : never }[keyof T] : never;
```

Get all of the paths from `T` as a `string` union.

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

The `object` type to extract paths from.

</td>
</tr>
</tbody>
</table>

## Returns

A `string` union of paths in the `object`.

## Example

```ts
type Obj = { a: { b: number }; c: string };
type Paths = ObjectPath<Obj>; // "a" | "a.b" | "c"
```
