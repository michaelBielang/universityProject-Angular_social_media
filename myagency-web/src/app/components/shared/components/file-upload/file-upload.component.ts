import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FileManagerService} from '../../../../services/file-manager.service';
import {AngularFireUploadTask} from '@angular/fire/storage';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('file')
  private file;

  public files: Set<AngularFireUploadTask> = new Set();

  private allUploadObservables: Promise<string>[] = [];

  public uploadFinished = false;

  public dropzoneActive = false;


  //TODO when finished change this and maybe output the uploadFinished boolean
  @Output()
  public downloadSrcList: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(public fileManagerService: FileManagerService) {
  }

  ngOnInit() {
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    debugger;
    for (const key in files) {
      if (!isNaN(parseInt(key, 10))) {
        const upload = this.fileManagerService.uploadFile(files[key]);
        this.files.add(upload);
      }
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    this.fileManagerService.uploadFiles(Array.from(fileList));
  }
}
