[typelab](../README.md) / [utils](../utils.md) / ObjectPathValue

```ts
type ObjectPathValue<T, K> = K extends "" ? T : K extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends ObjectPath<T[Key]> ? ObjectPathValue<T[Key], Rest> : ObjectPath<T[Key]> : never : K extends keyof T ? T[K] : K extends `${infer Key extends number}` ? Key extends keyof T ? T[Key] : never : never;
```

Get the type of a property based on a given path.

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

The `object` type to extract value from.

</td>
</tr>
<tr>
<td>

`K` *extends* [`ObjectPath`](ObjectPath.md)\<`T`\> \| `""`

</td>
<td>

The path `string` to navigate through the `object`.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the property at the specified path.

## Example

```ts
type Obj = { a: { b: number }; c: string };
type ValueType = ObjectPathValue<Obj, 'a.b'>; // number
```
