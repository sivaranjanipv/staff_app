import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage({
  segment: 'session/:sessionId'
})
@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;

  constructor(
    public navParams: NavParams
  ) {}

  // ionViewWillEnter() {
  //   this.dataProvider.load().subscribe((data: any) => {
  //     if (
  //       data &&
  //       data.schedule &&
  //       data.schedule[0] &&
  //       data.schedule[0].groups
  //     ) {
  //       for (const group of data.schedule[0].groups) {
  //         if (group && group.sessions) {
  //           for (const session of group.sessions) {
  //             if (session && session.id === this.navParams.data.sessionId) {
  //               this.session = session;
  //               break;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
}
