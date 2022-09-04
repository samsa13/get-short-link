import React, { FC } from 'react'
import { useClipboard } from 'use-clipboard-copy';

interface ClipboardProp {
    url: string
}

const Clipboard:FC<ClipboardProp> = ({ url }) => {
    const clipboard = useClipboard();
    return (
      <div>
        {<input ref={clipboard.target} 
                value={url} 
                readOnly 
                style={{opacity: 0, visibility:'hidden'}}/>}
        <button onClick={clipboard.copy}>Скопировать ссылку</button>
      </div>
    );
  }

export default Clipboard

