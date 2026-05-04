[typelab](../README.md) / [aliases](../aliases.md) / Function

```ts
type Function<Params, Return> = (...param) => Return;
```

Type that represents a function that takes specified parameters types and returns a specified type.

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

`Params` *extends* [`ReadonlyArray`](ReadonlyArray.md)

</td>
<td>

[`Any`](Any.md)[]

</td>
<td>

The parameters types of the function as an array, defaults to `any[]`.

</td>
</tr>
<tr>
<td>

`Return`

</td>
<td>

[`Any`](Any.md)

</td>
<td>

The return type of the function, defaults to `any`.

</td>
</tr>
</tbody>
</table>

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

...`param`

</td>
<td>

`Params`

</td>
</tr>
</tbody>
</table>

## Returns

`Return`

## Example

```ts
// MyFunction is (param_0: number, param_1: string) => string
type MyFunction = Function<[number, string], string>;
```
