import { Component } from '@angular/core';
import { faEnvelope,faIdCardClip,faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  envelope=faEnvelope;
  card=faIdCardClip;
  linkedin=faLinkedin;
  twitter=faTwitter;
  facebook=faFacebook;  
  copyright=faCopyright;
}
