export interface AnswerParameters {
  stress_coping: number;
  resilience: number;
  anxiety: number;
  depression: number;
  sleep_quality?: number;
  stress_resistance?: number;
  tolerance_uncertainty?: number;
  mood?: number;
}

export interface AnswerOption {
  id: number;
  option: string;
  text: string;
  parameters: AnswerParameters;
}

export interface Question {
  id: number;
  question: string;
  answers: AnswerOption[];
}
