/*
 * Copyright (c) 2016, Egdar U. Joya <eujc21@gmail.com>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons, editorStateFromRaw} from "megadraft";
import DebounceInput from "react-debounce-input";
import hljs from "highlight.js";

import INITIAL_CONTENT from "./default-content";

const {BlockContent, BlockData, CommonBlock} = MegadraftPlugin;

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: editorStateFromRaw(INITIAL_CONTENT)
    };

    this.handleChange = this.handleChange.bind(this);

    this.actions = [
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  handleChange(event) {
    this.props.container.updateData({code: event.target.value});
    document.querySelectorAll("code").forEach((obj, i) => {
      hljs.highlightBlock(obj);
    });
  }

  render(){
    return (
      <CommonBlock {...this.props} actions={this.actions}>
        <BlockContent>
          <pre>
            <code
              className={"megadraft-codeblock-plugin preview"}
              ref={c => this.code = c}>
              {this.props.data.code || "- NO CODE -"}
            </code>
          </pre>
        </BlockContent>
        <BlockData>
          <DebounceInput
            element="textarea"
            minLength={2}
            debounceTimeout={1000}
            onChange={this.handleChange}
            className="megadraft-codeblock-plugin-textarea"/>
        </BlockData>
      </CommonBlock>
    );
  }
}
