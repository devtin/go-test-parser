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
