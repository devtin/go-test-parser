<div><h1>go-test-parser</h1></div>

<p>
    <a href="https://www.npmjs.com/package/go-test-parser" target="_blank"><img src="https://img.shields.io/npm/v/go-test-parser.svg" alt="Version"></a>
<a href="http://opensource.org/licenses" target="_blank"><img src="http://img.shields.io/badge/License-MIT-brightgreen.svg"></a>
</p>

<p>
    Parses go  tests into an object
</p>

## Manifesto

Since nothing describes better what a software does than its tests, in order to make easy the documentation process, I
want to be able to parse the content of a go test file.

## Installation

```sh
$ npm i go-test-parser --save
# or
$ yarn add go-test-parser
```

## Features

- [Parses go test syntax](#parses-go-test-syntax)


<a name="loads-entities-from-directory"></a>

## Parses go test syntax

Take the following go test file:

```go
// go_test.go
package fixtures

import (
	"testing"

	. "github.com/smartystreets/goconvey/convey"
)

func SomeTest(t *testing.T) {
	// some setup

	Convey("Test A", t, func() {
		Convey("Test A-1", func() {
			// some
			// test
			// code
			// block
		})
		Convey("Test A-2", func() {
			// some
			// test
			// code
			// block
		})
	})

	Convey("Test B", t, func() {
		Convey("Test B-1", func() {
			// some
			// test
			// code
			// block
		})
		Convey("Test B-2", func() {
			// some
			// test
			// code
			// block
		})
	})
}
```
...and the following script:

```js
const { parse } = require('go-test-parser')
const { readFileSync } = require('fs')

console.log(parse(readFileSync('go_test.go').toString()))
```
would produce the following output:

```json
[
  {
    "title": "SomeTest",
    "start": 8,
    "end": 40,
    "Convey": [
      {
        "Convey": [
          {
            "Convey": [],
            "code": "// some\n// test\n// code\n// block",
            "end": 5,
            "start": 0,
            "title": "Test A-1",
          },
          {
            "Convey": [],
            "code": "// some\n// test\n// code\n// block",
            "end": 11,
            "start": 6,
            "title": "Test A-2",
          },
        ],
        "code": "Convey(\\\"Test A-1\\\", func() {\n	// some\n	// test\n	// code\n	// block\n})\nConvey(\\\"Test A-2\\\", func() {\n	// some\n	// test\n	// code\n	// block\n})",
        "end": 15,
        "start": 2,
        "title": "Test A",
      },
      {
        "Convey": [
          {
            "Convey": [],
            "code": "// some\n// test\n// code\n// block",
            "end": 5,
            "start": 0,
            "title": "Test B-1",
          },
          {
            "Convey": [],
            "code": "// some\n// test\n// code\n// block",
            "end": 11,
            "start": 6,
            "title": "Test B-2",
          },
        ],
        "code": "Convey(\\\"Test B-1\\\", func() {\n	// some\n	// test\n	// code\n	// block\n})\nConvey(\\\"Test B-2\\\", func() {\n	// some\n	// test\n	// code\n	// block\n})",
        "end": 30,
        "start": 17,
        "title": "Test B",
      },
    ],
    "code": "// some setup\n\nConvey(\\\"Test A\\\", t, func() {\n	Convey\n(\\\"Test A-1\\\", func() {\n		// some\n		// test\n		// code\n		// block\n	})\n	Convey(\\\"Test A-2\\\", func() {\n		// some\n		// test\n		// code\n		// block\n	})\n})\n\nConvey(\\\"Test B\\\", t, func() {\n	Convey(\\\"Test B-1\\\", func() {\n		// some\n		// test\n		// code\n		// block\n	})\n	Convey(\\\"Test B-2\\\", func() {		// some		// test		// code		// block	})\n})",
  },
]
```

* * *

### License

[MIT](https://opensource.org/licenses/MIT)

&copy; 2021-present Martin Rafael Gonzalez <tin@devtin.io>
