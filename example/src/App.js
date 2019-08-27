import React, { Component } from 'react';

import SimplexEditor from 'simple-react-editor';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      body: {},
      editableBody: ''
    };
  }

  getBodyContent = value => {
    this.setState({ body: value });
  };

  getUpdatedData = value => {
    this.setState({editableBody: value})
  }
  htmlBody = `<p>The underlying principle of the draft-to-final-render process is to make image creation efficient (<a href=\"https://www.oreilly.com/library/view/rendering-in-sketchup/9781118330012/h1-642191c20-0002.html#figure20-7\">Fig. 20.7</a>). The initial and subsequent render will usually reveal flaws with textures, lighting, camera angles, and model detail. These values and details will need to be adjusted and another draft will need to be run and evaluated. Starting with high quality settings with full-model detail visible is inefficient due to long render times.</p>\n<p><img alt=\"c20f007.tif\" height=\"511\" src=\"https://www.oreilly.com/library/view/rendering-in-sketchup/9781118330012/image_fi/642191c20/c20f007.png\" width=\"750\"/><a href=\"https://www.oreilly.com/library/view/rendering-in-sketchup/9781118330012/h1-642191c20-0002.html#figureanchor20-7\"></br><strong>Fig. 20.7:</strong></a> Draft-to-final-render flowchart</p>\n<p><br></p>\n<p><br></p>\n<h2>Number of Drafts</h2>\n<p>There is no set number of drafts that should be run. You make that subjective determination based on your goals and what is acceptable as a final rendering. However, experience has shown that for most models, five to ten drafts are usually needed to get the settings and values correct for the final graphic (<a href=\"https://www.oreilly.com/library/view/rendering-in-sketchup/9781118330012/h1-642191c20-0002.html#figure20-8\">Fig. 20.8</a>).</p>\n<h2>Completing and Saving Draft Renders</h2>\n<p>It is not always necessary to let a draft render processes to completion. The IRP preview window allows you to watch the render progress. Usually, you can catch the flaws in a render from the onset when the image begins to coalesce. The more experienced you become with the process, the easier it will be to catch flaws and changes in the image.</p>\n<p>Regardless of whether the draft render is complete, save the draft image. Most IRPs can save a render while it’s processing or after it’s been stopped. Having a visual record ...</p>\n<p><br></p>\n<figure><img src=\"https://res.cloudinary.com/dkqqm2qwn/image/upload/v1567614962/Image_from_iOS_1_pgz5fw.jpg\"/></figure>\n<p><br></p><br/> <p>end</p>`

  render() {
    return (
      <div className='container'>
        <label htmlFor='editor'>Simplex Editor</label>
        {/* <SimplexEditor getArticle={this.getBodyContent} /> */}
        <br/> <br/>
        <label htmlFor='editor'>Simplex Editor: with initial content</label>
        <SimplexEditor getArticle={this.getUpdatedData} content={this.htmlBody}/>
      </div>
    );
  }
}
