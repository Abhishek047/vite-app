import { useEffect, useState } from 'react';
import { Question } from '../modal/QuestionAssessmentModal';
import questionDataJSON from '../__mock/mockQuestions.json';

const questionsData: Question[] = questionDataJSON.questions as Question[];

export const useAssessmentQuestions = (id: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (id) {
      setQuestions(questionsData);
    }
  }, [id]);
  return { questions, isLoading: false };
};
