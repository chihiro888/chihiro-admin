import dynamic from 'next/dynamic'
import * as React from 'react'
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor'
import { TuiEditorWithForwardedProps } from './tui-editor-wrapper'

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import('./tui-editor-wrapper'),
  { ssr: false }
)
const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
))

interface Props extends EditorProps {
  onChange(value: string): void

  valueType?: 'markdown' | 'html'
}

const ToastEditor: React.FC<Props> = (props) => {
  const editorRef = React.useRef<EditorType>()

  React.useEffect(() => {
    if (!editorRef.current) {
      return
    }
    const instance = editorRef.current.getInstance()
    instance.setHTML(props.initialValue ? props.initialValue : '')
  }, [props.initialValue, editorRef])

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return
    }

    const instance = editorRef.current.getInstance()
    const valueType = props.valueType || 'html'

    props.onChange(
      valueType === 'markdown' ? instance.getMarkdown() : instance.getHTML()
    )
  }, [props, editorRef])

  return (
    <>
      <EditorWithForwardedRef
        initialValue={props.initialValue}
        placeholder="내용을 입력해주세요."
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        ref={editorRef}
        useCommandShortcut={false}
        hideModeSwitch={true}
        usageStatistics={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'link'],
          ['code', 'codeblock']
        ]}
        onChange={handleChange}
      />
    </>
  )
}

export default ToastEditor
