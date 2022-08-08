import React, {useState} from 'react';

function ImageButton(){
    var [stateImg, setStateImg] = useState('Показать картинку');
    if(stateImg === 'Показать картинку'){
      return(
          React.createElement(
            'button' ,
            {onClick: () => setStateImg(stateImg = 'Закрыть') ,className: 'imageButton'} ,
            stateImg
        )
    )}
    if(stateImg === 'Закрыть'){
        return(
            React.createElement(
              'button' ,
              {onClick: () => setStateImg(stateImg = 'Показать картинку') ,className: 'imageButton'} ,
              stateImg
            )
            )   

    }
}



export default ImageButton