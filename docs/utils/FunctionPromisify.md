[typelab](../README.md) / [utils](../utils.md) / FunctionPromisify

```ts
type FunctionPromisify<T> = [ExtractParams<T>, ExtractReturn<T>] extends [infer Params, infer Return] ? [Params, Return] extends [[...(infer K), (error, result) => Any], Any] ? (...param) => Promise<R> : (...param) => Promise<Return> : never;
```

Converts a `Function` type that returns a `Promise` instead of the original return type.

If the `Function` takes a callback (e.g., `(error, result) => void`), it converts the `Function`
to return a `Promise` with the callback result. Otherwise, it wraps the return type in a `Promise`.

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

`T` *extends* [`Fn`](../aliases/Fn.md)

</td>
<td>

The `Function` type to convert.

</td>
</tr>
</tbody>
</table>

## Returns

A new `Function` type that returns a `Promise`.

## Example

```ts
// Callback-style function:
// (a: string) => Promise<string>
type Promisified = FunctionPromisify<(a: string, callback: (error: Error, result: string) => void) => void>;

// Regular function:
// (a: string) => Promise<string>
type PromisifiedFn = FunctionPromisify<(a: string) => string>;
```
