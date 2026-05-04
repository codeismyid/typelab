[typelab](../README.md) / [utils](../utils.md) / ObjectReadonly

```ts
type ObjectReadonly<T, K> = IsObjectLiteral<T> extends true ? Detailed<{ readonly [Key in K]: T[K] } & { [Key in keyof T as Key extends K ? never : Key]: T[Key] }> : never;
```

Extended TypeScript [\`Readonly\`](#) to enforce specific properties as readonly.

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

The keys of `T` that should be readonly.

</td>
</tr>
</tbody>
</table>

## Returns

A type with the specified keys of `T` set as readonly.

## Example

```ts
type Obj = { a: string; b: string };

// { readonly a: string; b: string }
type ReadonlyObj = ObjectReadonly<Obj, 'a'>;
```
