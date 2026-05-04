[typelab](../README.md) / [utils](../utils.md) / ExcludeUndefined

```ts
type ExcludeUndefined<T> = Exclude<T, undefined>;
```

Exclude `undefined` from type `T`.

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

`T` without `undefined.

## Example

```ts
type NonUndefinedType = ExcludeUndefined<string | undefined>; // string
```
