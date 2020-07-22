import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ //decoraotr
    selector : '[appDropdown]' 
})

export class DropdonDirective{

    @HostBinding('class.open') showdropdown = false;

    @HostListener ('click') toggleDown(){
        this.showdropdown = !this.showdropdown;
    }
}