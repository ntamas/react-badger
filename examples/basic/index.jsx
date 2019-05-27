import React from 'react'
import ReactDOM from 'react-dom'

import Badge from '../../src/index'

const ANCHORS = 'topLeft topRight bottomLeft bottomRight inline'.split(' ')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchor: 'topRight',
      animated: true,
      color: 'red',
      label: '',
      offset: -4,
      shadow: true,
      size: 14,
      visible: true
    }
  }

  render () {
    const { label, ...rest } = this.state
    return (
      <div>
        <h1><code>react-badger</code></h1>

        <p className='lead'>Simple circular badge that can be attached to some corner of its container.</p>

        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#eee', display: 'inline-block', lineHeight: '48px', textAlign: 'center', marginBottom: '1em', position: 'relative', minWidth: 48, height: 48 }}>
            Box
            <Badge {...rest} style={{ color: 'white' }}>
              {label}
            </Badge>
          </div>
        </div>

        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-evenly' }}>
          <div>
            <h5>Anchors</h5>

            {ANCHORS.map(key =>
              <div key={key}>
                <input type='radio' name='anchor' id={'anchor_' + key} value={key} checked={key === this.state.anchor} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ anchor: event.target.value })
                    }
                  }
                } />
                <label htmlFor={'anchor_' + key}><code>{key}</code></label>
              </div>
            )}
          </div>

          <div>
            <h5>Offset</h5>

            {'0 -4 "25%" [5,10] null'.split(' ').map(key =>
              <div key={key}>
                <input type='radio' name='offset' value={key} id={'offset_' + key} checked={key === JSON.stringify(this.state.offset)} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ offset: JSON.parse(event.target.value) })
                    }
                  }
                } />
                <label htmlFor={'offset_' + key}><code>{key}</code></label>
              </div>
            )}
          </div>

          <div>
            <h5>Color</h5>

            {'black red #08f #ffcc00'.split(' ').map(key =>
              <div key={key}>
                <input type='radio' name='color' value={key} id={'color_' + key} checked={key === this.state.color} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ color: event.target.value })
                    }
                  }
                } />
                <label htmlFor={'color_' + key}><code>{key}</code></label>
              </div>
            )}

            <p><small>...or any CSS color.</small></p>
          </div>

          <div>
            <h5>Label</h5>
            {' \u2022 1 2 3'.split(' ').map(key =>
              <div key={'label ' + key}>
                <input type='radio' name='label' value={key} id={'label_' + key} checked={key === this.state.label} onChange={
                  event => {
                    if (event.target.checked) {
                      this.setState({ label: event.target.value })
                    }
                  }
                } />
                <label htmlFor={'label_' + key}><code>{key}</code></label>
              </div>
            )}
          </div>

          <div>
            <h5>Size</h5>

            {'14 20 30'.split(' ').map(key => Number.parseInt(key)).map(key =>
              <div key={key}>
                <input type='radio' name='size' value={key} id={'size_' + key} checked={key === this.state.size} onChange={
                  (event) => {
                    if (event.target.checked) {
                      this.setState({ size: Number.parseInt(event.target.value) })
                    }
                  }
                } />
                <label htmlFor={'size_' + key}><code>{key}</code></label>
              </div>
            )}
          </div>

          <div>
            <h5>Options</h5>

            <div>
              <input type='checkbox' name='animated' id='animated' value='1' checked={this.state.animated} onChange={
                event => this.setState({ animated: event.target.checked })
              } />
              <label htmlFor='animated'>animated</label>
            </div>
            <div>
              <input type='checkbox' name='shadow' id='shadow' value='1' checked={this.state.shadow} onChange={
                event => this.setState({ shadow: event.target.checked })
              } />
              <label htmlFor='shadow'>shadow</label>
            </div>
            <div>
              <input type='checkbox' name='visible' id='visible' value='1' checked={this.state.visible} onChange={
                event => this.setState({ visible: event.target.checked })
              } />
              <label htmlFor='visible'>visible</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
)
