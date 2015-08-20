# merge-styles

Easily merge style objects.

### Usage

```js
import React from 'react';
import mergeStyles from 'merge-styles';

const styles = {
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

export default class Button extends React.Component {
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
