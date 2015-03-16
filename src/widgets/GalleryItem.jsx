import Figure     from 'widgets/Figure'
import prettydate from 'pretty-date'

let GalleryItem = React.createClass({

  propTypes: {
    record: React.PropTypes.any.isRequired
  },

  getPrettyDate(time) {
    return prettydate.format(new Date(time))
  },

  render(record) {
    let { record } = this.props

    return (
      <li className="ruled-bottom pad-1-left pad-1-right flex flex-center">
        <Figure src={ record.get('photo') } avatar small />
        <p className="pad-1-left">
          Uploaded <b>{ this.getPrettyDate(record.get('timestamp')) }</b>
        </p>
      </li>
    )
  }

})

export default GalleryItem
