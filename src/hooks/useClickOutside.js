import { useRef, useEffect } from 'react';

const useClickOutside = (handler, listenTo) => {
  const ref = useRef();

  useEffect(() => {
    const outsideClickHandler = e => {
      if (!ref.current.contains(e.target)) handler()
    }
    document.addEventListener('click', outsideClickHandler)

    return () => document.removeEventListener('click', outsideClickHandler)

  }, [listenTo])

  return ref
}

export default useClickOutside;
