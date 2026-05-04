[typelab](../README.md) / [assertions](../assertions.md) / IsRequiredProperty

```ts
type IsRequiredProperty<T, Key> = _IsTrueAndNotNever<IfRequiredProperty<T, Key, true, false>>;
```

Determines whether the type of `T[Key]` is required.

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

`true` if `T[Key]` is required, `false` otherwise.

## Example

```ts
type Valid = IsRequiredProperty<{ a: string }, 'a'>; // true
type Invalid = IsRequiredProperty<{ a?: string }, 'a'>; // false
type Never1 = IsRequiredProperty<{ a: string }, 'b'>; // never
type Never2 = IsRequiredProperty<{}, 'b'>; // never
type Never3 = IsRequiredProperty<undefined, 'b'>; // never
```
