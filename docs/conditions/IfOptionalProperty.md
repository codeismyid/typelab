[typelab](../README.md) / [conditions](../conditions.md) / IfOptionalProperty

```ts
type IfOptionalProperty<T, Key, Then, Else> = T extends T ? Key extends keyof T ? Pick<T, Key> extends infer U1 ? Partial<U1> extends infer U2 ? [U1, U2] extends [U2, U1] ? Then : Else : never : never : never : never;
```

Resolves to `Then` if the type `T[Key]` is optional, otherwise resolves to `Else`.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

&hyphen;

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

&hyphen;

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

&hyphen;

</td>
<td>

The type to return if `T[Key]` is optional.

</td>
</tr>
<tr>
<td>

`Else`

</td>
<td>

`never`

</td>
<td>

The type to return if `T[Key]` is not optional. Defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

`Then` if `T[Key]` is optional, `Else` otherwise.

## Example

```ts
// 'yes'
type Yes = IfOptionalProperty<{ a?: string; }, 'a', 'yes', 'no'>;

// 'no'
type No = IfOptionalProperty<{ a: string; }, 'a', 'yes', 'no'>;

// 'yes' | 'no'
type YesOrNo = IfOptionalProperty<{ a?: string; } | { a: string; }, 'a', 'yes', 'no'>;

// never
type Never = IfOptionalProperty<{ a?: string }, 'b', 'yes', 'no'>;
```
