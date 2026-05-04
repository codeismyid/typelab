[typelab](../README.md) / [utils](../utils.md) / ArrayToObject

```ts
type ArrayToObject<T> = T extends ReadonlyArray ? _IfNotAnyOrNever<T, _ArrayToObject<T>> : never;
```

Converts an `Array` or `Tuple` type into an `object` type with numeric keys.

- For a `Tuple`, keys are the `Tuple` indices and values are the corresponding elements.
- For an `Array`, the keys are numbers and values are the `Array` elements.

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

`T`

</td>
<td>

The `Array` or `Tuple` type to convert.

</td>
</tr>
</tbody>
</table>

## Returns

An `object` type where:

## Example

```ts
// { 0: string, 1: number }
type Result1 = ArrayToObject<[string, number]>;

// { [x: number]: string }
type Result2 = ArrayToObject<string[]>;

// never
type Never = ArrayToObject<any>;
```
