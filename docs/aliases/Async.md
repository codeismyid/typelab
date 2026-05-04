[typelab](../README.md) / [aliases](../aliases.md) / Async

```ts
type Async<T> = Promise<T>;
```

Built-in [\`Promise\`](#) with default type.

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

[`Any`](Any.md)

</td>
<td>

The type when operation complete, defaults to `any`.

</td>
</tr>
</tbody>
</table>

## Example

```ts
// AsyncValue is Promise<string>
type AsyncValue = Async<string>;
```
