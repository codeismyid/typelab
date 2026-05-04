[typelab](../README.md) / [aliases](../aliases.md) / Nullable

```ts
type Nullable<T> = T | null;
```

Type that allows a value to be `T` or `null`.

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

`never`

</td>
<td>

The original type.

</td>
</tr>
</tbody>
</table>

## Returns

Union `T` and `null`

## Example

```ts
const example: Nullable<string> = null; // valid
const example2: Nullable<string> = undefined; // invalid
```
