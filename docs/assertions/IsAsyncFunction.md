[typelab](../README.md) / [assertions](../assertions.md) / IsAsyncFunction

```ts
type IsAsyncFunction<T> = _IsTrue<IfAsyncFunction<T, true, false>>;
```

Checks if a given type `T` is an async function type.

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

`true` if `T` is an async function type, `false` otherwise.

## Example

```ts
type Valid = IsAsyncFunction<() => Promise<string>>; // true
type Invalid = IsAsyncFunction<() => string>; // false
```
