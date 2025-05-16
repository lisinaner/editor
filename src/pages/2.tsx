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
  import { renderToReactElement } from '@tiptap/static-renderer/pm/react'
const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  })

  renderToReactElement({
    extensions: [StarterKit], // using your extensions
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Hello World!',
            },
          ],
        },
      ],
    },
  })
  
}

const App = () => {
    return (
      <div className="card">
        <Tiptap />
      </div>
    )
  }
  
  export default App