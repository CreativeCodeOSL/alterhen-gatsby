import React from 'react'
import PropTypes from 'prop-types'
import { ExhibitionPageTemplate } from '../../templates/exhibition-page'

const ExhibitionPagePreview = ({ entry, getAsset }) => {
  const entryObjkts = entry.getIn(['data', 'objkts'])
  const objkts = entryObjkts ? entryObjkts.toJS() : []

  return (
    <ExhibitionPageTemplate
      artist={entry.getIn(['data', 'artist'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      objkts={{ objkts }}
    />
  )
}

ExhibitionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ExhibitionPagePreview
