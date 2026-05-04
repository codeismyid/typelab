[typelab](../README.md) / [aliases](../aliases.md) / NewableFunction

```ts
type NewableFunction<Params, Return> = Object;
```

Type that represents a newable function that takes specified parameters types and returns a specified type.

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

## Example

```ts
// MyNewableFunction is new (param_0: number, param_1: string) => string`
type MyNewableFunction = NewableFunction<[number, string], string>;
```
