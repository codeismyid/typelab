[typelab](../README.md) / [utils](../utils.md) / ExtractPromise

```ts
type ExtractPromise<T> = T extends Promise<infer U> ? U : never;
```

Extract the value type from a `Promise` type.

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

`T` *extends* [`Promise`](#)\<[`Any`](../aliases/Any.md)\>

</td>
<td>

The input type which should be a `Promise`.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the return value in the `Promise`, or never if `T` is not a `Promise`.

## Example

```ts
type Valid = ExtractPromise<Promise<number>>; // number
type Invalid = ExtractPromise<number>> // never
```
