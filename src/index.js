import React from 'react'
import Draft, { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import { stateToHTML } from 'draft-js-export-html'
import CodeUtils from 'draft-js-code'
import PropTypes from 'prop-types'
import mediaBlockRenderer from './Entity/mediaBlockEntity'
import Toolbar from './Toolbar'
import imageUpload from './Image-upload/image-upload'
import './styles.css'

class SimplexEditor extends React.Component {
  static PropTypes ={
    getArticle: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
  }

  onChange = editorState => {
    this.setState({ editorState })
    const rawHtml = stateToHTML(editorState.getCurrentContent())
    // eslint-disable-next-line react/prop-types
    this.props.getArticle(rawHtml)
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    )
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  };

  onURLChange = e => this.setState({ urlValue: e.target.value });

  onAddImage = imageUrl => {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: imageUrl }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    console.log(entityKey)
    const newEditorState = EditorState.set(
      editorState,
      { currentContent: contentStateWithEntity },
      'create-entity'
    )
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      )
    })
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    )
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
    )
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType))
  };

  getBlockStyle = block => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      case 'left':
        return 'text-left'
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      case 'justify':
        return 'text-justify'
      default:
        return null
    }
  };

  updateState = editorState => {
    this.setState({ editorState })
  };

  imageUrlGet = e => {
    imageUpload(e).then(res => {
      this.onAddImage(res)
    })
  };

  handleKeyCommand = command => {
    const { editorState } = this.state
    let newState

    if (CodeUtils.hasSelectionInBlock(editorState)) {
      newState = CodeUtils.handleKeyCommand(editorState, command)
    }

    if (!newState) {
      newState = RichUtils.handleKeyCommand(editorState, command)
    }

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  };

  keyBindingFn = evt => {
    const { editorState } = this.state
    if (!CodeUtils.hasSelectionInBlock(editorState)) {
      return Draft.getDefaultKeyBinding(evt)
    }

    const command = CodeUtils.getKeyBinding(evt)

    return command || Draft.getDefaultKeyBinding(evt)
  };

  handleReturn = evt => {
    const { editorState } = this.state
    if (!CodeUtils.hasSelectionInBlock(editorState)) return 'not-handled'

    this.onChange(CodeUtils.handleReturn(evt, editorState))
    return 'handled'
  };

  onTab = evt => {
    const { editorState } = this.state
    if (!CodeUtils.hasSelectionInBlock(editorState)) return 'not-handled'

    this.onChange(CodeUtils.onTab(evt, editorState))
    return 'handled'
  };

  render() {
    console.log(this.props)
    const { editorState } = this.state
    return (
      <div>
        <div className='editor'>
          <div className='editor__box'>
            <Toolbar
              editorState={editorState}
              updateState={this.updateState}
              onToggle={this.toggleBlockType}
              imageUploader={this.imageUrlGet}
            />
            <Editor
              blockStyleFn={this.getBlockStyle}
              blockRendererFn={mediaBlockRenderer}
              editorState={editorState}
              onChange={this.onChange}
              plugins={this.plugins}
              keyBindingFn={this.keyBindingFn}
              handleKeyCommand={this.handleKeyCommand}
              handleReturn={this.handleReturn}
              onTab={this.onTab}
              refs='editor'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SimplexEditor
