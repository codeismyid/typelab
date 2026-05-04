[typelab](../README.md) / [utils](../utils.md) / FunctionCallbackify

```ts
type FunctionCallbackify<T, ErrorType> = (...param) => void;
```

Converts an `Async Function` type into a `Callback-style Function`.

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

`T` *extends* [`Fn`](../aliases/Fn.md)\<[`Any`](../aliases/Any.md), [`Promise`](#)\<[`Any`](../aliases/Any.md)\>\>

</td>
<td>

&hyphen;

</td>
<td>

The `Function` type that returns a `Promise`.

</td>
</tr>
<tr>
<td>

`ErrorType`

</td>
<td>

`unknown`

</td>
<td>

&hyphen;

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

\[`...ExtractParams<T>`, (`error`, `result`) => `void`\]

</td>
</tr>
</tbody>
</table>

## Returns

`void`

A new `Function` type that accepts a callback for error handling and result.

## Example

```ts
// (a: string, callback: (error: unknown, result: string) => void) => void
type Callbackified = FunctionCallbackify<(a: string) => Promise<string>>;
```
