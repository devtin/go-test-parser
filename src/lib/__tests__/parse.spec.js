import { readFileSync } from 'fs'
import path from 'path'
import {
    parse,
    getStringIndent,
    unIndentString,
    getFnBlockedContent,
} from '../parse'

const goTestFileFixture = readFileSync(path.join(__dirname, './fixtures/some_test.go')).toString()
const goTestConveyFixture = readFileSync(path.join(__dirname, './fixtures/convey_test.go')).toString()

describe('getStringIndent()', () => {
    it('returns the minimum amount of indentation found in given text', () => {
        const indent = getStringIndent(`  abc\n    123\n  do re mi`)
        expect(indent).toEqual(2)
    })
})

describe('unIndentString()', () => {
    it('removes the minimum amount of indentation found in given text', () => {
        const unIndented = unIndentString(`  abc\n    123\n  do re mi`)
        expect(unIndented).toEqual(`abc\n  123\ndo re mi`)
    })
})

describe('getFnBlockedContent()', () => {
    it('retrieves metadata from a particular set of convey functions', () => {
        const parsedTree = getFnBlockedContent(goTestConveyFixture, ['Convey'])
        expect(parsedTree).toMatchSnapshot()
    })
})

describe('parse()', () => {
    it('retrieves metadata from a go test file', () => {
        const parsedTree = parse(goTestFileFixture)
        expect(parsedTree).toMatchSnapshot()
    })
})
