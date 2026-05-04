[typelab](../README.md) / [utils](../utils.md) / ObjectWritable

```ts
type ObjectWritable<T, K> = IsObjectLiteral<T> extends true ? Detailed<{ -readonly [Key in K]: T[K] } & { [Key in keyof T as Key extends K ? never : Key]: T[Key] }> : never;
```

Enforce specific properties as writable.

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

The original `object` type.

</td>
</tr>
<tr>
<td>

`K` *extends* keyof `T`

</td>
<td>

The keys of `T` that should be writable.

</td>
</tr>
</tbody>
</table>

## Returns

A type with the specified keys of `T` set as writable.

## Example

```ts
type Obj = { readonly a: string; b: string };

// WritableObj is { a: string; b: string; }
type WritableObj = ObjectWritable<Obj, 'a'>;
```
