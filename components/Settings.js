import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { server } from '../config';
import jsCookie from 'js-cookie';
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const Settings = (props) => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'lakshaythegupta'
        }
      });
      const myImage = cld.image(props.public_id); 
     // myImage.resize(fill().width(100).height(100));
     myImage
     .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
     .roundCorners(byRadius(20));    // Round the corners.
   
      return (
        <div>
          <AdvancedImage cldImg={myImage} />
        </div>
      )
};

export default Settings;
