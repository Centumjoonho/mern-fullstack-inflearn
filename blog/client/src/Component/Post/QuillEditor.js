import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaRegImage, FaAlignLeft } from 'react-icons/fa'



const CustomToolbar = () => (
    <div id="toolbar">
        <select className="ql-header" defaultValue="">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="">Normal</option>
            {/* ... */}
        </select>
        <button className="ql-bold">""
        </button>
        <button className="ql-italic">""
        </button>
        <button className="ql-underline">""
        </button>
        <button className="ql-link">""
        </button>
        <button className="ql-list" value="ordered">""</button>
        <button className="ql-list" value="bullet">""</button>

        <button className="ql-align" value="left"><FaAlignLeft /></button>
        <button className="ql-align" value="center">""</button>
        <button className="ql-align" value="right">""</button>
        <button className="ql-align" value="justify">""</button>

        <button className="ql-image"><FaRegImage /></button>
        {/* ... Add more buttons */}
    </div>
);

const modules = {
    toolbar: {
        container: '#toolbar',
    },

};

const QuillEditor = (props) => {
    return (
        <>
            <CustomToolbar />
            <ReactQuill modules={modules}
                id='content'
                value={props.Content}
                onChange={(value) => props.setContent(value)} />
        </>
    )
}

export default QuillEditor