import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-2';

  items: string[] = ['dd', 'ee', 'ww'];
 public onSelectionChanged(e: Event) {
    console.log('eee', e)
  }

  data = [
    {
      list: ['sdfsadfasf1', '2ddddfd', '3dfsdf', '4sdfds', '5sdfsd', '6sdfdsf', '7fffdfd', '8sfdf', '9dsfdsf'],
      currentIndex: 2
    }
  ]

  change ({ gIndex, iIndex }: any) {
    // console.log(gIndex, iIndex)
  }
}
