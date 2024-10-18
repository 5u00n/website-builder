import React from 'react';
import { useNode } from '@craftjs/core';

export const Header = ({ text,fontSize,fontWeight,color,textAlign,fontFamily,fontStyle,textDecoration,lineHeight,letterSpacing,wordSpacing,textTransform,textIndent,textShadow,textOverflow,whiteSpace }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <h2 ref={ref => connect(drag(ref))} className="text-2xl font-bold" style={{fontSize:fontSize,fontWeight:fontWeight,color:color,textAlign:textAlign,fontFamily:fontFamily,fontStyle:fontStyle,textDecoration:textDecoration,lineHeight:lineHeight,letterSpacing:letterSpacing,wordSpacing:wordSpacing,textTransform:textTransform,textIndent:textIndent,textShadow:textShadow,textOverflow:textOverflow,whiteSpace:whiteSpace}} >
            {text}
        </h2>
    );
};

export const HeaderDefaultProps = {
    text: 'Header Text',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1.5',
    letterSpacing: '0px',
    wordSpacing: '0px',
    textTransform: 'none',
    textIndent: '0px',
    textShadow: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
};

const HeaderSettings = () => {
    const { text, fontSize, fontWeight, color, textAlign, fontFamily, fontStyle, textDecoration,
        lineHeight, letterSpacing, wordSpacing, textTransform, textIndent, textShadow,
        textOverflow, whiteSpace, actions: { setProp } } = useNode((node) => ({
            text: node.data.props.text,
            fontSize: node.data.props.fontSize,
            fontWeight: node.data.props.fontWeight,
            color: node.data.props.color,
            textAlign: node.data.props.textAlign,
            fontFamily: node.data.props.fontFamily,
            fontStyle: node.data.props.fontStyle,
            textDecoration: node.data.props.textDecoration,
            lineHeight: node.data.props.lineHeight,
            letterSpacing: node.data.props.letterSpacing,
            wordSpacing: node.data.props.wordSpacing,
            textTransform: node.data.props.textTransform,
            textIndent: node.data.props.textIndent,
            textShadow: node.data.props.textShadow,
            textOverflow: node.data.props.textOverflow,
            whiteSpace: node.data.props.whiteSpace,
            actions: node.actions
        }));

    return (
        <div className="space-y-4">
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text</label>
                <input type="text" value={text} onChange={(_, value) => setProp((props) => (props.text = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Size</label>
                <input type="text" value={fontSize} onChange={(_, value) => setProp((props) => (props.fontSize = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Weight</label>
                <input type="text" value={fontWeight} onChange={(_, value) => setProp((props) => (props.fontWeight = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Color</label>
                <input type="text" value={color} onChange={(_, value) => setProp((props) => (props.color = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Align</label>
                <select value={textAlign} onChange={(_, value) => setProp((props) => (props.textAlign = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Family</label>
                <input type="text" value={fontFamily} onChange={(_, value) => setProp((props) => (props.fontFamily = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Font Style</label>
                <input type="text" value={fontStyle} onChange={(_, value) => setProp((props) => (props.fontStyle = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Decoration</label>
                <input type="text" value={textDecoration} onChange={(_, value) => setProp((props) => (props.textDecoration = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Line Height</label>
                <input type="text" value={lineHeight} onChange={(_, value) => setProp((props) => (props.lineHeight = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Letter Spacing</label>
                <input type="text" value={letterSpacing} onChange={(_, value) => setProp((props) => (props.letterSpacing = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Word Spacing</label>
                <input type="text" value={wordSpacing} onChange={(_, value) => setProp((props) => (props.wordSpacing = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Transform</label>
                <input type="text" value={textTransform} onChange={(_, value) => setProp((props) => (props.textTransform = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Indent</label>
                <input type="text" value={textIndent} onChange={(_, value) => setProp((props) => (props.textIndent = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Shadow</label>
                <input type="text" value={textShadow} onChange={(_, value) => setProp((props) => (props.textShadow = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Text Overflow</label>
                <input type="text" value={textOverflow} onChange={(_, value) => setProp((props) => (props.textOverflow = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">White Space</label>
                <input type="text" value={whiteSpace} onChange={(_, value) => setProp((props) => (props.whiteSpace = value), 1000)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
        </div>
    );
};

Header.craft = {
    props: HeaderDefaultProps,
    related: {
        settings: HeaderSettings,
    },
};

