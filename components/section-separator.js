export default function SectionSeparator({m = ['10','16']}) {
  return <hr className={(`border-2 border-gray-200 ${'mt-' + m[0]} ${'mb-' + m[1]}`)} />
}
