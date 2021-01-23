import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';

type Qprops = {
  i: number,
  bun: string,
  tex: string,
  syutten: string,
  level: number
}

function MarkdownRender(props) {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: (props) =>
        <MathJax.Node formula={props.value} />,
      inlineMath: (props) =>
        <MathJax.Node inline formula={props.value} />
    }
  };
  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...newProps} />
    </MathJax.Provider>
  );
}


export function Question({i, bun, tex, syutten, level }: Qprops) {
  return (
    <div className={(`overflow-hidden w-auto text-left rounded-lg shadow-lg mr-2 my-2 no-underline p-6`)}>
      <h2 className="text-xl font-bold mb-4">
      <FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={['fas', 'check-square']} />
      問題{i}</h2>
      
      <div className="mb-4">{bun}</div>
      <div className="text-xl">
        <MarkdownRender source={tex} />
      </div>

      <hr className="border-gray-400 my-3" />
      <div>出典: {syutten} / 難易度: {level}</div>
    </div>
  )
};

export function MathList({ questions }) {
  const que = questions.map((q, i) => {
    i += 1;
    return(
    <Question
      i={i}
      key={q.id}
      bun={q.bun}
      tex={q.tex}
      syutten={q.syutten}
      level={q.level}
    />
    )
  })
  return (
    <div className="">
      {que}
    </div>
  )
};
