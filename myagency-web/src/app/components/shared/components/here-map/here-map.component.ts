import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ScriptLoaderService} from '../../../../services/script-loader.service';

declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements AfterViewInit {

  @ViewChild('map')
  public mapElement: ElementRef;

  @Input()
  public lat: any = 0;

  @Input()
  public lng: any = 0;

  @Input()
  public address: string;

  @Input()
  public width = '100%';

  @Input()
  public height = '200px';

  private appId = 'ACqtETFuRBLMlSSOlIaT';

  private appCode = 'y9FywrPFHFMiYnRREESjDA';

  public constructor(private scriptLoaderService: ScriptLoaderService) {
  }

  public ngAfterViewInit() {
    this.scriptLoaderService.load('here-core').then(() => {
      this.scriptLoaderService.load('here-service', 'here-ui', 'here-events').then(() => {
        const platform = this.initPlattform();
        const map = this.initMap(platform);
        this.setLocation(platform, map);
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));
  }


  private initPlattform(): any {
    const platform = new H.service.Platform({
      app_id: this.appId,
      app_code: this.appCode
    });
    return platform;
  }

  private initMap(platform: any) {
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: {lat: this.lat, lng: this.lng}
      }
    );
    const mapEvents = new H.mapevents.MapEvents(map);
    const behavior = new H.mapevents.Behavior(mapEvents);
    H.ui.UI.createDefault(map, defaultLayers);
    return map;
  }

  private setLocation(platform: any, map: any): void {
    const geocodingParams = {
      searchText: this.address
    };

    const onResult = (result) => {
      const locations = result.Response.View[0].Result;
      // Add a marker on first location found
      const position = {
        lat: locations[0].Location.DisplayPosition.Latitude,
        lng: locations[0].Location.DisplayPosition.Longitude
      };
      map.setCenter(position);
      const marker = new H.map.Marker(position);
      map.addObject(marker);
    };

    const geocoder = platform.getGeocodingService();
    geocoder.geocode(geocodingParams, onResult, (e) => alert(e));
  }
}
