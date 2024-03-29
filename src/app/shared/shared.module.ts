import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimerPipe } from './pipes/timer.pipe';
import { ToCelsiusPipe } from './pipes/to-celsius.pipe';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { FormsModule } from '@angular/forms';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    TimerPipe,
    ToCelsiusPipe,
    ToFahrenheitPipe,
    TempConverterPipe,
    DateFormatPipe,
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    NavbarComponent,
    TimerPipe,
    ToCelsiusPipe,
    ToFahrenheitPipe,
    FormsModule,
    TempConverterPipe,
    DateFormatPipe,
  ],
})
export class SharedModule {}
