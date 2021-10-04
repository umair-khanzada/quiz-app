import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

class Quiz {
  constructor(data) {
    this.quizId = uuidv4();
    this.question = data.question;
    this.options = {
      optionA: data.optionA,
      optionB: data.optionB,
      optionC: data.optionC,
      optionD: data.optionD,
    };
    this.correctOption = data.correctOption;
  }
}

export default function QuizForm() {
  const initialFormState = () => ({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: '',
  });

  const [formData, updateFormData] = useState(initialFormState());
  const [quizList, updateQuizList] = useState([]);

  const handleOnInputChange = (ev) => {
    const { name, value } = ev.target;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    updateFormData(updatedFormData);
  };

  const handleCreateQuiz =async (ev) => {
    ev.preventDefault();
    const newQuiz = new Quiz(formData);
    const updatedQuizList = [...quizList, newQuiz];
    console.log('newQuiz: ', newQuiz);
    const res = await fetch('http://localhost:5000/quizquestion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newQuiz),
    })
    const data = await res.json()
    console.log('data: ', data);
  
    updateQuizList(updatedQuizList);
    updateFormData(initialFormState());
  };

  return (
    <>
      {/* Create Quiz Card */}
      <Card elevation={3} component="form" onSubmit={handleCreateQuiz}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            marginBottom={2}
          >
            Create Quiz
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="question">Write Question</InputLabel>
                <Input
                  id="question"
                  aria-describedby="my-helper-text"
                  fullWidth
                  required
                  name="question"
                  value={formData.question}
                  onChange={handleOnInputChange}
                />
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="optionA">Option A</InputLabel>
                <Input
                  id="optionA"
                  name="optionA"
                  aria-describedby="my-helper-text-1"
                  fullWidth
                  required
                  value={formData.optionA}
                  onChange={handleOnInputChange}
                />
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="optionB">Option B</InputLabel>
                <Input
                  id="optionB"
                  name="optionB"
                  aria-describedby="my-helper-text-2"
                  fullWidth
                  required
                  value={formData.optionB}
                  onChange={handleOnInputChange}
                />
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="optionC">Option C</InputLabel>
                <Input
                  id="optionC"
                  name="optionC"
                  aria-describedby="my-helper-text-3"
                  fullWidth
                  required
                  value={formData.optionC}
                  onChange={handleOnInputChange}
                />
              </FormControl>
            </Grid>
            <Grid xs={6} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="optionD">Option D</InputLabel>
                <Input
                  id="optionD"
                  name="optionD"
                  aria-describedby="my-helper-text-4"
                  fullWidth
                  required
                  value={formData.optionD}
                  onChange={handleOnInputChange}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="correct-option-label">
                  Choose Correct Option
                </InputLabel>
                <Select
                  labelId="correct-option-label"
                  id="correctOption"
                  name="correctOption"
                  label="Choose Correct Option"
                  required
                  value={formData.correctOption}
                  onChange={handleOnInputChange}
                >
                  <MenuItem value="optionA">{formData.optionA}</MenuItem>
                  <MenuItem value="optionB">{formData.optionB}</MenuItem>
                  <MenuItem value="optionC">{formData.optionC}</MenuItem>
                  <MenuItem value="optionD">{formData.optionD}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid xs={12} item>
              <Button size="small" type="submit">
                Create
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>

      {/* Quiz List */}
      <Card elevation={3} />
    </>
  );
}
