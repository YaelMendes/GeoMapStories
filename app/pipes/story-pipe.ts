import { Pipe, PipeTransform } from '@angular/core';
import {Story} from '../objects/story';

@Pipe({
  name: 'storyShortPipe',
  pure: true
})
export class StoryPipe implements PipeTransform {

  transform(value: Story, ...args: any[]): string {
    return value.description ?
      value.description.slice(0, 6) + "..." + value.user.name.slice(0, 3) + "...":
      "";
  }


}
