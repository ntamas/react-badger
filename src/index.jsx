import PropTypes from 'prop-types'
import React, { useRef } from 'react'
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
export const Badge = ({
  anchor = 'topRight',
  animated = true,
  children,
  color = 'red',
  offset = -3,
  shadow = true,
  size = 10,
  style,
  visible = true,
  ...rest
}) => {
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

  const ref = useRef();

  if (animated) {
    return (
      <Transition appear timeout={300} in={visible} nodeRef={ref}>
        {
          state => (
            <div
              ref={ref}
              style={{
                ...baseStyles,
                transform: (state === 'entering' || state === 'entered') ? 'scale(1)' : 'scale(0)',
                transition: 'transform 300ms ease-in-out, background-color 300ms linear',
                ...style
              }} {...rest}
            >
              {children}
            </div>
          )
        }
      </Transition>
    )
  } else {
    return visible
      ? <div ref={ref} style={baseStyles} {...rest}>{children}</div>
      : null
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

export default Badge
