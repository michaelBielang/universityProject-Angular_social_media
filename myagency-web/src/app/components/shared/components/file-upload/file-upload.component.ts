import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FileManagerService} from '../../../../services/file-manager.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UploadTask} from '@angular/fire/storage/interfaces';
import {MatSnackBar} from '@angular/material';
import {AngularFireUploadTask} from '@angular/fire/storage';
import * as firebase from 'firebase';

export interface ImageUpload {
  task: UploadTask;
  uploadPercentage: Observable<number | undefined>;
  src: Promise<string>;
}

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input()
  public maxImages: number;

  @Output()
  public downloadSrcListChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  public uploadFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  private uploadFinishedCount = 0;

  private _downloadSrcList: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public set downloadSrcList(list: string[]) {
    this._downloadSrcList.next(list);
    this.downloadSrcListChange.emit(list);
  }

  public get downloadSrcList(): string[] {
    return this._downloadSrcList.getValue();
  }


  @ViewChild('file')
  private file;

  public files: Set<ImageUpload> = new Set();

  public dropzoneActive = false;

  constructor(public fileManagerService: FileManagerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onFilesAdded() {
    const files: FileList = this.file.nativeElement.files;
    this.uploadFiles(files);
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  deleteFile(task: ImageUpload) {
    if (task.task.snapshot.state !== 'success') {
      task.task.cancel();
    } else {
      task.task.snapshot.ref.delete().catch(e => console.log(e));
      this.uploadFinishedCount--;
    }
    this.files.delete(task);

    this.uploadFinished.emit(this.uploadFinishedCount === this.files.size);
    task.src.then(src => this.downloadSrcList = this.downloadSrcList.filter(savedSrc => src !== savedSrc));
  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  uploadFiles(fileList: FileList) {
    const newFiles = Array.from(fileList);

    if (this.files.size + newFiles.length > this.maxImages) {
      this.snackBar.open('You reached the max size');
    } else {
      const uploads = this.fileManagerService.uploadFiles(newFiles);
      uploads.forEach(upload => {
        this.storeUpload(upload);
      });
    }
  }

  private storeUpload(upload: AngularFireUploadTask) {
    const imageUpload: ImageUpload = {
      task: upload.task,
      uploadPercentage: upload.percentageChanges(),
      src: upload.task.snapshot.ref.getDownloadURL()
    };
    this.files.add(imageUpload);

    this.uploadFinished.emit(this.uploadFinishedCount === this.files.size);
    imageUpload.task.on(firebase.storage.TaskEvent.STATE_CHANGED, null, null, () => {
      this.uploadFinishedCount++;
      this.uploadFinished.emit(this.uploadFinishedCount === this.files.size);
    });
    imageUpload.src.then(url => this.downloadSrcList = [...this.downloadSrcList, url]);
  }
}
