[typelab](../README.md) / [utils](../utils.md) / ExtractParams

```ts
type ExtractParams<T> = T extends Fn<infer Params> ? Params : T extends NewableFn<infer Params> ? Params : T extends Class<infer Params> ? Params : never;
```

Type that extracts the parameters from `Function`, `Newable Function`, or the constructor parameters of a `Class` type.

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

`T` *extends* 
  \| [`Fn`](../aliases/Fn.md)
  \| [`NewableFn`](../aliases/NewableFn.md)
  \| [`Class`](../aliases/Class.md)

</td>
<td>

The `Function`, `Newable Function` or `Class` type from which parameters will be extracted.

</td>
</tr>
</tbody>
</table>

## Returns

The parameter types of `T`.

## Example

```ts
// [string, number]
type FunctionParams = ExtractParams<(a: string, b: number) => void>;

// [string, number]
type NewableParams = ExtractParams<new (a: string, b: number) => { a: string; b: string }>;

class MyClass { constructor(public a: string, public b: number) {}}
// [string, number]
type ClassParams = ExtractParams<typeof MyClass>;
```
