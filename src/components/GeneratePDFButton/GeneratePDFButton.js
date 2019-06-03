import React, { Fragment } from 'react'
// Create styles

import { Button } from 'antd'

// @TODO check if this version works - import { DownloadPDFLink } from '~/index'
import { DownloadPDFLink } from '~/DownloadLink/DownloadPDFLink'

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
