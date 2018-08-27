import { 
  Directive, 
  ElementRef, 
  Renderer2,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: 'bd-tab-nav, [bdTabNav]',
  exportAs: 'tabNav'
})
export class TabNavDirective implements OnInit {

  nativeElement: any;
  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit(){
  	this.nativeElement = this.element.nativeElement;
  	this.renderer.addClass(this.nativeElement, 'bd-tabs')
  }

  public updateActiveLink(element: ElementRef){
  	return null;
  }

}
