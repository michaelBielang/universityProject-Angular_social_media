import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor(private storage: AngularFireStorage,
              private authService: AuthService) {
  }


  public uploadFile(file: Blob): AngularFireUploadTask {
    const savingPath = this.authService.user.getValue().uid;
    const task = this.storage.upload(savingPath, file);
    return task;
  }

  public uploadFiles(files: Blob[]): AngularFireUploadTask[] {
    const savingPath = this.authService.user.getValue().uid;
    const tasks = files.map(file => this.storage.upload(savingPath, file));
    return tasks;
  }
}
