# React Native Skeletons

Fully customizable small library with no extra dependencies for creating animated loading skeletons.

## Installation

```sh
yarn add react-native-skeletons
```

or

```sh
npm install react-native-skeletons
```

## Usage

Simple skeleton:

```js
<Skeleton width={'100%'} height={14} />
```

Skeleton with circle prop:

```js
<Skeleton circle width={40} height={40} />
```

Skeleton with count prop:

```js
<Skeleton count={4} width={'100%'} height={14} />
```


## Props Reference

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>color</code></td>
            <td>The background color of the skeleton.</td>
            <td><code>#ebebeb</code></td>
        </tr>
        <tr>
            <td><code>width</code></td>
            <td>The width of the skeleton.</td>
            <td><code>100%</code></td>
        </tr>
        <tr>
            <td><code>height</code></td>
            <td>The height of each skeleton line.</td>
            <td></td>
        </tr>
        <tr>
            <td><code>borderRadius</code></td>
            <td>The border radius of the skeleton.</td>
            <td><code>4</code></td>
        </tr>
        <tr>
            <td><code>count</code></td>
            <td>The number of lines of skeletons.</td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td><code>circle</code></td>
            <td>
                Makes the skeleton circular by setting <code>borderRadius</code> to
                <code>50%</code>.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>style</code></td>
            <td>
                A custom style for the individual skeleton elements which is used
                alongside the default style
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>containerStyle</code></td>
            <td>
                A custom style for the container of multiple skeletons that wraps the
                individual skeleton elements. NOTE: this will only apply when count value is greater than 1, else you can use <code>style</code>
            </td>
            <td></td>
        </tr>
         <tr>
            <td><code>spacing</code></td>
            <td>
               Value for setting <code>marginBottom</code> when using with multiple skeleton elements. NOTE: this will only apply when count value is greater than 1
            </td>
            <td></td>
        </tr>
    </tbody>
</table>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
