import { animate, animateChild, group, query as q, sequence, style, transition, trigger } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const simpleTransition = trigger('simpleTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', top: '75px', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        sequence([
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                        style({ transform: 'translateX(-100%)' }))
                ]),
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                        style({ transform: 'translateX(0%)' })),
                ]),
            ]),
            query(':enter', animateChild()),
        ])
    ])
]);
