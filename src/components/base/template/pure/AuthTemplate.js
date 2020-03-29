import React from 'react';
import cx from 'classnames';
/**
 * 
 * @param {*} param0 ReactElement
 */

function AuthTemplate(props) {
  const {
    children = null,
    footer = null,
    header = null,
    staticPage = null,
    className
  } = props;

  return (
    <div className={className}>
      {header && <div className="auth__header"> {header} </div>}
      <div className={cx("auth__section",{static:staticPage})}>{children}</div>
      {footer && <div className="auth__footer"> {footer} </div>}
    </div>
  );
}



export default AuthTemplate;