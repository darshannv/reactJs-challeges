import React, { useEffect } from 'react'

function WindowEvent() {

    useEffect(() => {
        const doubleClick = () => alert('mouse pressed');

        window.addEventListener('dblclick', doubleClick);

        return () => window.removeEventListener('dblclick', doubleClick)
    }, []);

  return (
    <div>
        <h2>Window event active</h2>
    </div>
  )
}

export default WindowEvent