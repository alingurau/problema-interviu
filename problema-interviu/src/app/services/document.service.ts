import {Injectable, OnDestroy} from '@angular/core';
import { Observable, Observer } from "rxjs";
import { Content } from "../models/content.model";
import { RequestManagerService } from './request-manager.service';
import {SelfUnsubscribe} from "../shared/self-unsubscribe";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends SelfUnsubscribe implements OnDestroy{

  constructor(
    private requestManager: RequestManagerService
  ) {
    super();
  }

  getDocuments(): Observable<Array<Content>> {
    return new Observable<Array<Content>>((observer: Observer<Array<Content>>) => {
      const subscr = this.requestManager.getDocuments()
        .subscribe(
          (response) => {
            const documents: Content[] = [];
            for (const documentData of response) {
              documents.push(new Content(documentData));
            }
            observer.next(documents);
          },
        );
      this.addSubscription(subscr);
    });
  }

  getDocumentsByParentId(id: number): Observable<Content> {
    return new Observable<Content>((observer: Observer<Content>) => {
      const subscr = this.requestManager.getDocumentsByParentId(id)
        .subscribe(
          (response) => {
            const content = new Content(response);
            observer.next(content);
          },
        );
      this.addSubscription(subscr);
    });
  }

  ngOnDestroy(): void {
    this.dispose();
  }
}
