import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements AfterViewInit {
  @Input()
  src: string | undefined;

  @ViewChild('video', { static: true })
  video: ElementRef<HTMLVideoElement> | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.video) {
      this.video.nativeElement.muted = true;
      this.video.nativeElement.play();
    }
  }
}
