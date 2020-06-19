import React from 'react';
import {useSelector} from 'react-redux';
import './text-with-search-hilite.css';
import {State} from "../state";

const TextWithSearchHilite = (props: Props) => {
  const {text} = props;
  const searchTerm = useSelector((state: State) => state.searchTerm);
  const regEx = new RegExp(searchTerm, 'gi');
  const matches = text.match(regEx);
  if (searchTerm !== '' && matches !== null) {
    const textArray = text.split(matches[0]);
    return (<span key={text}>{textArray.map(
      (s: string, index: number) => {
        if (index < textArray.length - 1) {
          return <span key={s}><span>{s}</span><span className="hilite">{matches[0]}</span></span>
        }
        return <span key={s}>{s}</span>
      }
    )}</span>);
  }

  return <span>{text}</span>;
};

interface Props {
  text: string
}

export default TextWithSearchHilite;
