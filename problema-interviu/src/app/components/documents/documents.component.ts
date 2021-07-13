import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelfUnsubscribe} from "../../shared/self-unsubscribe";
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../services/document.service";
import {Content} from "../../models/content.model";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent extends SelfUnsubscribe implements OnInit, OnDestroy {

  documents: Content[] = [];

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    const documentSubcr = this.documentService.getDocuments().subscribe((documents: Content[]) => {
      documents.map((item, index) => {
        this.documents = documents;
      });
    });
    this.addSubscription(documentSubcr);
  }

  ngOnDestroy(): void {
    this.dispose();
  }

}
