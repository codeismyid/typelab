[typelab](../README.md) / [utils](../utils.md) / ObjectAssign

```ts
type ObjectAssign<Target, Source> = _ObjectAssignPreCheck<Target, Source, Target extends Primitive ? _ObjectAssignPrimitive<Target, Source> : Target extends ReadonlyArray ? _ObjectAssignArray<Target, Source> : IsObjectLiteral<Target> extends true ? _ObjectAssignObject<Target, Source> : Target & Source>;
```

Assign properties of `Source` into `Target`.

The result of type follows the actual result of `Object.assign`.

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

`Target`

</td>
<td>

&hyphen;

</td>
<td>

The type to receive the assignment.

</td>
</tr>
<tr>
<td>

`Source`

</td>
<td>

`never`

</td>
<td>

The type to be assigned to the `Target`.

</td>
</tr>
</tbody>
</table>

## Returns

A new type that combines both `Target` and `Source`.

## Example

```ts
// { a: string; b: string; c: boolean }
type Assign1 = ObjectAssign<{ a: string; b: number }, { b: string; c: boolean }>;

// { a: string; 0: string }
type Assign2 = ObjectAssign<{ a: string }, [string]>;

// { [x: number]: string, a: string }
type Assign3 = ObjectAssign<{ a: string }, string[]>;

// [number, number]
type Assign4 = ObjectAssign<[string], [number, number]>;

// (string | number)[]
type Assign5 = ObjectAssign<string[], [number, number]>;

// (string | number)[]
type Assign6 = ObjectAssign<string[], number[]>;

// [number, string]
type Assign7 = ObjectAssign<[string], { 0: number; 1: string }>;

// (string | number)[]
type Assign8 = ObjectAssign<[number], 'str'>;

// { [x: number]: string, a: string }
type Assign9 = ObjectAssign<{a: string}, 'str'>;
```
