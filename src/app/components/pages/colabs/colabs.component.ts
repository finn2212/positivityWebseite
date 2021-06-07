import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colabs',
  templateUrl: './colabs.component.html',
  styleUrls: ['./colabs.component.css']
})
export class ColabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: 'assets/images/silder_leon_ubud.png',
    thumbImage: 'assets/images/silder_leon_ubud.png',
    alt: 'alt of image',
    title: 'Leon Ubud Bali'
},  
{
  image: 'assets/images/silder_main_design.gif',
  thumbImage: 'assets/images/silder_main_design.gif',
  alt: 'alt of image',
  title: 'Main Design CH'
}, 
{
  image: 'assets/images/silder_roots_treehouse.png',
  thumbImage: 'assets/images/silder_roots_treehouse.png',
  alt: 'alt of image',
  title: 'Roots Treehouse Bali'
}, 
{
  image: 'assets/images/silder_sebatu.jpeg',
  thumbImage: 'assets/images/silder_sebatu.jpeg',
  alt: 'alt of image',
  title: 'Sebatu Sanctuary'
}, 
{
  image: 'assets/images/slider_bali_beach_glamping.png',
  thumbImage: 'assets/images/slider_bali_beach_glamping.png',
  alt: 'alt of image',
  title: 'Bali Beach Glamping'
}, 
{
  image: 'assets/images/slider_udaya.jpeg',
  thumbImage: 'assets/images/slider_udaya.jpeg',
  alt: 'alt of image',
  title: 'The Udaya Resort Bali'
}
];

}
