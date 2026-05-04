[typelab](../README.md) / [utils](../utils.md) / ExcludeNullish

```ts
type ExcludeNullish<T> = Exclude<T, null | undefined>;
```

Exclude `null` and `undefined` from type `T`.

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

`T` without `null` and `undefined.

## Example

```ts
type NonNullishType = ExcludeNullish<string | null | undefined>; // string
```
