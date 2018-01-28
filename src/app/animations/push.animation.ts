import { trigger, state, animate, transition, style } from '@angular/animations';

export const Push =
    trigger('pushed', [

        state('inactive', style({transform: 'scale(1)'})),
        state('active', style({transform: 'scale(1.1)'})),
        transition('inactive => active',animate('100ms ease-in')),
        transition('active => inactive',animate('100ms ease-out'))
    ]);