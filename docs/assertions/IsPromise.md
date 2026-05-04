[typelab](../README.md) / [assertions](../assertions.md) / IsPromise

```ts
type IsPromise<T> = _IsTrue<IfPromise<T, true, false>>;
```

Checks if a given type `T` is a `Promise` type.

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

The type to be checked.

</td>
</tr>
</tbody>
</table>

## Returns

`true` if `T` is a `Promise` type, `false` otherwise.

## Example

```ts
type Valid = IsPromise<Promise<string>>; // true
type Invalid = IsPromise<string>; // false
```
