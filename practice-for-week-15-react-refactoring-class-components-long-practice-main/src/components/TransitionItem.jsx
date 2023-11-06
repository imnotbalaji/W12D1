import { useRef } from "react"
import { CSSTransition } from "react-transition-group";

const TransitionItem = ({ selectName, result, ...props }) => {
    const nodeRef = useRef();

    return (
        <CSSTransition
            nodeRef={nodeRef}
            key={result}
            classNames="result"
            timeout={{ enter: 500, exit: 300 }}
            {...props}
        >
        <li ref={nodeRef} className="nameLi" onClick={selectName}>
          {result}
        </li>
      </CSSTransition>
    )
}

export default TransitionItem