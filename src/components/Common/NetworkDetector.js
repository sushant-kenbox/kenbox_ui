import React, { Component } from 'react';
import { toast } from 'react-toastify';
const myNewToastId = 'myId';
const toastId = null;

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {

      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
            })
              .then(() => {
                this.setState({ isDisconnected: false }, () => {
                  return clearInterval(webPing)
                });
              }).catch(() => this.setState({ isDisconnected: true }))
          }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    }

    render() {
      const { isDisconnected } = this.state;

      return (
        <div>

          {isDisconnected && (<div className="internet-error">

            {/* <h5 className="text-danger p-2 text-center">Internet connection lost</h5> */}
            {toast.update(toastId, toast(`Internet connection lost`, {
              toastId: myNewToastId,
              type: 'error'
            }))
            }
          </div>)
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}