import React, { Component } from 'react';
import Simditor from 'simditor';
import $ from 'jquery';

import './simditor.css';
class MySimditor extends Component { 
  constructor(props){
    super(props);
    this.toolbar =[
              'title',
              'bold',
              'italic',
              'underline',
              'strikethrough',
              'fontScale',
              'color',
              'ol' ,
              'ul' ,
              'blockquote',
              'code',
              'table',
              'link',
              'image',
              'hr',
              'indent',
              'outdent',
              'alignment',
            ]
    $.ajaxSetup({
        xhrFields: {
          withCredentials: true
        }
    })
  }
  componentDidMount(){
    this.editor = new Simditor({
      textarea: $(this.textarea), 
      toolbar:this.toolbar,
      upload:{
        url: this.props.url,
        fileKey: 'upload'
      }           
    });
    this.editor.on('valuechanged',()=>{
      this.props.LoadDetailImg(this.editor.getValue())
    })
  }
  render() { 
    return (
      <textarea ref={(textarea)=>{this.textarea=textarea}} 
      ></textarea>
    )
  }
}

export default MySimditor;