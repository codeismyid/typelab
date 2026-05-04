[typelab](../README.md) / [utils](../utils.md) / ExtractReturn

```ts
type ExtractReturn<T> = T extends Fn<Any[], infer Return> ? Return : T extends NewableFn<Any[], infer Return> ? Return : T extends Class<Any[], infer Instance> ? Instance : never;
```

Type that extracts the return type from `Function`, `Newable Function`, or the instance type of a `Class` type.

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

The `Function`, `Newable Function` or `Class` type from which the return type will be extracted.

</td>
</tr>
</tbody>
</table>

## Returns

The return types of `T`.

## Example

```ts
// string
type FunctionReturn = ExtractReturn<(a: string, b: number) => string>;

// { a: string; b: string }
type NewableReturn = ExtractReturn<new (a: string, b: number) => { a: string; b: string }>;
```
