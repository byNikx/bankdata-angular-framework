import { 
  Directive, 
  ElementRef, 
  Renderer2,
  Input,
  OnInit
} from '@angular/core';


@Directive({
  selector: 'bd-tab-link, [bdTabLink]',
  exportAs: 'tabLink'
})
export class TabLinkDirective implements OnInit {

  nativeElement: any;
  @Input()
  active: boolean;

  @Input()
  disabled: boolean;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

  ngOnInit(){
  	this.nativeElement = this.element.nativeElement;
  	this.renderer.addClass(this.nativeElement, 'bd-tab-link')
  }

}
