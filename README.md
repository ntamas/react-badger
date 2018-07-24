react-badger
============

Simple circular badge that can be attached to some corner of its container.

Usage
-----

```js
const Badge = require('react-badger')

const App = () => (
  <div style={{ background: '#f5f5f5', position: 'relative' }}>
    <Badge />
  </div>
)
```

Props
-----

The component supports the following props:

* `anchor`: defines the corner where the badge will be anchored to in its
  containing component. The containing component must have relative CSS
  positioning (i.e. `position: relative` in CSS) for the badge to be positioned
  properly unless the `anchor` is set to `inline`, in which case the badge will
  appear in the document flow like any other block-inlined element.
  Currently supported values are: `inline`, `topLeft`, `topRight`, `bottomLeft`,
  and `bottomRight`. The default value is `topRight`.

* `animated`: whether the badge should be animated when it appears or
  disappears.

* `color`: specifies the color of the badge. You can use anything that
  is accepted in CSS for the `background-color` property.

* `offset`: the offset of the badge from the corner where it is anchored to.
  Ignored when the anchor is set to `inline`. Must be an array of length 2,
  containing the horizontal and vertical offsets in CSS notation. (Pixel values
  can also be declared as numbers; percentages are allowed).

* `shadow`: whether to put a drop shadow below the badge

* `visible`: whether the badge is visible.

Any additional props are spread to the root `<div>` of the component.
Children are shown directly in the generated `<div>`, making it possible
to use children for displaying labels in the badge.
