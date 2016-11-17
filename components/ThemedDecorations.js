const React = require('react');

class ThemedDecorations extends React.Component {
  render(){
    let addedClassName = React.Children.map(this.props.children, child=> {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>
        {addedClassName}
      </div>
    )
  }
}

module.exports = ThemedDecorations
