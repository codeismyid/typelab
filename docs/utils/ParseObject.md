[typelab](../README.md) / [utils](../utils.md) / ParseObject

```ts
type ParseObject<T> = T extends T ? IsNullish<T> extends true ? never : Record<keyof T, unknown> extends infer U ? { [K in keyof U]: T[K extends keyof T ? K : never] } : never : never;
```

Converts a type to an `object`.

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

The type to be converted into an `object`.

</td>
</tr>
</tbody>
</table>

## Returns

A new `object` of `T`, it returns `never` if `T` is nullish.

## Example

```ts
type Obj = ParseObject<true>; // { valueOf: () => boolean }
```
