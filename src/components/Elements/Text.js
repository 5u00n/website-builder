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
      <ContentEditable html={text} onChange={(e)=> setProp(
        (props) =>
            (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')),
          500
        
      )}
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
    } = useNode((node) => ({
        text:node.data.props.text,
        fontSize:node.data.props.fontSize,
        fontWeight:node.data.props.fontWeight,
        color:node.data.props.color,
        textAlign:node.data.props.textAlign,
        fontFamily:node.data.props.fontFamily,
        fontStyle:node.data.props.fontStyle,
        textDecoration:node.data.props.textDecoration,
        lineHeight:node.data.props.lineHeight,
        letterSpacing:node.data.props.letterSpacing,
        wordSpacing:node.data.props.wordSpacing,
        textTransform:node.data.props.textTransform,
        textIndent:node.data.props.textIndent,
        textShadow:node.data.props.textShadow,
        textOverflow:node.data.props.textOverflow,
        whiteSpace:node.data.props.whiteSpace,
    }));

    return (
        <div className="space-y-4">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Size</label>
                <input type="number" value={fontSize} onChange={(e) => setProp({ fontSize: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Weight</label>
                <input type="text" value={fontWeight} onChange={(e) => setProp({ fontWeight: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Color</label>
                <input type="color" value={color} onChange={(e) => setProp({ color: e.target.value })} className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Align</label>
                <select value={textAlign} onChange={(e) => setProp({ textAlign: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Family</label>
                <input type="text" value={fontFamily} onChange={(e) => setProp({ fontFamily: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Style</label>
                <input type="text" value={fontStyle} onChange={(e) => setProp({ fontStyle: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Decoration</label>
                <input type="text" value={textDecoration} onChange={(e) => setProp({ textDecoration: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Line Height</label>
                <input type="text" value={lineHeight} onChange={(e) => setProp({ lineHeight: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Letter Spacing</label>
                <input type="text" value={letterSpacing} onChange={(e) => setProp({ letterSpacing: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Word Spacing</label>
                <input type="text" value={wordSpacing} onChange={(e) => setProp({ wordSpacing: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Transform</label>
                <input type="text" value={textTransform} onChange={(e) => setProp({ textTransform: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Indent</label>
                <input type="text" value={textIndent} onChange={(e) => setProp({ textIndent: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Shadow</label>
                <input type="text" value={textShadow} onChange={(e) => setProp({ textShadow: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Overflow</label>
                <input type="text" value={textOverflow} onChange={(e) => setProp({ textOverflow: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">White Space</label>
                <input type="text" value={whiteSpace} onChange={(e) => setProp({ whiteSpace: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
