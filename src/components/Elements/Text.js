import React from 'react';
import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import ContentEditable from 'react-contenteditable';

export const Text = ({ text,...props}) => {
  const {
    connectors: { connect, drag },
    selected,
    actions:{
        setProp
    },
  } = useNode((state)=>(
    {
      selected: state.events.selected,
      dragged: state.events.dragged,
    }
  ));

  const [editable, setEditable] = useState(false);

  useEffect(()=>{
    if(selected){
      return
    }
    setEditable(false)
  },[selected])

  return (
    <div
    className="p-2 bg-gray-100 rounded"
    {...props}
     ref={(ref) => connect(drag(ref))}
     onClick={()=> selected && setEditable(true)}
     >
      <ContentEditable html={text} onChange={(e)=> setProp(e.target.value)}
      tagName="p"
      disabled={!editable}
      className="outline-none"
      onBlur={()=> setEditable(false)}
      />
    </div>
  );
};

export const TextDefaultProps = {
  text: "Default Text",
  fontSize: "16px",
  fontWeight: "normal",
  color: "#000000",
  textAlign: "left",
  fontFamily: "Arial",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1.5",
  letterSpacing: "0px",
  wordSpacing: "0px",
  textTransform: "none",
  textIndent: "0px",
  textShadow: "none",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
}

const TextSettings = () => {
    const { 
        fontSize, fontWeight, color, textAlign, fontFamily, fontStyle, textDecoration, 
        lineHeight, letterSpacing, wordSpacing, textTransform, textIndent, textShadow, 
        textOverflow, whiteSpace, 
        actions: { setProp } // Add this line to destructure setProp
    } = useNode((state) => ({
        fontSize: state.fontSize,
        fontWeight: state.fontWeight,
        color: state.color,
        textAlign: state.textAlign,
        fontFamily: state.fontFamily,
        fontStyle: state.fontStyle,
        textDecoration: state.textDecoration,
        lineHeight: state.lineHeight,
        letterSpacing: state.letterSpacing,
        wordSpacing: state.wordSpacing,
        textTransform: state.textTransform,
        textIndent: state.textIndent,
        textShadow: state.textShadow,
        textOverflow: state.textOverflow,
        whiteSpace: state.whiteSpace,
    }));

    return (
        <div>
            <div>
                <label>Font Size</label>
                <input type="text" value={fontSize} onChange={(e) => setProp({ fontSize: e.target.value })} />
            </div>
            <div>
                <label>Font Weight</label>
                <input type="text" value={fontWeight} onChange={(e) => setProp({ fontWeight: e.target.value })} />
            </div>
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={(e) => setProp({ color: e.target.value })} />
            </div>
            <div>
                <label>Text Align</label>
                <select value={textAlign} onChange={(e) => setProp({ textAlign: e.target.value })}>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div>
                <label>Font Family</label>
                <input type="text" value={fontFamily} onChange={(e) => setProp({ fontFamily: e.target.value })} />
            </div>
            <div>
                <label>Font Style</label>
                <input type="text" value={fontStyle} onChange={(e) => setProp({ fontStyle: e.target.value })} />
            </div>
            <div>
                <label>Text Decoration</label>
                <input type="text" value={textDecoration} onChange={(e) => setProp({ textDecoration: e.target.value })} />
            </div>
            <div>
                <label>Line Height</label>
                <input type="text" value={lineHeight} onChange={(e) => setProp({ lineHeight: e.target.value })} />
            </div>
            <div>
                <label>Letter Spacing</label>
                <input type="text" value={letterSpacing} onChange={(e) => setProp({ letterSpacing: e.target.value })} />
            </div>
            <div>
                <label>Word Spacing</label>
                <input type="text" value={wordSpacing} onChange={(e) => setProp({ wordSpacing: e.target.value })} />
            </div>
            <div>
                <label>Text Transform</label>
                <input type="text" value={textTransform} onChange={(e) => setProp({ textTransform: e.target.value })} />
            </div>
            <div>
                <label>Text Indent</label>
                <input type="text" value={textIndent} onChange={(e) => setProp({ textIndent: e.target.value })} />
            </div>
            <div>
                <label>Text Shadow</label>
                <input type="text" value={textShadow} onChange={(e) => setProp({ textShadow: e.target.value })} />
            </div>
            <div>
                <label>Text Overflow</label>
                <input type="text" value={textOverflow} onChange={(e) => setProp({ textOverflow: e.target.value })} />
            </div>
            <div>
                <label>White Space</label>
                <input type="text" value={whiteSpace} onChange={(e) => setProp({ whiteSpace: e.target.value })} />
            </div>
        </div>
    );
}

Text.craft = {
    props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
