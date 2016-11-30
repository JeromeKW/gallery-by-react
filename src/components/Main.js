require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var imageDatas = require('json-loader!../data/imagedatas.json');

imageDatas = (function(imagedatasArr){
    for(var i=0; i<imagedatasArr.length; i++){
        var singleImageData = imagedatasArr[i];
        singleImageData.imageUrl = require('../images/'+ singleImageData.fileName);

        imagedatasArr[i] = singleImageData;
    }
    return imagedatasArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
        <section className="stage">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
