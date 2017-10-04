# Styled:Web

Typesafe styled components for Typescript and React-Web

## Why?

Because [styled-components](https://github.com/styled-components/styled-components) almost get it right. Styling in pure Javascript has massive simplicity advantages.

## Performance

Currently this creates inline styles on every element. This may have *small* performance implications depending on your app. Benchmark and decide if this is a problem.

## Usage

> npm install @mcrowe/styled --save

```js
import * as Styled from '@mcrowe/styled-web'

const Container = Styled.view({
  backgroundColor: 'green',
  paddingHorizontal: 12
})

const Title = Styled.text({
  fontSize: 30
})

const MyComponent = () =>
  <Container>
    <Title>Hello, World!</Title>
  </Container>
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.
