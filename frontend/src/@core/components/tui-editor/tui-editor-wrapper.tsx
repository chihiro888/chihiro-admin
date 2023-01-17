import React from 'react'
import { Editor, EditorProps } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>
}

export default (props: TuiEditorWithForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} plugins={[colorSyntax]} />
)
