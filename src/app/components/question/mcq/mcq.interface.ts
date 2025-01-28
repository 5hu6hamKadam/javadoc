import { IQuestionBase } from '../question.interface';

export interface IMcqQuestion extends IQuestionBase {
  type: 'MCQ'; // Enforcing SCQ as type
  options: string[]; // List of options for the single-choice question
}
