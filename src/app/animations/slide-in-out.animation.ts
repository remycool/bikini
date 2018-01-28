import { trigger, state, animate, transition, style } from '@angular/animations';

export const SlideInOutAnimation =
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({opacity: 1, transform: 'translateX(0)'})),

        // route 'enter' transition
        transition('void => *', [
            style({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            animate('0.2s ease-in')
        ]),
        // route 'leave' transition
        transition('* => void', [

            animate('0.2s 0.1s ease-out',
                style(
                    {
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
        ])
    ]);