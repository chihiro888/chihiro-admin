import dynamic from 'next/dynamic'
import * as React from 'react'
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor'
import { TuiEditorWithForwardedProps } from './tui-editor-wrapper'
import { upload } from 'src/apis/image'

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

  // 에디터에서 이미지 업로드
  const uploadImage = async (blob: Blob | File) => {
    // 파라미터 생성
    const formData = new FormData()
    formData.append('files', blob)
    formData.append('note', 'editor')

    // API 호출
    const { data: res } = await upload(formData)

    // 처리가 정상이 아닌 경우
    if (res.statusCode !== 200) {
      return ''
    }

    // 처리가 정상인 경우 URL 반환
    const { data } = res
    const url = data[0].url

    return url
  }

  React.useEffect(() => {
    if (!editorRef.current) {
      return
    }
    if (props.initialValue) {
      const instance = editorRef.current.getInstance()
      instance.setHTML(props.initialValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef.current])

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
      <>
        <EditorWithForwardedRef
          initialValue={props.initialValue ? props.initialValue : ''}
          placeholder="내용을 입력해주세요."
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          ref={editorRef}
          useCommandShortcut={false}
          hideModeSwitch={true}
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
          ]}
          onChange={handleChange}
          hooks={{
            // 이미지 서버 사이드 업로드
            // https://paigekim29.medium.com/toast-ui-editor-next-js-c9b48927fbf7
            addImageBlobHook: async (blob, callback) => {
              // 이미지 업로드
              const uploadedImageURL = await uploadImage(blob)

              // 업로드된 이미지 URL을 에디터에 삽입
              callback(uploadedImageURL, '')

              return false
            }
          }}
        />
      </>
    </>
  )
}

export default ToastEditor
