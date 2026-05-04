[typelab](../README.md) / [utils](../utils.md) / Detailed

```ts
type Detailed<T> = T extends T ? IsObjectLiteral<T> extends true ? { [K in keyof T]: Detailed<T[K]> } : T : never;
```

Recursively applies a deep transformation to each property of `T`, only if `T` is `ObjectLiteral`.

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
type ComplexObj = Required<{ b?: string } & { c?: string }> & { d: string };
type Obj = { a: string; nested: ComplexObj };

// Detail is { a: string; nested: { b: string; c: string; d: string }; }
type Detail = Detailed<Obj>;
```
