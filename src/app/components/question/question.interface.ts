import { IScqQuestion } from './scq/scq.interface';

export interface IQuestionBase {
  id: string; // Unique identifier for the question
  questionNo: number;
  text: string; // The question text
  type: 'SCQ' | 'MCQ' | 'FILL_IN_THE_BLANK' | 'TYPE'; // Type of question
  answer?: string; // Answer(s) for the question
}

export type IQuestion = IScqQuestion;
