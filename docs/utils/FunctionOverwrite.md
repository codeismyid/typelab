[typelab](../README.md) / [utils](../utils.md) / FunctionOverwrite

```ts
type FunctionOverwrite<Target, Source, Z> = [Target, Source] extends [Fn<infer TargetParams, infer TargetReturn>, Fn<infer SourceParams, infer SourceReturn>] ? (...param) => IsNever<SourceReturn> extends true ? never : ObjectOverwrite<TargetReturn, SourceReturn, Z> : never;
```

Overwrite the parameter and return types of `Target` with parameter and return types of `Source`.

Use [\`ArrayOverwrite\`](ArrayOverwrite.md) for the parameter type and [\`ObjectOverwrite\`](ObjectOverwrite.md) for the return type.

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

The target `Function` type.

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

The source `Function` type.

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

A new `Function` with overwritten parameter and return types.

## Example

```ts
type Obj1 = { a: string; b: { a: string } };
type Obj2 = { a: number; b: { b: number } };

// (param_0: number, param_1: string) => { a: number; b: { b: number; }; }
type Shallow = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'shallow'>;

// (param_0: number, param_1: string) => { a: number; b: { a: string, b: number; }; }
type Deep = FunctionOverwrite<(...param: [string, string]) => Obj1, (...param: [number]) => Obj2, 'deep'>;
```
