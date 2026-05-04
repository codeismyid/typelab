[typelab](../README.md) / [aliases](../aliases.md) / Class

```ts
type new Class(...param): Instance;
```

Type that represents a class constructor that takes specified parameters types and returns an instance of a specified type.

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

`Instance`

## Example

```ts
// C is a class
// with constructor(id: number, name: string)
// and {id: number, name: string} as instance and prototype
type C = Class<[id: number, name: string], {id: number, name: string}>;
```
