import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
declare var google: any; //new added line

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      
      this.options = {
          center: {lat: -23.545590, lng: 43.749987},
          zoom: 12
      };

      this.initOverlays();

      this.infoWindow = new google.maps.InfoWindow();
  }

  handleMapClick(event) {
      this.dialogVisible = true;
      this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
      let isMarker = event.overlay.getTitle != undefined;

      if (isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());

          this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});
      }
      else {
          this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});
      }
  }

  addMarker() {
      this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
      this.markerTitle = null;
      this.dialogVisible = false;
  }

  handleDragEnd(event) {
      this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
      if (!this.overlays||!this.overlays.length) {
          this.overlays = [
              new google.maps.Marker({position: {lat: -23.545590, lng: 43.749987}, title:"Hotel Lauria"}),
            ];
      }
  }
}
