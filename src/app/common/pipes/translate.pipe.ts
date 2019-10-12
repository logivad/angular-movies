import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private localeService: LocaleService,
  ) {}

  transform(translationKey: string): string {
    return this.localeService.translate(translationKey);
  }
}
