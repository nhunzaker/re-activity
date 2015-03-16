import GalleryItem from 'widgets/GalleryItem'

let Gallery = React.createClass({

  propTypes: {
    photos: React.PropTypes.any.isRequired
  },

  getFigure(record, key) {
    return (<GalleryItem key={ key } record={ record } />)
  },

  render() {
    let { photos } = this.props

    return (
      <ul className={`gallery pull-${ photos.size > 1 ? 10 : 5 } fill-white radius-2 shadow-1`}>
        { photos.map(this.getFigure).toArray() }
      </ul>
    )
  }

})

export default Gallery
