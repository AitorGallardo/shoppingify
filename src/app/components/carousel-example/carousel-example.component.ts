import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';

@Component({
  selector: 'carousel-example',
  standalone: true,
  imports: [CommonModule,TuiCarouselModule,TuiPaginationModule],
  templateUrl: './carousel-example.component.html',
  styleUrl: './carousel-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselExampleComponent {
	    index = 2;
 
	    readonly items = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
    ];
}
