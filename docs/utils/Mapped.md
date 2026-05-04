[typelab](../README.md) / [utils](../utils.md) / Mapped

```ts
type Mapped<T> = { [K in keyof T]: T[K] };
```

Recursively applies a shallow transformation to each property of `T`.

**Simpler version of [\`Detailed\`](Detailed.md)**

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

The target type.

</td>
</tr>
</tbody>
</table>

## Returns

The same `T` type with detailed properties.

## Example

```ts
type Obj = Required<{ b?: string } & { c?: string }> & { d: string };

// Detail is { b: string; c: string; d: string }
type Detail = Mapped<Obj>;
```
