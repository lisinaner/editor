// src/Tiptap.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { Paragraph } from './Paragraph.tsx'
// define your extension array
const extensions = [ StarterKit.configure({
    paragraph: false,
  }),
  Paragraph,]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor} >This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor} >This is the bubble menu</BubbleMenu>
    </>
  )
}

const App = () => {
    return (
      <div className="card">
        <Tiptap />
      </div>
    )
  }
  
  export default App