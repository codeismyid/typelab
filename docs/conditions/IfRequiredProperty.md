[typelab](../README.md) / [conditions](../conditions.md) / IfRequiredProperty

```ts
type IfRequiredProperty<T, Key, Then, Else> = T extends T ? Key extends keyof T ? Pick<T, Key> extends infer U1 ? Required<U1> extends infer U2 ? [U1, U2] extends [U2, U1] ? Then : Else : never : never : never : never;
```

Resolves to `Then` if the type `T[Key]` is required, otherwise resolves to `Else`.

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

The type to be checked.

</td>
</tr>
<tr>
<td>

`Key`

</td>
<td>

The key of `T`.

</td>
</tr>
<tr>
<td>

`Then`

</td>
<td>

The type to return if `T[Key]` is required.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

The type to return if `T[Key]` is not required. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T[Key]` is required, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfRequiredProperty<{ a: string; }, 'a', 'yes', 'no'>;

// 'no'
type No = IfRequiredProperty<{ a?: string; }, 'a', 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfRequiredProperty<{ a: string; } | { a?: string; }, 'a', 'yes', 'no'>;

// never
type Never = IfRequiredProperty<{ a?: string }, 'b', 'yes', 'no'>;
```
