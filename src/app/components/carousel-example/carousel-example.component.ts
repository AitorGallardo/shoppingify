import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiCalendarRangeModule, TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';

@Component({
  selector: 'carousel-example',
  standalone: true,
  imports: [CommonModule,TuiCarouselModule,TuiPaginationModule,TuiCalendarModule,TuiCalendarRangeModule],
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
    hola(){
      console.log('que pasdsfasdfadsfasdfadsfad',event);
    }
}
