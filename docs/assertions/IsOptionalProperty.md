[typelab](../README.md) / [assertions](../assertions.md) / IsOptionalProperty

```ts
type IsOptionalProperty<T, Key> = _IsTrueAndNotNever<IfOptionalProperty<T, Key, true, false>>;
```

Determines whether the type of `T[Key]` is optional.

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
</tbody>
</table>

## Returns

`true` if `T[Key]` is optional, `false` otherwise.

## Example

```ts
type Valid = IsOptionalProperty<{ a?: string }, 'a'>; // true
type Invalid = IsOptionalProperty<{ a: string }, 'a'>; // false
type Never1 = IsOptionalProperty<{ a: string }, 'b'>; // never
type Never2 = IsOptionalProperty<{}, 'b'>; // never
type Never3 = IsOptionalProperty<undefined, 'b'>; // never
```
