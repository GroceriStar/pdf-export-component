import React, { Fragment } from 'react'
// Create styles

import { Button } from 'antd'

// @TODO check if this version works - import { DownloadPDFLink } from '~/index'
import { DownloadPDFLink } from '~/DownloadLink/DownloadPDFLink'

// @TODO tests should be. not like right now

// @TODO i don't like this.state.isHidden logic. can be done in more elegant way

// @TODO I want to have a cool animation. So when we click on button Generate PDF File - can we also be able to change the button title?
// 
class GeneratePDFButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  // @TODO {this.toggleHidden.bind(this)} should be moved out from render method
  render () {
    const { type, name, data } = this.props
    return (
      <Fragment>
        {this.state.isHidden &&
          <Button type='primary' icon='file-pdf' size='large'
            onClick={this.toggleHidden.bind(this)}>
                Generate PDF file
          </Button>
        }

        {!this.state.isHidden &&
        <DownloadPDFLink
          type={type} name={name} data={data} />
        }
      </Fragment>
    )
  }
}

export default GeneratePDFButton
