import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITopic } from '../components/tree-view/tree-view.component';
import { IQuestion } from '../components/question/question.interface';

export interface IQuiz {
  title: string;
  questions: IQuestion[];
}
export interface ISeo {
  title: string;
  description: string;
  keywords: string;
}
export interface ITutorial {
  seo: ISeo; // SEO data for the tutorial
  content: string; // Content of the tutorial
  outline: ITopic[]; // Outline of the tutorial
  quiz?: IQuiz;
}

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  private tutorialSubject: BehaviorSubject<ITutorial | null> =
    new BehaviorSubject<ITutorial | null>(null);
  public tutorial$: Observable<ITutorial | null> =
    this.tutorialSubject.asObservable();

  constructor() {}

  public async updateTutorial(
    courseId: string,
    topicId?: string
  ): Promise<ITutorial> {
    // Fetch the tutorial data based on courseId and topicId
    // This is a placeholder implementation. Replace it with actual data fetching logic.
    if (!topicId) {
      throw new Error('Topic ID is required');
    }
    let { outline, seo } = await this.getOutlineAndSeo(courseId, topicId);
    const tutorial: ITutorial = {
      seo: seo,
      content: `/assets/tutorials/${courseId}/${topicId}.md`,
      outline: outline,
    };

    // Update the BehaviorSubject with the new tutorial data
    this.tutorialSubject.next(tutorial);
    return tutorial;
  }

  private async getOutlineAndSeo(courseId: string, topicId: string) {
    const outline =
      (await import(`../../assets/tutorials/${courseId}/outline.json`))
        .default || [];
    const seo =
      (await import(`../../assets/tutorials/${courseId}/${topicId}.seo.json`))
        .default || [];

    return { outline, seo };
  }
}
