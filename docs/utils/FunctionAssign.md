[typelab](../README.md) / [utils](../utils.md) / FunctionAssign

```ts
type FunctionAssign<Target, Source> = Target extends Fn<infer TargetParams, infer TargetReturn> ? Source extends Fn<infer SourceParams, infer SourceReturn> ? (...param) => ObjectAssign<TargetReturn, SourceReturn> : never : never;
```

Assign the parameter and return types of `Source` into `Target`.

Use [\`ArrayAssign\`](ArrayAssign.md) for the parameter type and [\`ObjectAssign\`](ObjectAssign.md) for the return type.

- If `Target` or `Source` is not `Function`, it returns `never`.

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

`Target` *extends* [`Fn`](../aliases/Fn.md)

</td>
<td>

The target `Function` type.

</td>
</tr>
<tr>
<td>

`Source` *extends* [`Fn`](../aliases/Fn.md)

</td>
<td>

The source `Function` type.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Function` combining parameter and return types from both `Target` and `Source`.

## Example

```ts
// (param_0: number, param_1: string) => { a: number; b: string }
type Result = FunctionAssign<(...param: [string, string]) => { a: string; b: string }, (...param: [number]) => { a: number }>
```
