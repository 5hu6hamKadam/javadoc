import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MermaidAPI } from 'ngx-markdown';
import mermaid from 'mermaid';
import { ITutorial, TutorialService } from 'src/app/services/tutorial.service';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { APP_NAME } from 'src/app/app.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {
  public mermaidOptions!: MermaidAPI.Config;
  public tutorial$: Observable<ITutorial | null> =
    this.tutorialService.tutorial$;

  constructor(
    private route: ActivatedRoute,
    private tutorialService: TutorialService,
    private title: Title,
    private meta: Meta
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe(async (map) => {
      // Extract the course and topic from the route
      const course = map.get('course');
      const topic = map.get('topic') || undefined;
      if (!course) {
        return;
      }

      const { seo } = await this.tutorialService.updateTutorial(course, topic);
      // Update the title and meta tags
      this.title.setTitle(`${seo.title} | ${APP_NAME}`);
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    });
  }

  public onLoad(): void {
    mermaid.initialize({ startOnLoad: true });
  }
}
