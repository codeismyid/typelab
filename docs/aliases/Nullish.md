[typelab](../README.md) / [aliases](../aliases.md) / Nullish

```ts
type Nullish<T> = T | null | undefined;
```

Type that allows a value to be `T`, `null`, or `undefined`.

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

The original type, defaults to `never`.

</td>
</tr>
</tbody>
</table>

## Returns

Union `T`, `null, and `undefined`

## Example

```ts
const example: Nullish = null; // valid
const example2: Nullish = undefined; // valid
```
