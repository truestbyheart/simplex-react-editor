import { RichUtils } from 'draft-js'

export default () => ({
  customStyleMap: { HIGHLIGHT: { background: '#fffe0d' } },
  keyBindingFn: (e) => {
    if (e.metaKey && e.key === 'h') {
      return 'highlight'
    }
  },
  handleKeyCommand: (command, editorState, { setEditorState }) => {
    if (command === 'highlight') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
      return true
    }
  }
})
