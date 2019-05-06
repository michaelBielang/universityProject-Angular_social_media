import {Injectable} from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  {name: 'here-core', src: 'https://js.api.here.com/v3/3.0/mapsjs-core.js'},
  {name: 'here-service', src: 'https://js.api.here.com/v3/3.0/mapsjs-service.js'},
  {name: 'here-ui', src: 'http://js.api.here.com/v3/3.0/mapsjs-ui.js'},
  {name: 'here-events', src: 'https://js.api.here.com/v3/3.0/mapsjs-mapevents.js'}
];

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}


