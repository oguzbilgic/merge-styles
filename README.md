# merge-styles

Easily merge style objects.

### Usage

```js
import mergeStyles from 'merge-styles';

styles = {
  base: {
    backgroundColor: 'black'
  }
  hover: {
    backgroundColor: 'blue'
  }
  sizes: {
    small: {
      fontSize: 10
    },
    large: {
      fontSize: 20
    }
  }
};

class Button extends React.Component {
  render() {
    return (
      <button style={mergeStyles(
        styles.base,
        this.state.hover && styles.hover,
        this.props.size == 'small' && styles.sizes.small,
        this.props.size == 'large' && styles.sizes.large
      )}/>
      {this.props.text}
      </button>
    );
  }
}
