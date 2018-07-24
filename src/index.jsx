import PropTypes from 'prop-types'
import React from 'react'
import Transition from 'react-transition-group/Transition'

/**
 * Base style of the badge.
 */
const defaultBaseStyles = {
  borderRadius: '50%',
  content: '',
  display: 'block',
  textAlign: 'center',
  userSelect: 'none'
}

/**
 * Shadow style of the badge.
 */
const shadowStyles = {
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.65)'
}

/**
 * Colored badge, optionally attached to some corner of its container.
 *
 * When the badge is meant to be attached to some corner of its container, the
 * container must be set to `position: relative` in CSS for the badge to work
 * nicely.
 */
export const Badge = ({ anchor, animated, children, color, offset, shadow, size, style, visible, ...rest }) => {
  const baseStyles = {
    ...defaultBaseStyles,
    ...shadow ? shadowStyles : undefined,
    background: color,
    fontSize: 10,
    lineHeight: size + 'px',
    minHeight: size,
    minWidth: size
  }

  if (anchor && (offset === null || offset === undefined)) {
    offset = [0, 0]
  }

  if (!Array.isArray(offset)) {
    offset = [offset, offset]
  }

  if (anchor === 'inline') {
    baseStyles.display = 'inline-block'
  } else {
    baseStyles.position = 'absolute'
  }

  if (offset) {
    switch (anchor) {
      case 'topLeft':
        baseStyles.top = offset[1]
        baseStyles.left = offset[0]
        break

      case 'bottomLeft':
        baseStyles.bottom = offset[1]
        baseStyles.left = offset[0]
        break

      case 'bottomRight':
        baseStyles.bottom = offset[1]
        baseStyles.right = offset[0]
        break

      case 'topRight':
        baseStyles.top = offset[1]
        baseStyles.right = offset[0]
    }
  }

  if (animated) {
    return (
      <Transition appear timeout={300} in={visible}>
        {
          state => (
            <div style={{
              ...baseStyles,
              transform: (state === 'entering' || state === 'entered') ? 'scale(1)' : 'scale(0)',
              transition: 'transform 300ms ease-in-out, background-color 300ms linear',
              ...style
            }} {...rest}>
              {children}
            </div>
          )
        }
      </Transition>
    )
  } else {
    return visible ? (
      <div style={baseStyles} {...rest}>{children}</div>
    ) : null
  }
}

Badge.propTypes = {
  anchor: PropTypes.oneOf(['inline', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  color: PropTypes.string,
  offset: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
      ])
    )
  ]),
  size: PropTypes.number,
  style: PropTypes.object,
  visible: PropTypes.bool
}

Badge.defaultProps = {
  animated: true,
  anchor: 'topRight',
  color: 'red',
  offset: -3,
  shadow: true,
  size: 10,
  visible: true
}

export default Badge
