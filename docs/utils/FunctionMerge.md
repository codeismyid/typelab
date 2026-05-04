[typelab](../README.md) / [utils](../utils.md) / FunctionMerge

```ts
type FunctionMerge<Target, Source, Z> = [Target, Source] extends [Fn<infer TargetParams, infer TargetReturn>, Fn<infer SourceParams, infer SourceReturn>] ? (...param) => ObjectMerge<TargetReturn, SourceReturn, Z> : never;
```

Merges the parameter and return types of `Source` into `Target`.

Use [\`ArrayMerge\`](ArrayMerge.md) for the parameter type and [\`ObjectMerge\`](ObjectMerge.md) for the return type.

- If `Target` or `Source` is not `Function`, it returns `never`.

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

`Target` *extends* [`Fn`](../aliases/Fn.md)

</td>
<td>

&hyphen;

</td>
<td>

The target `Function`.

</td>
</tr>
<tr>
<td>

`Source` *extends* [`Fn`](../aliases/Fn.md)

</td>
<td>

&hyphen;

</td>
<td>

The source `Function` to merge from.

</td>
</tr>
<tr>
<td>

`Z` *extends* `_LookupType`

</td>
<td>

`"shallow"`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

## Returns

A new `Function` combining parameter and return types from both `Target` and `Source`.

## Example

```ts
type Obj1 = { a: string; b: { a: string } };
type Obj2 = { a: number; b: { b: number } };

// (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; } | { b: number; }; }
type Shallow = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;

// (param_0: string | number, param_1: string) => { a: string | number; b: { a: string; b: number; }; }
type Deep = FunctionMerge<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
```
