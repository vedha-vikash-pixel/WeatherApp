import { trigger, style, animate, transition ,state} from '@angular/animations';

export let rotate = trigger('rotate', [
    state('beforeapi', style({
        
    })),
    state('afterapi', style({
        transform: 'rotateY(360deg)'
    })),
    transition('beforeapi => afterapi', animate('1000ms ease'))
])

export let fadein = trigger('fadein', [transition('void => *', [style({ opacity: 0 }), animate(1500)])])