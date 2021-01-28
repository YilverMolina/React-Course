'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    const like = () => this.setState({ liked: true });

    const comps = [
      e(
        'button',
        { onClick: () => like() },
        'Like 1'
      ),
      e(
        'button',
        { onClick: () => like() },
        'Like 2'
      )
    ];

    return comps;
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);