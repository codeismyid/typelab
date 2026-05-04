[typelab](../README.md) / [utils](../utils.md) / ExcludeNull

```ts
type ExcludeNull<T> = Exclude<T, null>;
```

Exclude `null` from type `T`.

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

The original type.

</td>
</tr>
</tbody>
</table>

## Returns

`T` without `null`.

## Example

```ts
type NonNullType = ExcludeNull<string | null>; // string
```
