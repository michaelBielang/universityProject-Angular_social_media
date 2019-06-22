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


  public uploadFile(file: File): AngularFireUploadTask {
    const savingPath = `${this.authService.user.getValue().uid}/${file.name}`;
    const task = this.storage.upload(savingPath, file);
    return task;
  }

  public uploadFiles(files: File[]): AngularFireUploadTask[] {
    const tasks = files.map(file => this.storage.upload(`${this.authService.user.getValue().uid}/${file.name}`, file));
    return tasks;
  }
}
