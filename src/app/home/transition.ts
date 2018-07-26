import { animate, query as q, stagger, style, transition, trigger } from '@angular/animations';

const query = (s, a, o = { optional: true }) => q(s, a, o);
// export const homeTransition = trigger('homeTransition', [
//     transition(':enter', [
//         query('.image', style({ opacity: 0 })),
//         query('.image', stagger(50, [
//             style({ transform: 'translateY(100px)' }),
//             animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
//         ])),
//     ]),
//     transition(':leave', [
//         query('.image', stagger(10, [
//             style({ transform: 'translateY(0px)', opacity: 1 }),
//             animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
//         ])),
//     ])
// ]);
export const homeTransition = trigger('homeTransition', [
    transition(':enter', [
        query('.image', style({ opacity: 0, background: 'black' })),
        query('.fill', style({ opacity: 0 })),
        query('.image', stagger(50, [
            style({ transform: 'scale(0)', background: 'green' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1, background: 'black' })),
        ])),
        query('.fill', stagger(50, [
            style({ opacity: 0 }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1 })),
        ])),
    ]),
    transition(':leave', [
        query('.fill', stagger(10, [
            style({ background: 'white' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ background: 'blue' })),
        ])),
        query('.image', stagger(10, [
            style({ transform: 'translateX(0)', opacity: 1, background: 'black' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(100%)', opacity: 0, background: 'blue' })),
        ])),
    ])
]);
